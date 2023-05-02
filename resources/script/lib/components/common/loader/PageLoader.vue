<script setup lang="ts">
interface Props {
    text?: string
}

const props = defineProps<Props>()
</script>
<template>
    <div class="vh-100 vw-100 d-flex flex-column justify-content-center align-items-center">
        <div class="spinner-border" role="status">
            <span class="visually-hidden"></span>
        </div>
        <div>{{ text || 'loading...' }}</div>
    </div>
</template>
