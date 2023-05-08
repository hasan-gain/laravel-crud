<template>
    <AppModal 
        :id="id"
        :vertically-centered="true"
        :static-backdrop="true"
        :body-class="'d-flex justify-content-center'"
    >
        <template #modal-body>
            <div class="d-flex flex-column justify-content-around align-items-center">
                <app-icon 
                    :type="icon || 'alert-circle'" 
                    :class="`text-${options?.modalClass || 'danger'}`"
                    :size="options?.iconSize || 72"
                />
                <h3 class="text-center">
                    {{ prompt || $t('are_you_sure') }}
                </h3>
                <div class="control-btns w-100 d-flex justify-content-around align-items-center">
                    <button class="btn btn-primary" @click="handleConfirmation">{{ options?.confirmBtnText || $t('confirm') }}</button>
                    <button class="btn btn-danger" @click="handleCancellation">{{ options?.cancelBtnText || $t('cancel') }}</button>
                </div>
            </div>
        </template>
    </AppModal> 
</template>

<script setup lang="ts">
import AppModal from './index.vue';
 
interface ModalOptions {
    iconSize?: number,
    confirmBtnText?: string;
    cancelBtnText?: string;
    modalClass?: 'primary' | 'danger' | 'success' | 'warning' | 'info',
}

interface Props {
    id: string;
    prompt?: string;
    icon?: string;
    options?: ModalOptions;
}

const props = defineProps<Props>();

const emit = defineEmits([
    'confirmed',
    'cancelled',
]);

const handleCancellation = (): void => {
    emit('cancelled');
}

const handleConfirmation = (): void => {
    emit('confirmed');
}

</script>

<style scoped>

</style>
