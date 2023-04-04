<template>
    <div class="d-flex flex-wrap p-3" style="gap: 10px;">
        <div v-for="icon in icons" :key="icon">
            <icon :type="icon" size="18"></icon>
        </div>
    </div>
    <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-dark p-4">
            <h5 class="text-white h4">Collapsed content</h5>
            <span class="text-muted">Toggleable via the navbar brand.</span>
        </div>
    </div>
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
    </nav>
</template>

<script setup>
import feather from 'feather-icons';

const icons = Object.keys(feather.icons);
</script>
