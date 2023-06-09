import { defineConfig } from "vite";
import path from "path";
import Vue from "@vitejs/plugin-vue";
import ESLint from "vite-plugin-eslint";
import Stylelint from "vite-plugin-stylelint";
import Pages from "vite-plugin-pages";
import Components from "unplugin-vue-components/vite";
import VueI18n from "@intlify/unplugin-vue-i18n/vite";
import { VitePWA } from "vite-plugin-pwa";
import { VolverResolver } from "@volverjs/ui-vue/resolvers/unplugin";

export default defineConfig({
    resolve: {
        alias: {
            "~/": `${path.resolve(__dirname, "src")}/`,
        },
    },

    plugins: [
        // https://github.com/vitejs/vite-plugin-vue
        Vue({
            include: [/\.vue$/],
        }),

        // https://github.com/gxmari007/vite-plugin-eslint
        ESLint({
            exclude: ["**/node_modules/**", '**/@volverjs/**'],
        }),

        // https://github.com/ModyQyW/vite-plugin-stylelint
        Stylelint(),

        // https://github.com/hannoeru/vite-plugin-pages
        Pages({
            routeBlockLang: "yaml",
        }),

        // https://github.com/antfu/unplugin-vue-components
        Components({
            extensions: ["vue"],
            // allow auto import and register components
            include: [/\.vue$/, /\.vue\?vue/],
            dts: "src/components.d.ts",
            exclude: [
                /[\\/]ui-vue[\\/]/,
                /[\\/]\.git[\\/]/,
                /[\\/]\.nuxt[\\/]/,
            ],
            resolvers: [
                VolverResolver({
                    importStyle: "scss",
                    directives: true,
                }),
            ],
        }),

        // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
        VueI18n({
            defaultSFCLang: "yaml",
            include: [path.resolve(__dirname, "locales/**")],
        }),

        // https://github.com/antfu/vite-plugin-pwa
        VitePWA({
            registerType: "autoUpdate",
            includeAssets: ["favicon.svg", "safari-pinned-tab.svg"],
            manifest: {
                name: "Volver Startup Template",
                short_name: "Scania",
                theme_color: "#ffffff",
                icons: [
                    {
                        src: "/pwa-192x192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                    {
                        src: "/pwa-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                    {
                        src: "/pwa-512x512.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "any maskable",
                    },
                ],
            },
        }),
    ],

    css: {
        preprocessorOptions: {
            scss: { additionalData: `@use "./src/assets/scss/settings" as *;` },
        },
    },

    optimizeDeps: {
        include: ["vue", "vue-router", "@vueuse/core", "@vueuse/head"],
        exclude: ["@volverjs/ui-vue"],
    },
});
