<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useAppStore } from "../store/application"

// components
import NavBar from '../components/layout/NavBar.vue'
import SideBar from '../components/layout/SideBar.vue'
import PageLoader from '@/lib/components/common/loader/PageLoader.vue'
// state
const appStore = useAppStore()
const { settings, loading } = storeToRefs(appStore)

const logoURL: string = '/app/dashboard'
</script>

<template>
    <page-loader text="Please wait..." v-if="loading" />
    <div v-else class="drawer drawer-mobile">
        <div class="container-scroller">
            <!--Top Navbar-->
            <nav-bar :logo-src="settings.logo" :logo-icon-src="settings.icon" :logo-url="logoURL" />
            <!--Sidebar-->
            <side-bar :data="settings.sidebar" :logo-src="settings.logo" :logo-icon-src="settings.icon" :logo-url="logoURL" />
            <div class="container-fluid page-body-wrapper">
                <div class="main-panel">
                    <!--Contents-->
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
