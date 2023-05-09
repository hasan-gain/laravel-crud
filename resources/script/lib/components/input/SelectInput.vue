<script setup lang="ts">
import type { IInputOption, IInputListItem } from '@/lib/components/input'

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
    options?: IInputOption
    list?: IInputListItem[]
    listValueField?: string
}

const props = withDefaults(defineProps<Props>(), {
    modelValue: ''
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
    <select :id="id" :disabled="disabled" class="custom-select" :class="inputClass" :value="modelValue"
        @invalid.prevent="invalid" @change="update($event)">
        <option v-for="(item, index) in list" :value="item.id" :disabled="item.disabled" :selected="item.id === modelValue"
            :key="`select-${name || id || ''}-${index}`">
            {{ item[listValueField || 'value'] }}
        </option>
    </select>
</template>
