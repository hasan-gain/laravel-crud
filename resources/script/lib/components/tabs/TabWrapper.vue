<template>
    <nav>
        <div class="nav nav-tabs">
            <a class="nav-item text-capitalize p-3" v-for="(tab, index) in tabs"
                :class="{ active: tab.name === selectedTab?.name }" :key="`tab-${options.tabId}-item-${index}`"
                data-bs-toggle="tab" role="tab" :aria-selected="tab.name === selectedTab?.name">
                <button class="btn" :class="`${tab.class ? tab.class : ''}`" @click="selectedTab = tab">
                    {{ tab.tabTitle || tab.name }}
                </button>
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
import type { TabOptions, TabItem } from "@/types/tabs"
interface Props {
    options: TabOptions
}
const props = defineProps<Props>()
const tabs = ref(props.options.tabs)
const selectedTab = ref<TabItem>()
provide('selectedTab', selectedTab)
watch(() => selectedTab.value, (n: any, o: any) => {
    if (o?.out) o.out()
    if (n?.in) n.in()
})
onMounted(() => {
    selectedTab.value = props.options.tabs[0]
})
</script>
