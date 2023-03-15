<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import http from '../../tools/http';

const createPost = (): void => {
    http.post(`/posts`, {
        title: postTitle.value,
        content: postContent.value,
    })
        .then(() => fetchPostsData())
        .catch(err => {
            console.log(err);
        });
}

const page = ref<number>(1);
const lastPage = ref<number>(0);
const getNextPageData = (): void => {
    page.value++;
    fetchPostsData();
}

const getPrevPageData = (): void => {
    page.value--;
    fetchPostsData();
}
const fetchPostsData = (): void => {
    http.get(`/posts?page=${page.value}`).then(({ data }) => {
        lastPage.value = data.data.last_page;
        posts.value = data.data.data;
    }).catch(err => {
        console.log(err);
    });
}

const fetchSinglePostData = (id: number): void => {
    http.get(`/posts/${id}`).then(({ data: editData }) => {
        const { title, content } = editData;
        formData.value.title = title;
        formData.value.content = content;
    }).catch(err => {
        console.log(err);
    });
}

const editPost = (): void => {
    http.post(`/posts/${postToEditId.value}`, {
        title: formData.value.title,
        content: formData.value.content,
        _method: 'patch'
    }).then((data) => {
        closeEditModal();
        fetchPostsData();
    }).catch(err => {
        console.log(err);
    });
}

const deletePost = (): void => {
    http.delete(`/posts/${postToDeleteId.value}`).then(() => {
        closeDeleteModal();
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

const truncate = (value: string): string => {
    const limit = 30;
    if (value.toString().length < limit) return value;
    return value.substring(0, limit) + '...';
}


const showEditModal = ref<boolean>(false);
const openEditModal = (postId: number): void => {
    postToEditId.value = postId;
    showEditModal.value = true;
    fetchSinglePostData(postId);
}
const closeEditModal = (): void => {
    showEditModal.value = false;
    postToEditId.value = 0;
    formData.value = { title: '', content: '' };
}


const showDeleteModal = ref<boolean>(false);
const openDelModal = (postId: number): void => {
    postToDeleteId.value = postId;
    showDeleteModal.value = true;
}
const closeDeleteModal = (): void => {
    showDeleteModal.value = false;
    postToDeleteId.value = 0;
}

const formData = ref<Post>({ title: '', content: '' });
</script>

<template>
    <div>
        <div class="flex justify-between items-center mb-2">
            <h3 class=" text-2xl">All Posts</h3>
            <!-- The button to open modal -->
            <label for="my-modal" class="btn btn-sm">Add Post</label>
        </div>
        <hr>
        <!-- Put this part before </body> tag -->
        <input type="checkbox" id="my-modal" class="modal-toggle" />
        <div class="modal">
            <div class="modal-box">
                <h3 class="font-bold text-lg">Create post</h3>

                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">title</span>
                    </label>
                    <input type="text" placeholder="Enter title" class="input input-bordered w-full max-w-xs"
                        v-model="postTitle" />

                    <label class="label">
                        <span class="label-text">Content</span>
                    </label>
                    <textarea class="textarea textarea-bordered h-24" placeholder="Enter content"
                        v-model="postContent"></textarea>
                </div>

                <div class="modal-action">
                    <label for="my-modal" :class="`btn ${!Boolean(postTitle && postContent) ? 'btn-disabled' : ''}`"
                        @click="createPost">Create</label>
                    <label for="my-modal" class="btn">Cancel</label>
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
                    <input type="text" placeholder="Enter title" class="input input-bordered w-full max-w-xs"
                        v-model="formData.title" />

                    <label class="label">
                        <span class="label-text">Content</span>
                    </label>
                    <textarea class="textarea textarea-bordered h-24" placeholder="Enter content"
                        v-model="formData.content"></textarea>
                </div>

                <div class="modal-action">
                    <a href="#" @click="editPost"
                        :class="`btn ${!Boolean(formData.title && formData.content) ? 'btn-disabled' : ''}`">Save</a>
                    <a href="#" class="btn" @click="closeEditModal">Cancel</a>
                </div>

            </div>
        </div>

        <div :class="`modal ${showDeleteModal ? 'modal-open' : ''}`" id="delete-modal">
            <div class="modal-box">
                <h3 class="font-bold text-lg">Delete post? {{ postToDeleteId }}</h3>
                <p class="py-4">Delete this post?</p>
                <div class="modal-action">
                    <a href="#" class="btn btn-error" @click="deletePost">Delete</a>
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
        <div class="btn-group mt-3">
            <button class="btn" v-if="page > 1"  @click="getPrevPageData">«</button>
            <button class="btn">Page {{page}}</button>
            <button class="btn" v-if="page < lastPage" @click="getNextPageData">»</button>
        </div>
    </div>
</template>


<style scoped></style>
