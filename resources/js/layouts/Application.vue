<template>
    <div class="drawer drawer-mobile">
        <div class="container-scroller">
            <!--Top Navbar-->
            <nav-bar />
            <!--Sidebar-->
            <side-bar />
            <div class="container-fluid page-body-wrapper">
                <div class="main-panel">
                    <!--Contents-->
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAuthStore } from "../store/auth";
import { useAppStore } from "../store/application";

// components
import NavBar from '../components/layout/NavBar.vue';
import SideBar from '../components/layout/SideBar.vue';

const authStore = useAuthStore()
const appStore = useAppStore()

onMounted(() => {
    appStore.init()
    authStore.init()
})

</script>

<style scoped></style>
