<template>
    <div class="horizontal-tab">
        <div class="card card-with-shadow border-0">
            <tab-wrapper :options="options">
                <tab v-for="(tab, index) in options.tabs" :tab="tab" :key="`tabs-${options.tabId}-tab-item-${index}`">
                    <div v-if="tab.type === 'html'" v-html="tab.component"></div>
                    <div v-if="tab.type === 'compoent'">
                        <component :is="tab.component || {}" :data="tab.props" />
                    </div>
                </tab>
            </tab-wrapper>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TabOptions } from "@/types/tabs"
// components
import TabWrapper from '@/lib/components/tabs/TabWrapper.vue'
import Tab from '@/lib/components/tabs/Tab.vue'
interface Props {
    options: TabOptions
}
const props = defineProps<Props>()
</script>
