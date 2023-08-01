<template>
    <main class="d-flex flex-column justify-content-between vh-100">
        <div>
            <AppNavBar />
            About page
        </div>
        <AppFooter /> 
        
    </main>



</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        async submitPassword() {            
            this.message = false // turn off message, reset it

            if(this.password.length > 0) {
                let url = this.$config.authURL + "/auth/login"
                const res = await this.$axios.post(url, {
                    email: this.$store.state.email,
                    password: this.password,
                })
                if (!res) { 
                    // Password is not valid   
                    this.message = true
                } else {
                    // Password is valid
                    Promise.all([
                        this.$store.dispatch('actionUpdateFirstName', res.data.user.firstName),
                        this.$store.dispatch('actionUpdateLastName', res.data.user.lastName),                        
                        this.$store.dispatch('actionUpdateToken', res.data.user.token),
                    ])
                    .then(() => {
                        this.$router.push('/')
                    })
                }
            } else {
                this.message = true
            } 
        },
    }
};
</script>

<style lang="scss" scoped>
.round {
    // border: 0;
    border-radius: 1.5rem;
    min-width: 6.5rem;
    // color: black;
    font-weight: 400;
    font-size: 1rem;
    // background-color: white;
}
</style>