<template>
    <AppModal 
        v-bind="$props"
    >
        <template #modal-header>
            <p class="modal-title fs-4" id="exampleModalLabel">{{headerText}}</p>
        </template>

        <template #modal-body>
            <slot></slot>
        </template>

        <template #modal-footer>
            <button type="button" class="btn btn-secondary">Close</button>
        </template>
    </AppModal>
    
</template>

<script setup lang="ts">
import AppModal from  './index.vue';

interface Props {
    id: string;
    size?: 'xl' | 'lg' | 'sm' | '';
    fullscreen?: boolean;
    staticBackdrop?: boolean;
    verticallyCentered?: boolean;
    scrollable?: boolean;
    bodyClass?: string;
    headerClass?: string;
    footerClass?: string;
    headerText?: string;
}

const props = withDefaults(defineProps<Props>(), {
    size: '',
    staticBackdrop: false,
    verticallyCentered: false,
    fullscreen: false,
    scrollable: true,
    headerText: 'Modal header'
});

</script>

<style scoped>

</style>
