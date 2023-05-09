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
    <div class="app-radio-group" :class="inputClass">
        <label v-for="(item, index) in list" class="customized-radio radio-default"
            :class="{ disabled: item.disabled || disabled }" :key="`radio-${name || id || ''}-${index}`">
            <input class="radio-inline" type="radio" :name="name" :id="id" :required="required" @invalid.prevent="invalid"
                :disabled="item.disabled || disabled" :checked="item.id == modelValue" :value="item.id"
                @change="update($event)">
            <span class="outside">
                <span class="inside"></span>
            </span>
            {{ item[listValueField || 'value'] }}
        </label>
    </div>
</template>
