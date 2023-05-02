<script lang="ts" setup>
import { computed, onMounted, onUnmounted, ref, toRefs } from 'vue';
import { Modal } from 'bootstrap'
const emit = defineEmits<{
    (e: "modal-opened"): void;
    (e: "modal-closed"): void;
}>();

const modal = ref<Modal | any>(null)

interface Props {
    id: string;
    size?: 'xl' | 'lg' | 'md';
    staticBackdrop?: boolean;
    verticallyCentered?: boolean,
}

const props = withDefaults(defineProps<Props>(), {
    size: 'md',
    staticBackdrop: false,
    verticallyCentered: false
});

function emitModalEvents(): void {
    const modal = document.getElementById(props.id)!
    modal.addEventListener('show.bs.modal', (event) => emit('modal-opened'))
    modal.addEventListener('hide.bs.modal', (event) => emit('modal-closed'))
}

onMounted(() => {
    const element = document.querySelector(`#${props.id}`) as HTMLElement
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
const dynamicAttribute = computed(() => props.staticBackdrop ? 'data-bs-backdrop' : '');


</script>

<template>
    <div
        :class="`modal fade ${size ? 'modal-' + size : ''}`" 
        tabindex="-1" 
        :id="id"
        :[dynamicAttribute]="'static'"
    >
        <div :class="`modal-dialog ${verticallyCentered ? 'modal-dialog-centered' : ''}`">
            <div class="modal-content">
                <div class="modal-header">
                    <slot name="modal-header"></slot>
                </div>
                <div class="modal-body">
                    <slot name="modal-body"></slot>
                </div>
                <div class="modal-footer">
                    <slot name="modal-footer"></slot>
                </div>
            </div>
        </div>
    </div>
</template>
