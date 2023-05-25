import type { AppModule } from '~/types'
import { createI18n } from 'vue-i18n'
// import { z as Zod } from 'zod'
// import { makeZodI18nMap } from 'zod-vue-i18n'

// Import i18n resources
// https://vitejs.dev/guide/features.html#glob-import
const messages = Object.fromEntries(
	Object.entries(
		import.meta.glob<{ default: { [locale: string]: object } }>(
			'../../locales/*.y(a)?ml',
			{
				eager: true,
			},
		),
	).map(([key, value]) => {
		const yaml = key.endsWith('.yaml')
		return [key.slice(14, yaml ? -5 : -4), value.default]
	}),
)

/*
 * Setup i18n
 * https://vue-i18n.intlify.dev/
 */
export const i18n = createI18n({
	legacy: false,
	globalInjection: true,
	fallbackWarn: false,
	locale: 'it',
	messages,
})

/* Zod.setErrorMap(makeZodI18nMap(i18n))

i18n.global.mergeLocaleMessage('it', {
	errors: {
		invalidTypeReceivedUndefined: 'Questo campo è obbligatorio',
		invalidEnumValue: 'Sono previste solo: {options}',
	},
}) */

export const install: AppModule = ({ app }) => {
	app.use(i18n)
}
