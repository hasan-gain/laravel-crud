<script setup lang="ts">
import type { InputListItem, InputOption } from '@/types/component/input'

// components
import TextInput from './TextInput.vue'
import PasswordInput from './PasswordInput.vue'
import EmailInput from './EmailInput.vue'
import NumberInput from './NumberInput.vue'
import SearchInput from './SearchInput.vue'
import RadioInput from './RadioInput.vue'
import SelectInput from './SelectInput.vue'
import CheckboxInput from './CheckboxInput.vue'
import SwitchInput from './SwitchInput.vue'
import TextAreaInput from './TextAreaInput.vue'
import FileInput from './FileInput.vue'
import ImageUploaderInput from './ImageUploaderInput.vue'

interface Props {
    type: 'text' | 'password' | 'email' | 'number' | 'search' | 'radio' | 'select' | 'checkbox' | 'switch' | 'textarea' | 'file' | 'image-uploader'
    modelValue?: any
    id?: string
    name?: string,
    autocomplete?: string
    readonly?: boolean
    disabled?: boolean
    placeholder?: string
    required?: boolean
    inputClass?: string
    maxlength?: number
    minlength?: number
    options?: InputOption,
    list?: InputListItem[]
    textAreaCols?: number
    textAreaRows?: number,
}

const props = withDefaults(defineProps<Props>(), {})

const emit = defineEmits(['update:modelValue', 'change', 'invalid'])


// methods
const textChange = (event: Event): void => {
    const target = event.target as HTMLInputElement
    emit('update:modelValue', target.value)
    emit('change', target.value)
}

const listChange = () => { }

const fileChange = (e): void => {
    emit('update:modelValue', e)
    emit('change', e)
}

</script>

<template>
    <text-input v-if="type === 'text'" :model-value="modelValue" @update="textChange" @invalid="emit('invalid')"
        v-bind="$props" />
    <password-input v-if="type === 'password'" :model-value="modelValue" @update="textChange" @invalid="emit('invalid')"
        v-bind="$props" />
    <email-input v-if="type === 'email'" />
    <number-input v-if="type === 'number'" />
    <search-input v-if="type === 'search'" />
    <radio-input v-if="type === 'radio'" />
    <select-input v-if="type === 'select'" />
    <checkbox-input v-if="type === 'checkbox'" />
    <switch-input v-if="type === 'switch'" />
    <text-area-input v-if="type === 'textarea'" />
    <file-input v-if="type === 'file'" />
    <image-uploader-input v-if="type === 'image-uploader'" />
</template>
