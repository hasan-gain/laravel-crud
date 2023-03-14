<template>
    <div>
        <!-- The button to open modal -->
        <label for="my-modal-6" class="btn mb-12">Create post</label>
        <input type="checkbox" id="my-modal-6" class="modal-toggle" />

        <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
                <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
                <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                <div class="modal-action">
                    <label for="my-modal-6" class="btn">Yay!</label>
                </div>
            </div>
        </div>

        <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
                <!-- head -->
                <thead>
                <tr>
<!--                    <th></th>-->
                    <th v-for="tableKey in tableKeys" :key="tableKey">{{ tableKey }}</th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="(post, i) in posts" :key="i">
<!--                        <th>0</th>-->
                        <td v-for="tableKey in tableKeys">{{ truncate(post[tableKey]) }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import http from '../../tools/http';

interface Post {
    title: string,
    content: string,
    [propName: string]: any
}
const posts = ref<Post[]>([]);

const tableKeys = computed<string[] | []>(() => {
    if (!posts.value.length) return [];
    return Object.keys(posts.value[0]);
})

const tableRows = computed<Post[] | []>(() => {
    if (!posts.value.length) return [];
    return posts.value.map(post => Object.values(post));
})

function truncate(value: string): string {
    const limit = 30;
    if (value.toString().length < limit) return value;
    return value.substring(0, limit) + '...';
}

onMounted(() => {
    http.get('/posts').then(({ data }) => {
        posts.value = data.data.data
        console.log({tableKeys});
    }).catch(err => {
        console.log(err);
    });
});

</script>

<style scoped>

</style>
