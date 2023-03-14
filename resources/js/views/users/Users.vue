<template>
    <div>
        <!-- The button to open modal -->
        <label for="my-modal-6" class="btn mb-12">Create post</label>
        <input type="checkbox" id="my-modal-6" class="modal-toggle" />

        <div class="modal modal-bottom">
            <div class="modal-box">
                <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
                <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                <div class="modal-action">
                    <label for="my-modal-6" class="btn">Yay!</label>
                </div>
            </div>
        </div>

        <div :class="`modal ${showEditModal ? 'modal-open' : ''}`" id="edit-modal">
            <div class="modal-box">
                <h3 class="font-bold text-lg">Edit post?</h3>
                <p class="py-4">Edit this post? {{postToEditId}}</p>
                <div class="modal-action">
                    <a href="#" class="btn">Save</a>
                    <a href="#" class="btn" @click="handleEditModalClick(0, true)">Cancel</a>
                </div>
            </div>
        </div>

        <div :class="`modal ${showDeleteModal ? 'modal-open' : ''}`" id="delete-modal">
            <div class="modal-box">
                <h3 class="font-bold text-lg">Delete post? {{postToDeleteId}}</h3>
                <p class="py-4">Delete this post?</p>
                <div class="modal-action">
                    <a href="#" class="btn" @click="handlePostDelete">Delete</a>
                    <a href="#" class="btn" @click="handleDelModalClick">Cancel</a>
                </div>
            </div>
        </div>

        <div class="overflow-x-auto">
            <table class="table table-zebra w-full">
                <!-- head -->
                <thead>
                <tr>
                    <th v-for="tableKey in tableKeys" :key="tableKey">{{ tableKey }}</th>
                    <th>
                        <p>Actions</p>
                    </th>
                </tr>
                </thead>
                <tbody>
                    <tr v-for="(post, i) in posts" :key="i">
                        <td v-for="tableKey in tableKeys">{{ truncate(post[tableKey]) }}</td>
                        <td>
                            <div class="btn-group">
                                <button class="btn btn-xs btn-accent" @click="handleEditModalClick(post.id, false)">Edit</button>
                                <button class="btn btn-xs btn-error" @click="handleDelModalClick(post.id)">Del</button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import http from '../../tools/http';

function fetchPostsData() {
    http.get('/posts').then(({ data }) => {
        posts.value = data.data.data
    }).catch(err => {
        console.log(err);
    });
}

onMounted(() => {
    fetchPostsData();
});

interface Post {
    title: string,
    content: string,
    id: number,
    [propName: string]: any
}

const posts = ref<Post[]>([]);
const tableKeys = computed<string[] | []>(() => {
    if (!posts.value.length) return [];
    return Object.keys(posts.value[0]);
})

function truncate(value: string): string {
    const limit = 30;
    if (value.toString().length < limit) return value;
    return value.substring(0, limit) + '...';
}

const showEditModal = ref<boolean>(false);
const showDeleteModal = ref<boolean>(false);

const postToEditId = ref<number>(0);
const postToDeleteId = ref<number>(0);


function handleDelModalClick(postId: number, modalClosing: boolean): void {
    postToDeleteId.value = postId;
    showDeleteModal.value = !showDeleteModal.value;
    if (modalClosing) postToDeleteId.value = 0;
}

function handleEditModalClick(postId: number, modalClosing: boolean): void {
    postToEditId.value = postId;
    showEditModal.value = !showEditModal.value;
    if (modalClosing) postToEditId.value = 0;
}

function handlePostDelete() {
    http.delete(`/posts/${postToDeleteId.value}`).then((data) => {
        console.log(data);
        handleDelModalClick(0, false);
        fetchPostsData();
    }).catch(err => {
        console.log(err);
    });
}

</script>

<style scoped>

</style>
