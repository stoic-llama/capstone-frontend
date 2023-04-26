<template>
    <main class="d-flex flex-column justify-content-between vh-100">
        <div>
            <AppNavBar />
            <div class="container d-flex justify-content-center align-items-center">
                <form class="my-5" @submit.prevent="submitEmail()">
                    <h2 class="fw-light">Enter your email to join us or sign in.</h2>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="email" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        <div v-show="message" class="form-text">Please enter a valid email.</div>
                    </div>

                    <button type="submit" class="btn btn-dark round">Continue</button>
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
            email: '',
            message: false,
        }
    },
    methods: {
        async submitEmail() {            
            this.message = false // turn off message, reset it

            let emailParameters = this.email.split('@')
            let url = this.$config.authURL + "/user/lookup"
            if(emailParameters.length === 2) {
                const found = await this.$axios.post(url, {
                    email: this.email 
                })
                if (!found) { 
                    // User does not exist in database   
                    this.$store.dispatch('actionUpdateEmail', this.email).then(() => {
                        this.$router.push('/user/signup')
                    })
                } else {
                    // User already exists in database
                    this.$store.dispatch('actionUpdateEmail', this.email).then(() => {
                        this.$router.push('/user/challenge')
                    })
                }
            } else {
                this.message = true
            } 

        },
        async loginStatus() {
            const res = await this.$api.session.isAuthenticated()
            console.log(res.isAuth)
            this.status = res.isAuth 
            console.log("User session valid? " + this.status)
        },
    }, 
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