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
    fileLabel?: string
    multiple?: boolean
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

const fileChange = (event): void => {
    const target = event.target as HTMLInputElement
    let files: File[] = []
    if (target.files?.length) {
        for (let i = 0; i < target.files?.length; i++) {
            files.push(target.files[i])
        }
    }
    if (files?.length) {
        emit('update:modelValue', props.multiple ? files : files[0])
    }
    emit('change', target.value)
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
    <text-area-input v-if="type === 'textarea'" :model-value="modelValue" @update="textChange" @invalid="emit('invalid')"
        v-bind="$props" />
    <file-input v-if="type === 'file'" :model-value="modelValue" @update="fileChange" @invalid="emit('invalid')"
        v-bind="$props" />
    <image-uploader-input v-if="type === 'image-uploader'" :model-value="modelValue" @update="fileChange"
        @invalid="emit('invalid')" v-bind="$props" />
</template>
