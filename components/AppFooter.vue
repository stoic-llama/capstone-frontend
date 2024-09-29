<template>
    <footer class="container-fluid d-flex align-items-center justify-content-center p-2 bg-warning text-center">
        © 2022-{{ currentYear }} // Designed & Coded with 💙 by Parents and Community Volunteers 🍼
    </footer>
</template>

<script>
export default {
    name: 'AppFooter',
    computed: {
        currentYear() {
            return new Date().getFullYear().toString()            
        }
    }
}

</script>

<style lang="scss" scoped>

</style>