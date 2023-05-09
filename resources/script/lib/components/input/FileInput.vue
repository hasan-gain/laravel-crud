<script setup lang="ts">
import { ref } from 'vue'
import type { IInputOption } from '@/lib/components/input'

interface Props {
    modelValue: any
    id?: string
    name?: string,
    autocomplete?: string | 'off'
    readonly?: boolean
    disabled?: boolean
    placeholder?: string
    required?: boolean
    inputClass?: string
    options?: IInputOption
    fileLabel?: string
    multiple?: boolean
}

const props = withDefaults(defineProps<Props>(), {})

const emit = defineEmits(['update', 'invalid'])

const input = ref<HTMLInputElement | null>(null)

// methods
const update = (event: Event) => {
    let input = event.target as HTMLInputElement
    emit('update', event)
    if (props.options?.errorClass) {
        input.classList.remove(props.options?.errorClass || '')
    }
}

const invalid = (event) => {
    let input = event.target as HTMLInputElement
    if (props.options?.errorClass) {
        input.classList.add(props.options?.errorClass || '')
    }
    emit('invalid')
}

const open = () => {
    input.value?.click()
}

</script>

<template>
    <div class="custom-file" @click="open">
        <input ref="input" type="file" class="custom-file-input" :class="inputClass" :id="id" :name="name"
            :multiple="multiple" :disabled="disabled" :required="required" :autocomplete="autocomplete"
            :placeholder="placeholder" :readonly="readonly" @change="update($event)" @invalid.prevent="invalid">
        <label class="custom-file-label text-muted" :for="id">
            {{ multiple ? typeof modelValue === 'string' ? modelValue : `${modelValue.length} ${$t('choose')}` :
                modelValue.name || fileLabel || $t('choose') }}
        </label>
    </div>
</template>
