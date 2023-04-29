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
    options?: InputOption
    list?: InputListItem[]
    textAreaCols?: number
    textAreaRows?: number
    listValueField?: string
    labelClass?: string
}

const props = withDefaults(defineProps<Props>(), {})

const emit = defineEmits(['update:modelValue', 'change', 'invalid'])

// methods
const textChange = (event: Event): void => {
    const target = event.target as HTMLInputElement
    if (props.type === 'switch') {
        emit('update:modelValue', Number(target.checked).toString())
        return
    }
    emit('update:modelValue', target.value)
    emit('change', target.value)
}

const listChange = (event: Event) => {
    const target = event.target as HTMLInputElement
    let values = props.modelValue?.split(',').filter(i => !!i) || []
    if (values.includes(target.value.trim())) {
        values = values.filter(i => i !== target.value).join(',')
    } else {
        values.push(target.value.trim())
        values = values.join(',')
    }
    emit('update:modelValue', values)
    emit('change', target.value)
}

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
    <email-input v-if="type === 'email'" :model-value="modelValue" @update="textChange" @invalid="emit('invalid')"
        v-bind="$props" />
    <number-input v-if="type === 'number'" :model-value="modelValue" @update="textChange" @invalid="emit('invalid')"
        v-bind="$props" />
    <search-input v-if="type === 'search'" :model-value="modelValue" @update="textChange" @invalid="emit('invalid')"
        v-bind="$props" />
    <radio-input v-if="type === 'radio'" :model-value="modelValue" @update="textChange" @invalid="emit('invalid')"
        v-bind="$props" />
    <select-input v-if="type === 'select'" :model-value="modelValue" @update="textChange" @invalid="emit('invalid')"
        v-bind="$props" />
    <checkbox-input v-if="type === 'checkbox'" :model-value="modelValue" @update="listChange" @invalid="emit('invalid')"
        v-bind="$props" />
    <switch-input v-if="type === 'switch'" :model-value="modelValue" @update="textChange" @invalid="emit('invalid')"
        v-bind="$props" />
    <text-area-input v-if="type === 'textarea'" />
    <file-input v-if="type === 'file'" />
    <image-uploader-input v-if="type === 'image-uploader'" />
</template>
