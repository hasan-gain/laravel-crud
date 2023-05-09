<template>
    <div v-if="tab.name === selectedTab?.name" class="card card-body bg-transparent border-0" :class="tab.bodyClass">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import type { ITabItem } from '@/lib/components/tabs'
interface Props {
    tab: ITabItem
}
const porps = defineProps<Props>()
const selectedTab = inject<ITabItem>('selectedTab')
</script>
