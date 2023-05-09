<template>
    <AppModal 
        v-bind="$props"
        @modal-closed="handleModalClose"
        @modal-opened="handleModalOpened"
    >
        <template #modal-header>
            <h4 class="modal-title" id="exampleModalLabel">{{headerText}}</h4>
        </template>

        <template #modal-body>
            <slot></slot>
        </template>

        <template #modal-footer>
            <button type="button" class="btn btn-secondary" @click="handleModalClose">Close</button>
        </template>
    </AppModal>
    
</template>

<script setup lang="ts">
import AppModal from  './index.vue';

interface Props {
    id: string;
    size?: 'xl' | 'lg' | 'sm' | 'fullscreen' | '';
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
const emit = defineEmits(['modal-closed', 'modal-opened']);

const handleModalClose = (): void => {
    emit('modal-closed');
}

const handleModalOpened = (): void => {
    emit('modal-opened');
}

</script>

<style scoped>

</style>
