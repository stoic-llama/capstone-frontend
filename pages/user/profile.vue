<template>
    <main class="d-flex flex-column justify-content-between vh-100">
        <div>
                <AppNavBar />
                <div>
                    <span>Profile Page</span>
                </div>
        </div>
        <AppFooter /> 
    </main>
</template>

<script>
    export default{
        mounted () {
            const token = this.$store.state.token
            if (!token) {
                this.$router.push('/user/lookup')
            } 
        },
    }
</script>

<style lang="scss" scoped>

</style>