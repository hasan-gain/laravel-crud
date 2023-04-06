<template>
    <div class="drawer drawer-mobile">
        <div class="container-scroller">
            <!--Top Navbar-->
            <nav-bar />
            <!--Sidebar-->
            <side-bar :data="setting?.sidebar" :logo-src="''" :logo-icon-src="''" :logo-url="'/'" />
            <div class="container-fluid page-body-wrapper">
                <div class="main-panel">
                    <!--Contents-->
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useAuthStore } from "../store/auth";
import { useAppStore } from "../store/application";

// components
import NavBar from '../components/layout/NavBar.vue';
import SideBar from '../components/layout/SideBar.vue';
import { storeToRefs } from 'pinia';
// state
const authStore = useAuthStore()
const appStore = useAppStore()
const { setting } = storeToRefs(appStore)
onMounted(() => {
    appStore.init()
    authStore.init()
})

</script>

<style scoped></style>
