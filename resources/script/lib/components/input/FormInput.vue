<script setup lang="ts">
import type { InputListItem, InputOption } from '@/types/component/input';
import { ref } from 'vue';
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
    errorMessage: string
}

const props = withDefaults(defineProps<FormInputProps>(), {})
const emit = defineEmits(['update:modelValue', 'change']);

const handleAppInputChange = (newChangedValue): void => {
    inputInvalid.value = false;
    emit('update:modelValue', newChangedValue);
    emit('change', newChangedValue);
}

const inputInvalid = ref<boolean>(false);
const handleInvalidInput = (): void => {
    inputInvalid.value = true;
}

</script>

<template>
    <div>
        <label :for="id">{{label}}</label>
        <app-input 
            @change="handleAppInputChange"
            @invalid="handleInvalidInput"
            v-bind="$props" 
        />
        <div v-if="inputInvalid"
            :key="'error'">
            <small class="text-danger validation-error">
                {{ errorMessage }}
            </small>
        </div>
    </div>
</template>

