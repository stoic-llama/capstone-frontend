<template>
    <main class="d-flex flex-column justify-content-between vh-100">
        <div>
            <AppNavBar />
            <div class="container d-flex justify-content-center align-items-center">
                <form class="my-5" @submit.prevent="registerUser()">
                    <h2 class="fw-light">Let's make you a Formula Finder account.</h2>
                    <div class="mb-3">
                        <label for="firstName" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="firstName" v-model="firstName">
                    </div>
                    <div class="mb-3">
                        <label for="lastName" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="lastName" v-model="lastName">
                    </div>

                    <div class="mb-3">
                        <label for="inputPassword" class="form-label">Password</label>
                        <input type="password" class="form-control" id="inputPassword" v-model="password">
                    </div>
                    <div class="mb-3">
                        <label for="inputConfirmPassword" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="inputConfirmPassword" v-model="confirmedPassword">
                    </div>

                    <button class="btn btn-dark round">Create Account</button>

                    <div v-show="message" class="form-text">Please enter a valid information for registration.</div>
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
            firstName: '',
            lastName: '',
            password: '',
            confirmedPassword: '',
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
        async registerUser() {
            this.message = false //reset message to hide

            if (this.password === this.confirmedPassword && this.firstName !== '' && this.lastName !== '') { 
                let url = this.$config.authURL + "/auth/register"
                const res = await this.$axios.post(url, {
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.$store.state.email,
                    password: this.password,
                })
                .then(() => {
                    this.$router.push('/user/lookup')
                })  

            }
            else {
                this.message = true
            }
        },
    }
}

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