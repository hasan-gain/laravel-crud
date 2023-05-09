<template>
    <nav>
        <div class="nav nav-tabs">
            <a class="nav-item text-capitalize pt-4 pb-3 px-4 cursor-pointer" v-for="(tab, index) in tabs" href="#"
                :class="`${tab.name === selectedTab?.name ? 'active': ''} ${tab.headerClass}`" :key="`tab-${options.tabId}-item-${index}`"
                @click="changeTab(tab)" data-bs-toggle="tab" role="tab" :aria-selected="tab.name === selectedTab?.name">
                <span class="d-flex gap-x-2 align-items-center">
                    <app-icon v-if="tab.icon" :type="tab.icon" /> {{ tab.tabTitle || tab.name }}
                </span>
            </a>
        </div>
    </nav>
    <div class="tab-content">
        <div class="tab-pane fade show active">
            <slot></slot>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, provide, onMounted, watch } from 'vue'
import type { ITabOptions, ITabItem } from "@/lib/components/tabs"
interface Props {
    options: ITabOptions
}

// state
const props = defineProps<Props>()
const tabs = ref(props.options.tabs)
const selectedTab = ref<ITabItem>()
provide('selectedTab', selectedTab)

// methods
const changeTab = (tab: ITabItem) => {
    let params = new URLSearchParams(window.location.search)
    params.set(props.options.tabId, tab.name)
    window.history.pushState('','', `?${params.toString()}`);
    selectedTab.value = tab
}

watch(() => selectedTab.value, (n: any, o: any) => {
    if (o?.out) o.out()
    if (n?.in) n.in()
})
onMounted(() => {
    let params = new URLSearchParams(window.location.search)
    selectedTab.value = props.options.tabs.find(i => i.name === params.get(props.options.tabId)) || props.options.tabs[0]
})
</script>
