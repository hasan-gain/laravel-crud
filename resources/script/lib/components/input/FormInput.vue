<script setup lang="ts">
import type { InputListItem, InputOption } from '@/types/component/input';
import AppInput from './index.vue';

export interface FormInputProps {
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
    errors?: any[]
}

const props = withDefaults(defineProps<FormInputProps>(), {})
const emit = defineEmits(['update:modelValue', 'change']);

const handleAppInputChange = (newChangedValue): void => {
    emit('update:modelValue', newChangedValue);
    emit('change', newChangedValue);
}

</script>

<template>
    <div>
        <label>{{label}}</label>
        <app-input 
            @change="handleAppInputChange"
            v-bind="$props" 
        />
    </div>
</template>

