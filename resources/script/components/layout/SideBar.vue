<template>
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
            <a class="navbar-brand brand-logo" :href="logoUrl">
                <img :src="logoSrc" alt="logo" />
            </a>
            <a class="navbar-brand brand-logo-mini" :href="logoUrl">
                <img :src="logoIconSrc" alt="logo" />
            </a>
        </div>

        <ul class="nav nav-scrolling">
            <li class="nav-item" v-for="(item, index) in data" :key="index">
                <router-link class="nav-link" :to="item.id ? '#' + item.id : item.url" active-class="active"
                    :data-bs-toggle="item.id ? 'collapse' : false" :aria-expanded="item.id ? 'false' : false"
                    :aria-controls="item.id ? item.id : false">
                    <span class="icon-wrapper">
                        <icon :type="item.icon" class="menu-icon" />
                    </span>
                    <span class="menu-title">{{ item.name }}</span>
                    <icon v-if="item.subMenu" class="menu-arrow" type="arrow-down-circle" size="16" />
                </router-link>

                <div class="collapse" v-if="item.subMenu" :id="item.id">
                    <ul class="nav flex-column sub-menu">
                        <li class="nav-item" v-for="(submenuItem, index) in item.subMenu" :key="index">
                            <router-link class="nav-link" :to="submenuItem.url">
                                {{ submenuItem.name }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>
import { onMounted, nextTick } from 'vue'
import type { SidebarMenu } from '@/types/sidebar'
interface Props {
    data: SidebarMenu[]
    logoSrc: string
    logoIconSrc: string
    logoUrl: string
}

const props = defineProps<Props>()

onMounted(() => {
    nextTick(() => {
        let body = document.querySelector('body'),
            current = location.pathname,
            sidebar = document.querySelector('.sidebar'),
            sidebarType = localStorage.getItem('sidebar');
        (function () {
            document.querySelectorAll('.nav li a').forEach(nav => {
                // addActiveClass(nav);
            });

            document.querySelectorAll('.horizontal-menu .nav li a').forEach(nav => {
                // addActiveClass(nav);
            });

            // Change sidebar and content-wrapper height
            applyStyles();

            function applyStyles() {
                //Applying perfect scrollbar
                if (!body.classList.contains("rtl")) {
                    if (body.classList.contains("sidebar-fixed")) {
                        let fixedSidebarScroll = new PerfectScrollbar('#sidebar .nav');
                    }
                }
            }
        })()

        let navbars = sidebar.querySelectorAll('.nav-item');
        navbars.forEach(nav => {
            nav.addEventListener('mouseenter', (ev) => {
                let body = document.querySelector('body');
                let sidebarIconOnly = body.classList.contains("sidebar-icon-only");
                let sidebarHoverOnly = body.classList.contains("sidebar-hover-only");
                let sidebarFixed = body.classList.contains("sidebar-fixed");
                if (sidebarIconOnly) {
                    if (sidebarFixed) {
                        if (ev.type === 'mouseenter') {
                            body.classList.remove('sidebar-icon-only');
                        }
                    } else {
                        let $menuItem = nav;
                        if (ev.type === 'mouseenter') {
                            $menuItem.classList.add('hover-open')
                        } else if (ev.type === 'click') {
                            $menuItem.classList.add('hover-open')
                        } else {
                            $menuItem.classList.remove('hover-open')
                        }
                    }
                }
            })
            nav.addEventListener('mouseleave', (ev) => {
                let sidebarIconOnly = document.body.classList.contains("sidebar-icon-only");
                let sidebarFixed = document.body.classList.contains("sidebar-fixed");
                let sidebarHoverOnly = document.body.classList.contains("sidebar-hover-only")
                if (sidebarIconOnly) {
                    nav.classList.remove('hover-open')
                }
            })
        })

        sidebar.addEventListener('mouseleave', (ev) => {
            let sidebarIconOnly = body.classList.contains("sidebar-icon-only");
            let sidebarFixed = body.classList.contains("sidebar-fixed");
            let sidebarHoverOnly = document.body.classList.contains("sidebar-hover-only")
            if (sidebarHoverOnly) {
                sidebar.querySelectorAll('.collapse.show').forEach(i => i.classList.remove('show'))
            }
        })

    })
})
</script>
