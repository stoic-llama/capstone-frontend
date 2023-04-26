<template>
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
                <input type="password" class="form-control" id="inputConfirmPassword">
            </div>

            <button class="btn btn-dark round">Create Account</button>
        </form>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            password: '',
        }
    },
    async fetch({ store }) {
        await store.dispatch('getUsers')
    },
    computed: {
        ...mapState([
            'users',
            'email',
        ]),
    },
    mounted () {
        const email = this.$store.state.email
        if (!email) {
            this.$router.push('/user/lookup')
        } 
    },
    methods: {
        registerUser() {
            const newUser = {
                Email: this.email,
                First_name: this.firstName,
                Last_name: this.lastName,
                Password: this.password,
                Permission: [], 
            }

            const found = this.users.find( u => u.Email === newUser.Email) 
            console.log("found: " + found)
            if (!found) { // if new user not found in database...   
                console.log(newUser)
                Promise.all([
                    this.createUser(newUser),
                    this.$store.dispatch('actionAddUser', newUser),
                    this.$store.dispatch('actionUpdateFirstName', newUser.First_name),
                    this.$store.dispatch('actionUpdateLastName', newUser.Last_name),
                ]).then(() => {
                    console.log("done")
                    this.$router.push('/user/lookup')
                })  

                // this.$store.dispatch('actionAddUser', newUser)
                //     .then((newUser) => {
                //         console.log("newUser in the then()")
                //         console.log(newUser)
                //         this.$store.dispatch('createUser', newUser)
                //     })
                    // .then(() => {
                    //     // this.$router.push('/user/lookup')
                    //     console.log("done")
                    // })  
            }
        },
        async createUser(newUser) {
            console.log("adding new user " + newUser.Email)
            try {
                const res = await this.$api.user.create(newUser)
                console.log(res) // success would be the newUser object
            } catch (err) {
                console.log(err)
            }
        }
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