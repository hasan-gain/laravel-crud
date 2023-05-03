<template>
    <AppModal 
        :id="id"
        :vertically-centered="true"
        :static-backdrop="true"
        :body-class="'d-flex justify-content-center'"
    >
        <template #modal-body>
            <div class="d-flex flex-column justify-content-between">
                <h3 class="text-center">
                    {{ prompt }}
                </h3>
                <p>{{subtitle}}</p>
                <div class="control-btns w-100 d-flex justify-content-around align-items-center">
                    <button class="btn btn-primary">{{firstBtnText}}</button>
                    <button class="btn btn-danger">{{secondBtnText}}</button>
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
    subtitle?: string;
    firstBtnText?: string;
    secondBtnText?: string;
}

const props = withDefaults(defineProps<Props>(), {
    prompt: 'Are you sure?',
    firstBtnText: 'Yes',
    secondBtnText: 'No',
    subtitle: 'This change might be irreversible'
});
</script>

<style scoped>

</style>
