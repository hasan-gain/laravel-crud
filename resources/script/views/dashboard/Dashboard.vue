<script lang="ts" setup>
import { reactive } from 'vue';
import AppInput from '@/lib/components/input/index.vue'
const formData = reactive<any>({
})

// state
const errors = reactive({})

const change = (e) => {
    console.log(e)
}

const submit = (event) => {
    let form = event.target as HTMLFormElement
    var list: any = form.querySelectorAll(':invalid');
    for (var item of list) {
        console.dir(item.name);
    }

    errors['name'] = ''
    errors['password'] = ''
    const formData = new FormData(event?.target)
    console.log(formData.get('name'));
    console.log(formData.get('password'));
}
</script>

<template>
    <div class="content-wrapper">
        <div>Dashboard</div>
        <div>{{ $t('test') }}</div>
        <div class="d-flex flex-column">
            <form @submit.prevent="submit">
                <div class="row justify-content-center">
                    <div class="col-7">
                        <div class="d-flex flex-column gap-y-2">
                            <!-- <div>
                                <app-input v-model="formData.text" type="search" input-class="border border-danger"
                                    id="name" name="name" @invalid="errors['name'] = 'Enter name properly'" :options="{}"
                                    required autocomplete="off" placeholder="User ID" />
                                <small class="text-danger">{{ errors['name'] }}</small>
                            </div>
                            <div>
                                <app-input v-model="formData.password" type="number" name="age" :minlength="6"
                                    @invalid="errors['age'] = 'Age required'"
                                    :options="{ errorClass: 'border-danger--importent' }" placeholder="Age" required />
                                <small class="text-danger">{{ errors['age'] }}</small>
                            </div>
                            <div>
                                <app-input v-model="formData.email" type="email" name="email" :minlength="6"
                                    @invalid="errors['email'] = 'Email Envalid'"
                                    :options="{ errorClass: 'border-danger--importent' }" placeholder="admin@demo.com"
                                    required />
                                <small class="text-danger">{{ errors['email'] }}</small>
                            </div> -->
                            <div>
                                <app-input v-model="formData.gender" type="switch" name="gender" @change="change"
                                    input-class="" @invalid="errors['gender'] = 'Select gender'"
                                    :options="{ errorClass: 'border-danger--importent' }"
                                    :list="[{ id: 1, value: 'male' }, { id: 2, value: 'female' }]" required />
                                <small class="text-danger">{{ errors['gender'] }}</small>
                            </div>
                            <hr class="w-100">
                            <input class="btn btn-success" type="submit" value="Submit">
                            <input class="btn btn-danger" type="reset" value="Reset">
                        </div>
                    </div>
                </div>
            </form>
            <!-- <app-input v-model="formData.password" type="password" />
            <app-input v-model="formData.email" type="email" />
            <app-input v-model="formData.number" type="number" />
            <app-input v-model="formData.search" type="search" />
            <app-input v-model="formData.radio" type="radio" />
            <app-input v-model="formData.select" type="select" />
            <app-input v-model="formData.checkbox" type="checkbox" />
            <app-input v-model="formData.switch" type="switch" />
            <app-input v-model="formData.textarea" type="textarea" />
            <app-input v-model="formData.file" type="file" />
            <app-input v-model="formData.ImageUploader" type="image-uploader" /> -->
        </div>
    </div>
</template>
