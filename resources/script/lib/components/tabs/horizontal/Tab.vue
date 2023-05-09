<template>
    <div v-if="tab.name === selectedTab?.name" class="card bg-transparent border-0">
        <div class="card-body">
            <slot></slot>
        </div>
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
