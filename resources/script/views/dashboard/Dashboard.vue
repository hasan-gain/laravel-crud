<template>
    <div>Dashboard</div>
    <div>{{ $t('test') }}</div>
    <div class="d-flex flex-column">
        <app-input v-model="formData.text" type="text" />
        <app-input v-model="formData.password" type="password" />
        <app-input v-model="formData.email" type="email" />
        <app-input v-model="formData.number" type="number" />
        <app-input v-model="formData.search" type="search" />
        <app-input v-model="formData.radio" type="radio" />
        <app-input v-model="formData.select" type="select" />
        <app-input v-model="formData.checkbox" type="checkbox" />
        <app-input v-model="formData.switch" type="switch" />
        <app-input v-model="formData.textarea" type="textarea" />
        <app-input v-model="formData.file" type="file" />
        <app-input v-model="formData.ImageUploader" type="image-uploader" />
    </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import AppInput from '@/lib/components/input/index.vue'
const formData = reactive<any>({
    text: 'test'
})
</script>
