<script setup lang="ts">
import { reactive } from 'vue'
import AppInput from '@/lib/components/input/index.vue'
const formData = reactive<any>({})
const errors = reactive<any>({})

// methods
const submit = (event: Event) => {
    console.log(formData)
}
const change = (event: string) => {
    Object.keys(errors).forEach(key => {
        errors[key] = ''
    });
}
const invalid = (name?) => {
    if (name === 'name') {
        errors[name] = 'Enter name properly.'
    }
}
</script>

<template>
    <form @submit.prevent="submit">
        <div class="row">
            <div class="col">
                <app-input v-model="formData.name" name="name" type="text" placeholder="Name" @change="change"
                    @invalid="invalid('name')" required />
                <small class="text-danger">{{ errors['name'] }}</small>
            </div>
        </div>
        <hr>
        <button class="btn btn-success" type="submit">Submit</button>
    </form>
</template>
