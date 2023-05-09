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
                    <button data-bs-dismiss="modal" :class="`btn btn-${ options?.modalClass || 'primary' }`" @click="handleConfirmation">{{ options?.confirmBtnText || $t('confirm') }}</button>
                    <button data-bs-dismiss="modal" class="btn btn-danger" @click="handleCancellation">{{ options?.cancelBtnText || $t('cancel') }}</button>
                </div>
            </div>
        </template>
    </AppModal> 
</template>

<script setup lang="ts">
import AppModal from './index.vue';
import type { IConfirmationModalOptions } from './types';
 
interface Props {
    id: string;
    prompt?: string;
    icon?: string;
    options?: IConfirmationModalOptions;
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
