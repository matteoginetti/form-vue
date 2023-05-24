import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark({
	attribute: 'class',
	valueDark: 'theme theme--dark',
	valueLight: 'theme theme--light',
})
const toggleDark = useToggle(isDark)

export function useTheme() {
	return { isDark, toggleDark }
}
