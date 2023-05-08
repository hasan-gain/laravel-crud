<!-- <template>
    <vertical-tab
        v-if="type === 'vertical'"
        :tabs="tabs" :icon="icon"
        :query-string="queryString"
    />
    <horizontal-tab
        v-else
        :tabs="tabs"
        :query-string="queryString"
        :bodyClass="bodyClass"
        :tabClass="tabClass"
    />
</template>
<script>
import VerticalTab from "./VerticalTab";
import HorizontalTab from "./HorizontalTab";

export default {
    name: "AppTab",
    components: {HorizontalTab, VerticalTab},
    props: {
        tabs: {
            type: Array,
            require: true
        },
        type: {
            type: String,
            default: 'vertical'
        },
        icon: {
            type: String
        },
        queryString: {
            type: Boolean,
            default: true
        },
        tabClass: {
            type: String,
            default: 'p-primary'
        },
        bodyClass: {
            type: String,
            default: 'p-primary'
        }
    }
}
</script> -->

<template>
    <div class="hover-scroll-x">
        <div class="d-grid">
            <ul class="nav nav-tabs nav-line-tabs nav-line-tabs-2x fs-6 flex-nowrap text-nowrap">
                <li class="nav-item" v-for="(tab, index) in tabs" :key="`tab-${options.tabId}-item-${index}`"
                    data-bs-toggle="tab" role="tab" :aria-selected="tab.name === selectedTab?.name">
                    <button class="nav-link btn"
                        :class="`${tab.name === selectedTab?.name ? 'active' : ''} ${tab.class ? tab.class : 'btn-color-gray-600 btn-active-color-primary rounded-bottom-0 m-0 btn-active-light bg-secondary'}`"
                        @click="selectedTab = tab">
                        {{ tab.tabTitle || tab.name }}
                    </button>
                </li>
            </ul>
        </div>
    </div>
    <slot></slot>
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

