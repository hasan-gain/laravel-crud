<template>
    <div class="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
            <!-- Page content here -->
            <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            <div class="w-full">
                <nav-bar />
            </div>
            <div class="w-full h-full p-4">
                <router-view></router-view>
            </div>
        </div>
        <div class="drawer-side">
            <label for="my-drawer-2" class="drawer-overlay"></label>
            <ul class="menu bg-base-300 w-56">
                <div class="h-[60px] bg-base-200 flex text-gray-700 items-center p-3 text-3xl">Admin Panel</div>
                <!-- Sidebar content here -->
                <li><router-link to="/app/dashboard" active-class="active">Dashboard</router-link></li>
                <li><router-link to="/app/posts" active-class="active">Posts</router-link></li>
            </ul>
        </div>
    </div>
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
