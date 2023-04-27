<script setup lang="ts">
interface Props {
    value: string
}
const props = withDefaults(defineProps<Props>(), {})

const emit = defineEmits(['update', 'change'])

</script>

<template>
    <input type="text" :value="value" @input="emit('update', ($event.target as HTMLInputElement).value)"> >
</template>
