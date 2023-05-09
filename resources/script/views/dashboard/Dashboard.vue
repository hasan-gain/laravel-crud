<template>
    <div class="content-wrapper">
        <tabs :options="options" />
    </div>
</template>

<script setup lang="ts">
import { ref, markRaw } from "vue"
import Tabs from '@/lib/components/tabs/Index.vue'
import type { ITabOptions } from "@/lib/components/tabs"
import Test from "@/views/dashboard/Test.vue"
const options = ref<ITabOptions>({
    tabId: 'test-tabs',
    icon: 'settings',
    alignment: 'vertical',
    tabs: [
        {
            name: 'tab1',
            type: 'html',
            icon: 'send',
            component: `<div>Tab 1</div>`,
            tabTitle: 'Tab one',
            actions: [
                { name: 'Action1', fire:() => { console.log('action1')}, class: 'btn-success', icon: 'send' },
                { name: 'Action2', fire:() => { console.log('action2')} },
            ],
            in: () => {
                console.log('in 1')
            },
            out: () => {
                console.log('out 1')
            }
        },
        {
            name: 'tab2',
            type: 'component',
            component: markRaw(Test),
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
