<script lang="ts" setup>
interface Props {
    avatarClass: string
    img: string
    altText?: string
    shadow?: boolean
    title?: string
    status?: string
    border?: boolean
}

const AV = (title: string) => {
    if (!title) return 'AV'
    let strArray = title.split(' ')
    return strArray.length < 1 ? [strArray[0], strArray[1]].map(i => i[0].toUpperCase()).join('') : [...strArray[0]].map(i => i.toUpperCase()).join('')
}

const props = defineProps<Props>()
</script>

<template>
    <div :class="avatarClass">
        <img v-if="img" class="rounded-circle" :class="{ 'avatar-shadow': shadow, 'avatar-bordered': border }" :src="img"
            :alt="altText ? altText : $t('not_found')">
        <div v-else class="no-img rounded-circle" :class="{ 'avatar-shadow': shadow, 'avatar-bordered': border }">
            {{ AV(title || '') }}
        </div>
        <span v-if="status" class="status" :class="'bg-' + status"></span>
    </div>
</template>
