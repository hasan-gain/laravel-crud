<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import http from '../../tools/http';

function createPost(): void {
    http.post(`/posts`, {
        title: postTitle.value,
        content: postContent.value,
    }).then((data) => {
        fetchPostsData();
    }).catch(err => {
        console.log(err);
    });
}

function fetchPostsData(): void {
    http.get('/posts').then(({ data }) => {
        posts.value = data.data.data
    }).catch(err => {
        console.log(err);
    });
}

function fetchSinglePostData(id: number): void {
    http.get(`/posts/${id}`).then(({ data: editData }) => {
        const {title, content} = editData;
        formData.value.title = title;
        formData.value.content = content;
    }).catch(err => {
        console.log(err);
    });
}

function editPost(): void {
    http.post(`/posts/${postToEditId.value}`, {
        title: formData.value.title,
        content: formData.value.content,
        _method: 'patch'
    }).then((data) => {
        closeEditModal();
        formData.value = {title: '', content: ''};
        fetchPostsData();
    }).catch(err => {
        console.log(err);
    });
}

function deletePost(): void {
    http.delete(`/posts/${postToDeleteId.value}`).then((data) => {
        fetchPostsData();
    }).catch(err => {
        console.log(err);
    });
}

const postToEditId = ref<number>(0);
const postToDeleteId = ref<number>(0);

onMounted(() => {
    fetchPostsData();
});

interface Post {
    title: string,
    content: string,
    // id: number,
    [propName: string]: any
}

const posts = ref<Post[]>([]);
const tableKeys = computed<string[] | []>(() => {
    if (!posts.value.length) return [];
    return Object.keys(posts.value[0]);
})

const postTitle = ref<string>('');
const postContent = ref<string>('');

function truncate(value: string): string {
    const limit = 30;
    if (value.toString().length < limit) return value;
    return value.substring(0, limit) + '...';
}


const showEditModal = ref<boolean>(false);

function openEditModal(postId: number): void {
    postToEditId.value = postId;
    showEditModal.value = true;
    fetchSinglePostData(postId);
}

function closeEditModal() {
    showEditModal.value = false;
    postToEditId.value = 0;
}


const showDeleteModal = ref<boolean>(false);

function openDelModal(postId: number, modalClosing: boolean): void {
    postToDeleteId.value = postId;
    showDeleteModal.value = true;
}

function closeDeleteModal() {
    showDeleteModal.value = false;
    postToDeleteId.value = 0;
}


const formData = ref<Post>({title: '', content: ''});
</script>

<template>
    <div>
        <!-- The button to open modal -->
        <!-- The button to open modal -->
        <label for="my-modal" class="btn">open modal</label>

        <!-- Put this part before </body> tag -->
        <input type="checkbox" id="my-modal" class="modal-toggle"/>
        <div class="modal">
            <div class="modal-box">
                <h3 class="font-bold text-lg">Create post</h3>

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">title</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs"
                           v-model="postTitle"/>

                    <label class="label">
                        <span class="label-text">Content</span>
                    </label>
                    <textarea class="textarea textarea-bordered h-24" placeholder="Bio"
                              v-model="postContent"></textarea>
                </div>

                <div class="modal-action">
                    <label for="my-modal" class="btn" @click="createPost">Create</label>
                </div>
            </div>
        </div>

        <div :class="`modal ${showEditModal ? 'modal-open' : ''}`" id="edit-modal">
            <div class="modal-box">
                <h3 class="font-bold text-lg">Edit post</h3>

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">title</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs"
                           v-model="formData.title"/>

                    <label class="label">
                        <span class="label-text">Content</span>
                    </label>
                    <textarea class="textarea textarea-bordered h-24" placeholder="Bio"
                              v-model="formData.content"></textarea>
                </div>

                <div class="modal-action">
                    <a href="#" class="btn" @click="editPost">Save</a>
                    <a href="#" class="btn" @click="closeEditModal">Cancel</a>
                </div>

            </div>
        </div>

        <div :class="`modal ${showDeleteModal ? 'modal-open' : ''}`" id="delete-modal">
            <div class="modal-box">
                <h3 class="font-bold text-lg">Delete post? {{ postToDeleteId }}</h3>
                <p class="py-4">Delete this post?</p>
                <div class="modal-action">
                    <a href="#" class="btn" @click="deletePost">Delete</a>
                    <a href="#" class="btn" @click="closeDeleteModal">Cancel</a>
                </div>
            </div>
        </div>

        <div class="overflow-x-auto mt-10">
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
                            <button class="btn btn-xs btn-accent" @click="openEditModal(post.id)">Edit
                            </button>
                            <button class="btn btn-xs btn-error" @click="openDelModal(post.id)">Del</button>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<style scoped>

</style>
