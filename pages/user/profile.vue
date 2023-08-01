<template>
    <main class="d-flex flex-column justify-content-between vh-100">
        <div>
            <AppNavBar />
            <div class="container d-flex justify-content-center align-items-center">
                <form class="my-5" @submit.prevent="editUser()">
                    <h2 class="fw-light">Edit My Profile Information.</h2>
                    <div class="mb-3">
                        <label for="firstName" class="form-label">First Name</label>
                        <input type="text" class="form-control" id="firstName" v-model="firstName">
                        <p class="form-text">First name: {{ this.$store.state.firstName }}</p>
                    </div>
                    <div class="mb-3">
                        <label for="lastName" class="form-label">Last Name</label>
                        <input type="text" class="form-control" id="lastName" v-model="lastName">
                        <p class="form-text">Last name: {{ this.$store.state.lastName }}</p>
                    </div>

                    <div class="mb-3">
                        <label for="inputPassword" class="form-label">Password</label>
                        <input type="password" class="form-control" id="inputPassword" v-model="password">
                    </div>
                    <div class="mb-3">
                        <label for="inputConfirmPassword" class="form-label">Confirm Password</label>
                        <input type="password" class="form-control" id="inputConfirmPassword" v-model="confirmedPassword">
                    </div>

                    <button class="btn btn-dark round">Save</button>

                    <div v-show="message" class="form-text">Please enter a valid information for your profile.</div>
                </form>
            </div>
        </div>
        <AppFooter /> 
        
    </main>
</template>

<script>
export default {

    /* 
    TODO: Create a subcomponent for a reusable form. The form should have slots to put in data from vuex.
    Question ---> how to get prefilled data for user to overwrite in edit profile page?
    */

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
        async editUser() {
            this.message = false //reset message to hide

            if (this.password === this.confirmedPassword && this.firstName !== '' && this.lastName !== '') { 
                let url = this.$config.authURL + "/user/edit"
                await this.$axios.post(
                    url, 
                    {
                        firstName: this.firstName,
                        lastName: this.lastName,
                        password: this.password,
                    }, 
                    {
                        headers: { Authorization: 'Bearer ' + this.$store.state.token }
                    }
                )
                .then((res) => {
                    console.log(res)
                    Promise.all([
                        // TODO: This can be test use case for Cypress
                        // this.$store.dispatch('actionUpdateFirstName', res.data.user.firstName),
                        this.$store.dispatch('actionUpdateFirstName', res.data.firstName), 
                        this.$store.dispatch('actionUpdateLastName', res.data.lastName),                        
                    ])
                }).then( () => {
                    this.$router.push('/')
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