<template>
    <form class="input-group input-group-lg" @submit.prevent="submitQuery(query)">
        <span class="input-group-text">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>            
        </span>
        <input type="text" class="form-control" v-model="query" placeholder="Search by infant formula name..." aria-label="Baby Formula Name">
        <button class="btn btn-dark round" type="button" id="button-addon1" @click="submitQuery(query)">Search</button>
    </form>
</template>

<script>
export default {
name: 'AppSearch',
data() {
    return {
        query: ''
    }
},
methods: {
    submitQuery(q) {
        // this.$store.commit('UPDATE_QUERY', q)
        this.$store.dispatch('actionUpdateQuery', this.query)
        .then(() => {
            this.$router.push('/product/catalog')
        })
    }
}
};
</script>

<style lang="scss" scoped>
.input-group {
max-width: 584px;
margin-bottom: 10rem;
}
.input-group-text {
background-color: white;
border: 0;
border-radius: 1.5rem;
}
.form-control {
border-left-width: 0;
border-color: white;
}
.round {
border: 0;
border-radius: 1.5rem;
min-width: 6.5rem;
color: #ffbe0b;
font-weight: 100;
font-size: 1rem;
}
::placeholder {
font-size: 1rem;
}
@media screen and (max-width: 585px) {
.input-group {
    max-width: 400px;
}
}
</style>