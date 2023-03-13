<template>
    <div class="h-screen w-screen flex justify-center items-center">
        <div>
            <div class="text-2xl m-3">Login to Application</div>
            <form class="card w-96 bg-base-300 shadow-xl" @submit.prevent="submit">
                <div class="card-body flex flex-col gap-y-5">
                    <div class="flex flex-col">
                        <label for="email">Email</label>
                        <input id="email" type="email" name="email" placeholder="Email"
                            class="input input-bordered w-full max-w-xs" autocomplete="off" required>
                    </div>
                    <div class="flex flex-col">
                        <label for="password">Password</label>
                        <input id="password" type="password" name="password" placeholder="Min: 6"
                            class="input input-bordered w-full max-w-xs" autocomplete="off" required>
                    </div>
                    <div class="flex flex-col">
                        <button type="submit" class="btn btn-success w-full" :disabled="loading">Login</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import http from '../../tools/http'
const loading = ref(false)

const submit = (event) => {
    loading.value = true
    let formData = new FormData(event.target)
    http.post('/login', formData).then(res => { }).catch(err => {
        console.log(err);
    }).finally(() => {
        loading.value = false
    })
}
</script>

<style scoped></style>
