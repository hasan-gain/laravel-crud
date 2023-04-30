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
    textAreaCols?: number
    textAreaRows?: number
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
    <div class="editor" :class="{ 'disabled': disabled }">
        <textarea :class="inputClass" :id="id" :name="name" @change="update($event)" @invalid.prevent="invalid"
            :autocomplete="autocomplete" :rows="textAreaRows" :cols="textAreaRows" :placeholder="placeholder"
            :disabled="disabled" :required="required" />
    </div>
</template>
