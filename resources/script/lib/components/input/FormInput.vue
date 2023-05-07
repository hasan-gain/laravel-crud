<script setup lang="ts">
import { ref, watch } from 'vue'
import type { InputListItem, InputOption } from '@/types/component/input'
import AppInput from './index.vue'

export interface Props {
    type: 'text' | 'password' | 'email' | 'number' | 'search' | 'radio' | 'select' | 'checkbox' | 'switch' | 'textarea' | 'file' | 'image-uploader'
    modelValue?: any
    id?: string
    name?: string
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
    label?: string
    error?: string
    multiple?: boolean
    fileLabel?: string
}

const props = withDefaults(defineProps<Props>(), {})
const input = ref<HTMLDivElement | null>(null)

const emit = defineEmits(['update:modelValue', 'change', 'update:error'])
const serverError = ref(false)

const change = (value: any): void => {
    emit('update:error', '')
    emit('update:modelValue', value)
    emit('change', value)
}

const invalid = (): void => {
    setErrorMessage()
}

const setErrorMessage = (errorMessage?: string, serverError?) => {
    emit('update:error', errorMessage || props.options?.errorMessage || `${props.type} invalid`)
}

// const makeInvalid = () => {
//     serverError.value = true
//     let inputElement: HTMLInputElement | null | undefined = input.value?.querySelector('input')
//     inputElement?.setCustomValidity('server error')
//     inputElement?.checkValidity()
// }

</script>

<template>
    <div class="row" ref="input">
        <div class="col">
            <label v-if="label" :for="id">{{ label }}</label>
            <app-input @change="change" @invalid="invalid" v-bind="$props" v-on="$attrs" />
            <div v-if="error" :key="'error'">
                <small class="text-danger validation-error">
                    {{ error }}
                </small>
            </div>
        </div>
    </div>
</template>

