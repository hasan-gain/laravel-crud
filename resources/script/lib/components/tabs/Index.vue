<template>
    <vertical-tab v-if="options.alignment === 'vertical'" :options="options" />
    <horizontal-tab v-else :options="options" />
</template>
<script setup lang="ts">
import type { ITabOptions } from "@/lib/components/tabs"

// components
import HorizontalTab from './horizontal/Tabs.vue'
import VerticalTab from './vertical/Tabs.vue'
interface Props {
    options: ITabOptions
}
const props = defineProps<Props>()
</script>

