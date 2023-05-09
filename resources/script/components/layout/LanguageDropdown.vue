<template>
    <li class="nav-item dropdown">
        <a href="#" id="languageDropdown" class="d-flex align-items-center nav-link dropdown-toggle text-uppercase "
            data-bs-toggle="dropdown" aria-expanded="false">
            {{ selectedLanguage }}
        </a>
        <div class="dropdown-menu dropdown-menu-right navbar-dropdown language-dropdown dropdown-menu-end" aria-labelledby="languageDropdown">
            <a class="dropdown-item" v-for="(item, index) in data" :key="`language-item-${index}`"
                @click="setLocal(item.key)">
                <div class="d-flex align-items-center justify-content-center">
                    <h6 class="mb-0 font-weight-normal">{{ item.title }}</h6>
                </div>
            </a>
        </div>
    </li>
</template>

<script lang="ts" setup>
import type { ILocale } from '@/types/application'
interface Props {
    selectedLanguage: string
    data: ILocale[]
}
const props = defineProps<Props>()

const emits = defineEmits(['setLocal'])

const setLocal = (locale: string) => {
    emits('setLocal', locale)
}
</script>
