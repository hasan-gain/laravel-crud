<template>
    <div class="content-wrapper">
        <tabs :options="options" />
    </div>
</template>

<script setup lang="ts">
import { ref, shallowRef, defineAsyncComponent } from "vue"
import Tabs from '@/lib/components/tabs/Tabs.vue'
import type { TabOptions } from "@/types/tabs"
const TestComponent = shallowRef(defineAsyncComponent(() => import('./Test.vue')))
const options = ref<TabOptions>({
    tabId: 'test-tabs',
    tabs: [
        {
            name: 'tab1',
            type: 'html',
            component: `<div>Tab 1</div>`,
            tabTitle: 'Tab one',
            in: () => {
                console.log('in 1')
            },
            out: () => {
                console.log('out 1')
            }
        },
        {
            name: 'tab2',
            type: 'compoent',
            component: TestComponent,
            props: {
                name: 'Shishir'
            },
            in: () => {
                console.log('in 2')
            },
            out: () => {
                console.log('out 2')
            }
        },
        {
            name: 'tab3',
            type: 'html',
            component: `<div>Tab 3</div>`,
            in: () => {
                console.log('in 3')
            },
            out: () => {
                console.log('out 3')
            }
        },
    ]
})
</script>
