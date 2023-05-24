import { FormFieldType, useForm } from '@volverjs/form-vue'
import { UserSchema } from '~/models/User'

export const { VvForm, VvFormWrapper, VvFormField } = useForm(UserSchema, {
    lazyLoad: true,
	sideEffects: async (type: string) => {
		if (type === FormFieldType.select) {
			await import('@volverjs/style/scss/components/vv-select')
			return
		}
		if (type === FormFieldType.checkbox) {
			await import('@volverjs/style/scss/components/vv-checkbox')
			return
		}
		if (type === FormFieldType.textarea) {
			await import('@volverjs/style/scss/components/vv-textarea')
			return
		}
		if (type === FormFieldType.radio) {
			await import('@volverjs/style/scss/components/vv-radio')
			return
		}
		if (type === FormFieldType.radioGroup) {
			await import('@volverjs/style/scss/components/vv-radio')
			await import('@volverjs/style/scss/components/vv-radio-group')
			return
		}
		if (type === FormFieldType.checkbox) {
			await import('@volverjs/style/scss/components/vv-checkbox')
			return
		}
		if (type === FormFieldType.checkboxGroup) {
			await import('@volverjs/style/scss/components/vv-checkbox')
			await import('@volverjs/style/scss/components/vv-checkbox-group')
			return
		}
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
