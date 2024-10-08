export const state = () => ({
    "token": '',
    "query": '',
    "stores": [],
    "likes": [], 
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
    UPDATE_LIKES: (state, likes) => {
        state.likes = likes
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

    // async getLikes({ commit }) {
    //     const res = await this.$axios.get(this.$config.baseURL + "/product/likes")
    //     const { status, data } = res
    //     // console.log(data[0].Store_items[0])
    //     if (status === 200) {
    //         commit('UPDATE_LIKES', data)
    //     } else {
    //         // Handle error here
    //         console.log("couldn't get likes")
    //     }
    // },

}    