<template>
    <main class="d-flex flex-column justify-content-between vh-100">
        <div>
            <AppNavBar />
            <div class="container d-flex justify-content-center align-items-center">
                <form class="my-5" @submit.prevent="logout()">
                    <h2 class="fw-light">Are you sure you want to log out?</h2>
                    <button type="submit" class="btn btn-dark round">Logout</button>
                </form>
            </div>        
        </div>
        <AppFooter /> 
    
    </main>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState([
            'token',
        ])
    },
    mounted () {
        const email = this.$store.state.email
        if (!email) {
            this.$router.push('/user/lookup')
        } 
    },
    methods: {
        async logout() {            
            let url = this.$config.authURL + "/auth/logout"
            const res = await this.$axios.post(url, '', {
                headers: { Authorization: 'Bearer ' + this.token }
            });
            if (res) { 
                await Promise.all([
                    this.$store.dispatch('actionUpdateFirstName', null),
                    this.$store.dispatch('actionUpdateLastName', null),   
                    this.$store.dispatch('actionUpdateEmail', null),                     
                    this.$store.dispatch('actionLogout'),
                ])
                .then(() => {
                    this.$router.push('/')
                })
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