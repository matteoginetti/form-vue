<script setup lang="ts">
	import '~/composables/useTheme'
	import { useColor } from '~/composables/useColor'
	import { useHead } from '@vueuse/head'

	const { colorHex } = useColor('brand')

	useHead({
		title: 'Volver Vue Starter',
		meta: [
			{
				name: 'description',
				content: 'A Volverjs Template (Vite + Vue) inspired by Vitesse',
			},
			{
				name: 'theme-color',
				content: colorHex,
			},
			{
				name: 'msapplication-TileColor',
				content: colorHex,
			},
		],
	})
</script>

<template>
	<RouterView />
</template>
