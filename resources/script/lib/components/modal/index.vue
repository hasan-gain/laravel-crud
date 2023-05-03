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
    size?: 'xl' | 'lg' | 'sm' | '';
    fullscreen?: boolean;
    staticBackdrop?: boolean;
    verticallyCentered?: boolean;
    scrollable?: boolean;
    bodyClass?: string;
    headerClass?: string;
    footerClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
    size: '',
    staticBackdrop: false,
    verticallyCentered: false,
    fullscreen: false,
    scrollable: false
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
        :class="`modal fade`" 
        tabindex="-1" 
        :id="id"
        :[dynamicAttribute]="'static'"
    >
        <div 
            :class="`modal-dialog ${scrollable ? 'modal-dialog-scrollable' : ''} ${fullscreen ? 'modal-fullscreen' : ''} ${verticallyCentered ? 'modal-dialog-centered' : ''} ${size ? 'modal-' + size : ''}`">
            <div class="modal-content">
                <div :class="`modal-header ${headerClass ? headerClass : ''}`">
                    <slot name="modal-header"></slot>
                </div>
                <div :class="`modal-body ${bodyClass ? bodyClass : ''}`">
                    <slot name="modal-body"></slot>
                </div>
                <div :class="`modal-footer ${footerClass ? footerClass : ''}`">
                    <slot name="modal-footer"></slot>
                </div>
            </div>
        </div>
    </div>
</template>
