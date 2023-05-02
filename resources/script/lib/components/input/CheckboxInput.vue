<script setup lang="ts">
import type { InputOption, InputListItem } from '@/types/component/input'

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
    list?: InputListItem[]
    listValueField?: string
    labelClass?: string
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
    <div class="app-checkbox-group" :class="inputClass">
        <div class="customized-checkbox checkbox-default" v-for="(item, index) in list" :key="index">
            <input type="checkbox" :name="name" :id="item.id.toString()" :required="required" @invalid.prevent="invalid"
                :disabled="item.disabled || disabled" :placeholder="placeholder" :value="item.id"
                :checked="modelValue.split(',').includes(item.id.toString())" @change="update($event)" />
            <label :for="item.id.toString()" :class="labelClass">
                {{ item[listValueField || 'value'] }}
            </label>
        </div>
    </div>
</template>
