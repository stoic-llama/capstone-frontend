export const state = () => ({
    "token": '',
    "query": '',
    "stores": [],
    "email": '',
    "firstName": '',
    "lastName": '',
    // "password": '',   // collect at page and then dispose; don't store it
})

// export const getters = {
//     getterValue: state => {
//         return state.value
//     }
// }

export const mutations = {
    UPDATE_TOKEN: (state, token) => {
        state.token = token
    },
    UPDATE_QUERY: (state, query) => {
        state.query = query
    },
    UPDATE_STORES: (state, stores) => {
        state.stores = stores
    },
    UPDATE_EMAIL: (state, email) => {
        state.email = email
    },
    UPDATE_FIRST_NAME: (state, firstName) => {
        state.firstName = firstName
    },
    UPDATE_LAST_NAME: (state, lastName) => {
        state.lastName = lastName
    },
    // UPDATE_PASSWORD: (state, password) => {
        //     state.password = password
    // },
}

export const actions = {
    actionUpdateToken: ({commit}, token) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('UPDATE_TOKEN', token)
                resolve()
            }, "1000")
        })
    },
    actionUpdateQuery: ({commit}, query) => {
        return new Promise((resolve, reject) => {
            commit('UPDATE_QUERY', query)
            resolve()
            // setTimeout(() => {
            //     commit('UPDATE_QUERY', query)
            //     resolve()
            // }, "500")
        })
    },
    actionUpdateEmail: ({commit}, email) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('UPDATE_EMAIL', email)
                resolve()
            }, "1000")
        })
    },
    actionUpdateFirstName: ({commit}, firstName) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('UPDATE_FIRST_NAME', firstName)
                resolve()
            }, "1000")
        })
    },
    actionUpdateLastName: ({commit}, lastName) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('UPDATE_LAST_NAME', lastName)
                resolve()
            }, "1000")
        })
    },  
    // actionUpdatePassword: ({commit}, password) => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             commit('UPDATE_PASSWORD', password)
    //             resolve()
    //         }, "1000")
    //     })
    // },
    
/////////////////

    async getStores({ commit }) {
        const res = await this.$axios.get(this.$config.baseURL + "/product/stores")
        const { status, data } = res
        // console.log(data[0].Store_items[0])
        if (status === 200) {
            commit('UPDATE_STORES', data)
        } else {
            // Handle error here
            console.log("couldn't get stores")
        }
    },

    async postVote({ commit }, vote) {
        try {
            const res = await this.$axios.post("http://localhost:1000/api/v1/product/vote", {
                store_id: vote.store_id,
                product_id: vote.product_id, 
                email: vote.email,
                like: vote.like, 
                dislike: vote.dislike, 
            });
    
            const { status, data } = res;
    
            if (status === 200) {
                // Optionally commit a mutation to update the state with the new vote data
                // commit('UPDATE_VOTE_DATA', data);
                return data; // Return the data for further processing if needed
            } else {
                console.error(`Error: Received status code ${status}`);
                throw new Error(`Unexpected status code when submitting vote: ${status}`);
            }
        } catch (error) {
            console.error("Network error when submitting vote:", error.message);
            return error;
        }
    }
}    