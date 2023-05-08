<template>
    <AppModal 
        :id="id"
        :vertically-centered="true"
        :static-backdrop="options?.staticBackdrop !== undefined ? options?.staticBackdrop : true"
        :body-class="'d-flex justify-content-center'"
        @modal-closed="closeModal"
    >
        <template #modal-body>
            <div class="d-flex flex-column justify-content-around align-items-center">
                <app-icon 
                    :type="icon || 'alert-circle'" 
                    :class="`text-${options?.modalClass || 'danger'}`"
                    :size="options?.iconSize || 72"
                />
                <h3 class="text-center">
                    {{ prompt || $t('piece_of_information') }}
                </h3>
                <div class="control-btns w-100 d-flex justify-content-around align-items-center">
                    <button data-bs-dismiss="modal" :class="`btn btn-${ options?.modalClass || 'primary' }`" @click="closeModal">{{ options?.btnText || $t('Okay') }}</button>
                </div>
            </div>
        </template>
    </AppModal> 
</template>

<script setup lang="ts">
import AppModal from './index.vue';
 
interface ModalOptions {
    iconSize?: number,
    btnText?: string;
    modalClass?: 'primary' | 'danger' | 'success' | 'warning' | 'info',
    staticBackdrop?: boolean
}

interface Props {
    id: string;
    prompt?: string;
    icon?: string;
    options?: ModalOptions;
}

const props = defineProps<Props>();
const emit = defineEmits(['modal-closed']);

const closeModal = (): void => {
    emit('modal-closed');
}
</script>

<style scoped>

</style>
