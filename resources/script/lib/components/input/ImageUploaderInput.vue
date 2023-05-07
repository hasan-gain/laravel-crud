<script setup lang="ts">
import { computed, ref, reactive } from 'vue';
import type { InputOption } from '@/types/component/input'

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
    options?: InputOption
    fileLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
    modelValue: '',
    autocomplete: ''
})

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

const imageUrl = computed<string>(() => {
    return (typeof props.modelValue === 'string') ?
        props.modelValue
        : URL.createObjectURL(props.modelValue)
})

</script>

<template>
    <div class="custom-image-upload-wrapper" :class="inputClass" @click="open">
        <div class="image-area d-flex">
            <img v-if="imageUrl" :src="imageUrl" alt="" class="img-fluid mx-auto my-auto" />
        </div>
        <div class="input-area">
            <label id="upload-label" :for="id">
                {{ 'choose' }}
            </label>
            <input ref="input" :id="id" type="file" :disabled="disabled" :name="name" accept="image/*" :required="required"
                :autocomplete="autocomplete" :placeholder="placeholder" :readonly="readonly" @change="update($event)"
                @invalid.prevent="invalid" class="form-control d-none" />
        </div>
    </div>
</template>
