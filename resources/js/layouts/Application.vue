<template>
    <nav-bar />
    <main class="p-3">
        <router-view></router-view>
    </main>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAuthStore } from "../store/auth";

// components
import NavBar from '../components/layout/NavBar.vue';

const authStore = useAuthStore()

onMounted(() => {
    authStore.init()
})

</script>

<style scoped></style>
