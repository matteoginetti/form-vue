<script lang="ts" setup>
	import type { PropType } from 'vue'
	import { computed } from 'vue'

	const props = defineProps({
		code: {
			type: [String, Array] as PropType<string | string[]>,
			default: '',
		},
	})
	const localCode = computed(() => {
		if (typeof props.code === 'string') {
			return props.code
		}
		return props.code.join('\n')
	})
</script>

<template>
	<code
		class="font-mono p-lg bg-surface text-left block rounded-lg shadow-md overflow-auto">
		<pre class="whitespace-pre">{{ localCode }}</pre>
	</code>
</template>
