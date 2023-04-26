<template>
    <main class="d-flex flex-column justify-content-between vh-100">
        <div>
            <AppNavBar />
            <div class="container d-flex justify-content-center align-items-center">
                <form class="my-5" @submit.prevent="submitPassword()">
                    <h2 class="fw-light">Enter your password to sign in.</h2>
                    <div class="mb-3">
                        <label for="inputPassword" class="form-label">Password</label>
                        <input type="password" class="form-control" id="inputPassword" aria-describedby="passwordHelp" v-model="password" />
                        <div id="passwordHelp" class="form-text"><NuxtLink to="/user/password-reset">Forgot Password?</NuxtLink></div>
                        <div v-show="message" class="form-text">Please enter a valid password.</div>
                    </div>
                    <button type="submit" class="btn btn-dark round">Login</button>
                </form>
            </div>        
        </div>
        <AppFooter /> 
        
    </main>



</template>

<script>
export default {
    data() {
        return {
            password: '',
            message: false,
        }
    },
    mounted () {
        const email = this.$store.state.email
        if (!email) {
            this.$router.push('/user/lookup')
        } 
    },
    methods: {
        async submitPassword() {            
            this.message = false // turn off message, reset it

            if(this.password.length > 0) {
                console.log("I'm here!")
                let url = this.$config.authURL + "/auth/login"
                const res = await this.$axios.post(url, {
                    email: this.$store.state.email,
                    password: this.password,
                })
                console.log(res)
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