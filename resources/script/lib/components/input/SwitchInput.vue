<script setup lang="ts">
import type { InputOption } from '@/types/component/input'

interface Props {
    modelValue: string
    id?: string
    name?: string,
    autocomplete?: string | 'off'
    readonly?: boolean
    disabled?: boolean
    placeholder?: string
    required?: boolean
    inputClass?: string
    maxlength?: number
    minlength?: number
    options?: InputOption
}
const props = withDefaults(defineProps<Props>(), {
    modelValue: '',
    autocomplete: ''
})

const emit = defineEmits(['update', 'invalid'])

// methods
const update = (event: Event) => {
    let input = event.target as HTMLInputElement
    emit('update', event)
    if (input.value.length >= (props.minlength || 0)) {
        if (props.options?.errorClass) {
            input.classList.remove(props.options?.errorClass || '')
        }
    }
}

const invalid = (event) => {
    let input = event.target as HTMLInputElement
    if (props.options?.errorClass) {
        input.classList.add(props.options?.errorClass || '')
    }
    emit('invalid')
}

</script>

<template>
    <label class="custom-control d-inline border-switch mb-0 mr-3" :class="{ 'disabled': disabled }">
        <input type="checkbox" :name="name" :id="id" :disabled="disabled" :checked="!!modelValue" :value="modelValue"
            @invalid.prevent="invalid" @change="update($event)" class="border-switch-control-input">
        <span class="border-switch-control-indicator"></span>
    </label>
</template>
