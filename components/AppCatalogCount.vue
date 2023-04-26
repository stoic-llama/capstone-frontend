<template>
    <div class="d-flex flex-row">
        <h3>"{{ query ? query : 'All' }}" Products Found ({{ total }})</h3>
        <!-- <button type="button" class="btn btn-outline-dark btn-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
            </svg>
            Clear Search
        </button> -->
    </div>
</template>

<script>
export default {
    props: {
        query: {
            type: String,
            default: ''
        },
        total: {
            type: Number,
            default: -1,
        },
    },
}

</script>

<style lang="scss" scoped>

</style>