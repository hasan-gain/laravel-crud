<template>
    <div class="vertical-tab">
        <div class="row no-gutters">
            <tab-wrapper :options="options">
                <tab v-for="(tab, index) in options.tabs" :tab="tab" :key="`tabs-${options.tabId}-tab-item-${index}`">
                    <div v-if="tab.type === 'html'" v-html="tab.component"></div>
                    <div v-if="tab.type === 'component'">
                        <component :is="tab.component || {}" :data="tab.props" />
                    </div>
                </tab>
            </tab-wrapper>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { ITabOptions } from "@/lib/components/tabs"
// components
import TabWrapper from '@/lib/components/tabs/vertical/TabWrapper.vue'
import Tab from '@/lib/components/tabs/vertical/Tab.vue'
interface Props {
    options: ITabOptions
}
const props = defineProps<Props>()
</script>
