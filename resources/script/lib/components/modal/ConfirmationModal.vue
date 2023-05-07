<template>
    <AppModal 
        :id="id"
        :vertically-centered="true"
        :static-backdrop="true"
        :body-class="'d-flex justify-content-center'"
        @modal-closed="handleModalClose"
    >
        <template #modal-body>
            <div class="d-flex flex-column justify-content-around align-items-center">
                <app-icon 
                    :type="icon" 
                    class="text-icon"
                    :size="100" 
                    :stroke="iconStroke"
                />
                <h3 class="text-center">
                    {{ prompt }}
                </h3>
                <div class="control-btns w-100 d-flex justify-content-around align-items-center">
                    <button class="btn btn-primary" @click="handleConfirmation">{{firstBtnText}}</button>
                    <button class="btn btn-danger" @click="handleCancellation">{{secondBtnText}}</button>
                </div>
            </div>
        </template>
    </AppModal> 
</template>

<script setup lang="ts">
import AppModal from './index.vue';

interface Props {
    id: string;
    prompt?: string;
    firstBtnText?: string;
    secondBtnText?: string;
    icon?: string;
    iconStroke?: string;
}

const props = withDefaults(defineProps<Props>(), {
    prompt: 'Are you sure?',
    firstBtnText: 'Yes',
    secondBtnText: 'No',
    icon: 'alert-circle',
    iconStroke: 'red'
});

const emit = defineEmits([
    'modal-closed',
    'confirmed',
    'cancelled',
]);

const handleModalClose = (): void => {
    emit('modal-closed');
}

const handleCancellation = (): void => {
    emit('cancelled');
}

const handleConfirmation = (): void => {
    emit('confirmed');
}

</script>

<style scoped>

</style>
