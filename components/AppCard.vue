<template>
    <div class="col">
        <div class="card h-100">
            <img class="card-img-top" :src="imgURL" :alt="imgAlt"> 
            <div class="card-body">
                <h5 class="card-title">
                    <a :href="extURL">
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

<script>
export default {
    name: 'AppCard',
    props: {
        extURL: {
            type: String,
            default: '', 
        },
        imgURL: {
            type: String,
            default: '', 
        },
        imgAlt: {
            type: String,
            default: '', 
        },
    },
};
</script>

<style lang="scss" scoped>
</style>