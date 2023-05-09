<template>
    <div class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
        <div class="d-flex w-100 justify-content-between gap-2">
            <div class="navbar-menu-wrapper d-flex align-items-stretch">
                <router-link :to="logoUrl" class="align-self-center d-lg-none pl-0 navbar-brand">
                    <img :src="logoIconSrc" alt="logo" />
                </router-link>
                <div class="d-flex justify-content-between w-100">
                    <div class="d-flex justify-content-start">
                        <button class="navbar-toggler align-self-center d-none d-lg-block pl-0" type="button">
                            <span v-if="leftMenu === 'normal'" :key="'align-left'"
                                @click.prevent="appStore.setLeftMenu('icon-only')" title="collapse_sidebar">
                                <app-icon type="align-left" />
                            </span>
                            <span v-else-if="leftMenu === 'icon-only'" :key="'align-center'"
                                @click.prevent="appStore.setLeftMenu('floating')" title="floating_sidebar">
                                <app-icon type="align-center" />
                            </span>
                            <span v-else-if="leftMenu === 'floating'" :key="'align-justify'"
                                @click.prevent="appStore.setLeftMenu('normal')" title="full_sidebar">
                                <app-icon type="align-justify" />
                            </span>
                        </button>
                        <button class="navbar-toggler align-self-center d-lg-none pl-0" type="button"
                            data-toggle="offcanvas" @click="sidebarOffcanvas">
                            <app-icon type="align-left" />
                        </button>
                        <slot name="left-option"></slot>
                    </div>
                    <div class="d-flex justify-content-center">
                        <slot name="center-option"></slot>
                    </div>
                    <div>
                        <ul class="navbar-nav navbar-nav-right ml-auto">
                            <li class="nav-item">
                                <button class="navbar-toggler align-self-center" type="button" @click="toggleDark()">
                                    <span v-if="isDark" :key="'sun'" title="light_mood">
                                        <app-icon type="sun" />
                                    </span>
                                    <span v-else :key="'moon'" title="dark_mood">
                                        <app-icon type="moon" />
                                    </span>
                                </button>
                            </li>
                            <li class="nav-item d-none d-lg-block">
                                <a v-if="isFullscreen" class="d-flex align-items-center nav-link" href="#" @click="exit"
                                    :key="'maximize'" title="exit_fullscreen">
                                    <app-icon type="minimize" />
                                </a>
                                <a v-else class="d-flex align-items-center nav-link" href="#" @click="enter"
                                    :key="'minimize'" title="fullscreen">
                                    <app-icon type="maximize" />
                                </a>
                            </li>

                            <language-dropdown :selected-language="locale" :data="localesList"
                                @set-local="localeStore.setLocal" />

                            <!-- <component :is="notificationComponent" :all-notification-url="allNotificationUrl"
                                :data="notificationData" :show-identifier="showIdentifier" :total-unread="totalUnread"
                                @clicked="sendNotification" @loadNotifications="$emit('loadNotifications')" /> -->

                            <span class="topbar-divider d-none d-sm-block"></span>

                            <profile-dropdown v-if="user" :user="user" :data="[]" />
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useDark, useToggle } from '@vueuse/core'
import { useAuthStore } from '@/store/auth'
import { useAppStore } from '@/store/application'
import { useLocaleStore } from '@/store/locale'
import { useFullscreen } from '@vueuse/core'
// components
import ProfileDropdown from './ProfileDropdown.vue'
import LanguageDropdown from './LanguageDropdown.vue'

interface Props {
    logoSrc: string
    logoIconSrc: string
    logoUrl: string
}

const props = defineProps<Props>()

const isDark = useDark({
    selector: 'html',
    attribute: 'theme',
    valueDark: 'dark',
    valueLight: 'light',
})
const toggleDark = useToggle(isDark)
const authStore = useAuthStore()
const appStore = useAppStore()
const localeStore = useLocaleStore()

const { isFullscreen, enter, exit, toggle } = useFullscreen()

// state
const { user } = storeToRefs(authStore)
const { leftMenu } = storeToRefs(appStore)
const { locale, localesList } = storeToRefs(localeStore)

// methods
const sidebarOffcanvas = () => {
    document.querySelector('.sidebar-offcanvas')?.classList.toggle('active')
}


</script>
