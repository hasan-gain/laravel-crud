<script lang="ts" setup>
import { reactive } from 'vue';
import AppInput from '@/lib/components/input/index.vue'
import FormInput from '@/lib/components/input/FormInput.vue'

const formData = reactive<any>({
    logo: 'http://readykit.test/images/logo.png',
    email: '',
    password: ''
})

// state
const errors = reactive<any>({})

const change = (e) => {
    // console.log(e)
}

const submit = (event) => {
    let form = event.target as HTMLFormElement
    var list: any = form.querySelectorAll(':invalid');
    for (var item of list) {
        console.dir(item.name);
    }
    const formData = new FormData(event?.target)
    // console.log(formData.get('email'));
    // console.log(formData.get('password'));
    errors.logo = 'Size exet'
    errors.password = 'Min 8'
}
</script>

<template>
    <div class="content-wrapper">
        <div>Dashboard</div>
        <div>{{ $t('test') }}</div>
        <div class="d-flex flex-column card card-body border-0">
            <form @submit.prevent="submit">
                <div class="row justify-content-center">
                    <div class="col-12 col-md-5">
                        <div class="d-flex flex-column gap-y-2">
                            <div class="d-flex flex-column gap-3">
                                <form-input v-model="formData.logo" v-model:error="errors.logo" type="file" multiple
                                    file-label="Select files" name="logo" placeholder="Select image" input-class=""
                                    :options="{ errorMessage: 'Logo invalid' }" required />
                                <form-input v-model="formData.password" v-model:error="errors.password" type="text"
                                    @keyup="change" name="email" placeholder="Min: 8" input-class=""
                                    @invalid="errors['gender'] = 'Select gender'" :options="{}" required />
                            </div>
                            <hr class="w-100">
                            <input class="btn btn-success" type="submit" value="Submit">
                            <input class="btn btn-danger" type="reset" value="Reset">
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
