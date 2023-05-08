<template>
    <div v-if="tab.name === selectedTab?.name" class="card bg-transparent border-0">
        <div class="card-body">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import type { TabItem } from '@/types/tabs'
const porps = defineProps<{ tab: TabItem }>()
const selectedTab = inject<TabItem>('selectedTab')
</script>
