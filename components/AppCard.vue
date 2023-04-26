<template>
    <div class="col">
        <div class="card h-100">
            <img class="card-img-top" :src="props.imgURL" :alt="props.imgAlt">
            <div class="card-body">
                <h5 class="card-title">
                    <a :href="props.extURL">
                        <slot name="title" />
                    </a>
                </h5>
                <div class="card-text">
                    <slot name="description" />
                </div>
            </div>
            <div class="card-footer">
                <small class="text-muted">Database updated 3 mins ago</small>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    extURL: {
        type: String,
        default: '',
    },
    imgURL: {
        type: String,
        default: ''
    },
    imgAlt: {
        type: String,
        default: '',
    }
})
</script>

<style lang="scss" scoped>
</style>