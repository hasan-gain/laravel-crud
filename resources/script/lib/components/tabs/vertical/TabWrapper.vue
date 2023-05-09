<template>
    <div class="col-md-3 pr-md-3 tab-menu">
        <div class="card card-with-shadow border-0" :class="options.class">
            <div class="header-icon" v-if="options.icon">
                <div class="icon-position d-flex justify-content-center">
                    <div class="tab-icon d-flex justify-content-center align-items-center">
                        <app-icon :type="options.icon || 'box'" />
                    </div>
                </div>
            </div>
            <div class="px-primary py-primary">
                <div class="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                    <a v-for="(tab, index) in tabs" :key="`tab-${options.tabId}-vertical-item-${index}`"
                        class="text-capitalize tab-item-link d-flex justify-content-between my-2 my-sm-3 cursor-pointer"
                        :class="`${tab.name === selectedTab?.name ? 'active' : ''} ${tab.headerClass}`"
                        @click="changeTab(tab)" data-bs-toggle="tab" role="tab"
                        :aria-selected="tab.name === selectedTab?.name">
                        <span class="d-flex gap-x-2 align-items-center">
                            <app-icon v-if="tab.icon" :type="tab.icon" :size="16" /> {{ tab.tabTitle || tab.name }}
                        </span>
                        <span class="active-icon"><app-icon type="chevron-right" /></span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-9 pl-md-3 pt-md-0 pt-sm-4 pt-4">
        <div class="card card-with-shadow border-0" :class="options.class">
            <div class="tab-content px-primary">
                <div class="tab-pane fade active show">
                    <div class="d-flex justify-content-between">
                        <h5 class="d-flex align-items-center text-capitalize mb-0 title tab-content-header">
                            {{ selectedTab?.name }}</h5>
                        <div v-if="!!selectedTab?.actions" class="d-flex align-items-center gap-x-3 mb-0">
                            <button v-for="(action, index) in selectedTab.actions" :key="`${options.tabId}-action-${index}`"
                                class="btn" :class="action.class || 'btn-primary'" @click.prevent="action.fire">
                                <span class="d-flex gap-x-2 align-items-center">
                                    <app-icon v-if="action.icon" :type="action.icon" :size="16" /> {{ action.name }}
                                </span>
                            </button>
                        </div>
                    </div>
                    <hr class="border-secondary">
                    <div class="content py-primary">
                        <slot></slot>
                    </div>
                </div>
            </div>
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
    window.history.pushState('', '', `?${params.toString()}`);
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
