<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { RouterView } from 'vue-router'
import { useAppStore } from '@/store/application'

const appStore = useAppStore()

onBeforeMount(() => {
    appStore.init()
})

</script>
<template>
    <router-view />
</template>
