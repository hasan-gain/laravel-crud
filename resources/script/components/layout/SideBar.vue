<template>
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
            <router-link class="navbar-brand brand-logo" :to="logoUrl">
                <img :src="logoSrc" alt="logo" />
            </router-link>
            <router-link class="navbar-brand brand-logo-mini" :to="logoUrl">
                <img :src="logoIconSrc" alt="logo" />
            </router-link>
        </div>

        <ul class="nav nav-scrolling" :key="route.fullPath">
            <template v-for="(item, navIndex) in data" :key="`nav-${navIndex}`">
                <li v-if="item.permission" class="nav-item" :class="{ active: isActive(item) }">
                    <router-link class="nav-link" :to="item.id ? '#' + item.id : item.url || ''"
                        :data-bs-toggle="item.id ? 'collapse' : false" :aria-expanded="item.id ? 'false' : false"
                        :aria-controls="item.id ? item.id : false">
                        <span class="icon-wrapper">
                            <app-icon :type="item.icon" class="menu-icon" />
                        </span>
                        <span class="menu-title">{{ item.name }}</span>
                        <app-icon v-if="item.subMenu" class="menu-arrow" type="arrow-down-circle" size="16" />
                    </router-link>
                    <div class="collapse" v-if="item.subMenu" :id="item.id" :class="{ show: isShow(item) }">
                        <ul class="nav flex-column sub-menu">
                            <template v-for="(submenuItem, index) in item.subMenu"
                                :key="`nav-${navIndex}-submenu-${index}`">
                                <li class="nav-item" v-if="submenuItem.permission">
                                    <router-link class="nav-link" :to="submenuItem.url" active-class="active">
                                        {{ submenuItem.name }}
                                    </router-link>
                                </li>
                            </template>
                        </ul>
                    </div>
                </li>
            </template>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
import { onMounted, watch } from 'vue'
import { useAppStore } from '@/store/application'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import type { SidebarMenu } from '@/types/sidebar'
interface Props {
    data: SidebarMenu[]
    logoSrc: string
    logoIconSrc: string
    logoUrl: string
}

const props = defineProps<Props>()

// state
const { leftMenu } = storeToRefs(useAppStore())
const route = useRoute()

// methods
const isActive = <boolen>(item: SidebarMenu) => {
    if (item.subMenu) return item.subMenu.some(sub => sub.url === location.pathname)
    else return ((item.id ? '#' + item.id : item.url || '') === location.pathname)
}
const isShow = <boolen>(item: SidebarMenu) => {
    return !!(item.subMenu?.some(sub => sub.url === location.pathname) && leftMenu.value === 'normal')
}

const init = () => {
    let sidebar: HTMLElement | null = document.querySelector('.sidebar')
    let navbars = sidebar?.querySelectorAll('.nav-item') || []
    navbars.forEach(nav => {
        nav.addEventListener('mouseenter', (event) => {
            if (leftMenu.value === 'icon-only') {
                nav.classList.add('hover-open')
            }
        })
        nav.addEventListener('click', (event) => {
            if (leftMenu.value === 'icon-only') {
                nav.classList.add('hover-open')
            }
        })
        nav.addEventListener('mouseleave', (event) => {
            if (leftMenu.value === 'icon-only') {
                nav.classList.remove('hover-open')
            }
        })
    })

    sidebar?.addEventListener('mouseleave', (event) => {
        if (leftMenu.value === 'floating') {
            sidebar?.querySelectorAll('.collapse.show').forEach(i => i.classList.remove('show'))
        }
    })
}

onMounted(() => {
    setTimeout(() => {
        init()
    })
})
</script>
