import { FormFieldType, useForm } from '@volverjs/form-vue'
import { UserSchema } from '~/models/User'

export const { VvForm, VvFormWrapper, VvFormField } = useForm(UserSchema, {
    lazyLoad: true,
	sideEffects: async (type: string) => {
		if (type === FormFieldType.combobox) {
			await import('@volverjs/style/scss/components/vv-select')
			await import('@volverjs/style/scss/components/vv-dropdown')
			await import('@volverjs/style/scss/components/vv-dropdown-option')
			await import('@volverjs/style/scss/components/vv-dropdown-action')
			return
		}
		if (type !== FormFieldType.custom) {
			await import('@volverjs/style/scss/components/vv-input-text')
		}
	},
})
