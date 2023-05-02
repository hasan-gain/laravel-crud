<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { Modal } from 'bootstrap'
const emit = defineEmits<{
    (e: "modal-opened"): void;
    (e: "modal-closed"): void;
}>();

const modal = ref<Modal | any>(null)

const { modalId, modalSize } = defineProps({
    modalId: { type: String, required: true },
    modalSize: { type: String, required: false, defailt: 'md' }
})

function emitModalEvents(): void {
    const modal = document.getElementById(modalId)!
    modal.addEventListener('show.bs.modal', (event) => emit('modal-opened'))
    modal.addEventListener('hide.bs.modal', (event) => emit('modal-closed'))
}

onMounted(() => {
    const element = document.querySelector(`#${modalId}`) as HTMLElement
    modal.value = new Modal(element)
    emitModalEvents();
    modal.value?.show()
})

onUnmounted(() => {
    if (modal.value?._isShown) {
        modal.value?.dispose()
        emit('modal-closed')
        document.body.style.overflow = ''
        document.body.style.paddingRight = ''
    }
})

</script>

<template>
    <div :class="`modal fade modal-${modalSize}`" tabindex="-1" :id="modalId">
        <div class="modal-dialog">
            <div class="modal-content">
                <slot name="modal-body">
                </slot>
            </div>
        </div>
    </div>
</template>
