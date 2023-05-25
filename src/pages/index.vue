<script setup lang="ts">
	import { VvForm, VvFormField } from '~/forms/UserForm'
	import { type User, UserRole } from '~/models/User'
	import { ref, Ref } from 'vue'

	const formData: Ref<User> = ref({} as User)

	const users = ref<User[]>([])

	const onSubmit = () => {
		users.value.push(formData.value)
		formData.value = {} as User
	}
</script>

<template>
	<div class="flex flex-col flex-1 min-w-full bg-surface-2">
		<div class="grid grid-cols-3 flex-1">
			<div
				class="col-span-2 flex flex-col items-center justify-center py-lg my-auto">
				<div class="uppercase text-xl py-md">{{ $t('label.createUser') }}</div>
				<div class="rounded-md form-shadow">
					<VvForm v-model="formData" class="p-md" @submit="onSubmit">
						<div class="grid grid-cols-2 gap-md items-start">
							<VvFormField
								type="text"
								name="firstName"
								label="First name" />
							<VvFormField
								type="text"
								name="lastName"
								label="Last name" />
							<VvFormField
								type="text"
								name="nickname"
								label="Nickname" />
							<VvFormField
								type="text"
								name="email"
								label="Email" />
							<VvFormField type="number" name="age" label="Age" />
							<VvFormField
								type="text"
								name="role"
								label="Role"
								:options="[
									UserRole.User,
									UserRole.Admin,
									UserRole.Teacher,
								]" />
						</div>
						<div class="text-right">
							<VvButton icon="add" label="Save" type="submit" />
						</div>
					</VvForm>
				</div>
			</div>
			<div
				class="p-md border-l border-solid border-alpha-1 flex flex-col justify-center">
				<div
					class="flex flex-col justify-center h-4/5 overflow-x-hidden">
					<TransitionGroup name="list" tag="article">
						<VvCard
							v-for="user in users"
							:key="user.firstName"
							class="mb-sm">
							<template #header>
								{{ user.firstName }} {{ user.lastName }}
							</template>
							<div class="p-md">
								<p>{{ user.role }}</p>
								<p>{{ user.email }}</p>
								<p>{{ user.age }} years old</p>
							</div>
						</VvCard>
					</TransitionGroup>
				</div>
			</div>
		</div>

		<PjFooter />
	</div>
</template>

<style lang="scss">

.form-shadow {
	box-shadow: 0 0 7px 4px var(--color-surface-1)
}

	.list-enter-active,
	.list-leave-active {
		transition: all 0.5s ease;
	}

	.list-enter-from,
	.list-leave-to {
		opacity: 0;
		transform: translateX(30px);
	}
</style>
