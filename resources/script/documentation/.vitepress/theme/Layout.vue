<script setup lang="ts">
import { useData } from "vitepress";

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData();
</script>

<template>
    <div>
        <aside class="sidebar bg-dark">
            <div class="logo bg-info">
                <p class="lead text-white mb-0">LOGO</p>
            </div>
            <div class="sidebar-links-wrapper">
                <ul class="list-unstyled text-white">
                    <li class="sidebar-link">Link 1</li>
                    <li class="sidebar-link">Link 2</li>
                    <li class="sidebar-link">Link 3</li>
                    <li class="sidebar-link">Link 4</li>
                    <li class="sidebar-link">Link 5</li>
                    <li class="sidebar-link">Link 6</li>
                </ul>
            </div>
        </aside>
        <nav class="top-bar bg-light w-full">
            <ul class="list-unstyled d-flex gap-5">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>

        <!-- <div class="content-wrapper p-2 card card-with-shadow"> -->
        <!-- 	<p class="display-6">Router view here</p> -->
        <!-- </div> -->
    </div>
    <div class="content-wrapper">
        <template v-if="frontmatter.home">
            <h1>{{ site.title }}</h1>
            <p>{{ site.description }}</p>
            <ul>
                <li><a href="/markdown-examples.html">Markdown Examples</a></li>
                <li><a href="/api-examples.html">API Examples</a></li>
            </ul>
        </template>
        <div v-else>
            <a href="/">Home</a>
            <Content />
        </div>
    </div>
</template>

<style scoped lang="scss">
$sidebar-width: 15rem;
$topbar-height: 4rem;
$content-wrapper-addiotional-margin: 1rem;

// @media only screen and (min-width: 991px) {
    .sidebar {
        width: $sidebar-width;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;

        .logo {
            height: $topbar-height;
            display: grid;
            place-items: center;
        }

        .sidebar-links-wrapper ul {
            padding-inline-start: 0;
            margin-block-start: 0;

            .sidebar-link {
                padding: 1.5rem 1rem;
                background: #353a41;

                &:nth-child(odd) {
                    background: #2d3237;
                }
            }
        }
    }

    .top-bar {
        height: $topbar-height;
        position: fixed;
        left: $sidebar-width;
        right: 0;
        top: 0;
        display: grid;
        align-items: center;

        ul {
            padding-inline-start: 0;
            margin-block-start: 0;
            margin-block-end: 0;
			margin-left: $content-wrapper-addiotional-margin + 0.5rem;
            align-items: center;
        }
    }

    .content-wrapper {
        margin: {
            top: $topbar-height + $content-wrapper-addiotional-margin;
            right: $content-wrapper-addiotional-margin;
            bottom: $content-wrapper-addiotional-margin;
            left: $sidebar-width + $content-wrapper-addiotional-margin;
        }
    }
// }

.bg-dark {
    background: #333;
}

.bg-info {
    background: skyblue;
}

.bg-light {
    background: #f1f1f1;
}

.lead {
    font-size: 1rem;
    font-weight: bold;
}

.text-white {
    color: #fff;
}

.mb-0 {
    margin-bottom: 0;
}

.list-unstyled {
    list-style: none;
}

.w-full {
    width: 100%;
}

.d-flex {
    display: flex;
}

.my-3 {
    margin: 1.5rem 0;
}

.gap-5 {
    gap: 5rem;
}

.p-2 {
    padding: 1rem;
}

</style>
