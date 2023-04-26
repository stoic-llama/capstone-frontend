<template>
    <main class="d-flex flex-column justify-content-between vh-100">
        <div>
            <AppNavBar />
            <div class="container-fluid">
                <div class="row">
                    <section class="col-sm-12">
                        <div class="d-flex justify-content-between py-2">
                            <AppCatalogCount 
                                :total="cards.length" 
                                :query="query"
                            />
                            <div class="d-flex">
                                <div>
                                    <button class="btn" type="button" id="button-addon1" @click="show = !show">
                                        Toggle Side Menu 
                                        <svg aria-hidden="true" class="icon-filter-ds" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M21 8.25H10m-5.25 0H3"></path><path stroke="currentColor" stroke-width="1.5" d="M7.5 6v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clip-rule="evenodd"></path><path stroke="currentColor" stroke-width="1.5" d="M3 15.75h10.75m5 0H21"></path><path stroke="currentColor" stroke-width="1.5" d="M16.5 13.5v0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" clip-rule="evenodd"></path></svg>
                                    </button>
                                </div>
                                <div class="dropdown">
                                    <button class="btn dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sort By
                                    </button>
        
                                    <ul class="dropdown-menu">
                                        <li><button class="dropdown-item" @click="sortCards(1, cards)">Product Name</button></li>
                                        <li><button class="dropdown-item" @click="sortCards(2, cards)">Store Address</button></li>
                                    </ul>
                                </div>                     
                            </div>
                        </div>
                    </section>
                </div>
                <div class="row">
                    <section class="col-sm-3" v-show="show">
                        <AppAccordion accordionId="productNameSearch">
                            <template v-slot:title>
                                Product 
                            </template>
                            <template v-slot:body>
                                <AppProductNameSearch />
                            </template>
                        </AppAccordion>
        
                        <AppAccordion accordionId="productFamily">
                            <template v-slot:title>
                                Product Family
                            </template>
                            <template v-slot:body>
                                <div class="form-check" v-for="pf in productFamilyDisplay" :key="pf">
                                    <input  class="form-check-input" 
                                            type="checkbox" :value="pf" 
                                            :id="pf" 
                                            v-model="productFamily_checkbox" 
                                    >
                                    <label class="form-check-label word-wrap-block" :for="pf">
                                        {{ pf }}
                                    </label>
                                </div>
                            </template>
                        </AppAccordion>
        
                        <AppAccordion accordionId="availability">
                            <template v-slot:title>
                                Availability
                            </template>
                            <template v-slot:body>
                                <div class="form-check" v-for="a in availabilityDisplay" :key="a">
                                    <input class="form-check-input" type="checkbox" :value="a" :id="a" v-model="availability_checkbox">
                                    <label class="form-check-label word-wrap-block" :for="a">
                                        {{ a }}
                                    </label>
                                </div>
                            </template>
                        </AppAccordion>
        
                        <AppAccordion accordionId="city">
                            <template v-slot:title>
                                City
                            </template>
                            <template v-slot:body>
                                <div class="form-check" v-for="c in cityDisplay" :key="c">
                                    <input class="form-check-input" type="checkbox" :value="c" :id="c" v-model="city_checkbox">
                                    <label class="form-check-label word-wrap-block" :for="c">
                                        {{ c }}
                                    </label>
                                </div>
                            </template>
                        </AppAccordion>
                    </section>
        
                    <section class="col-sm-9 mb-4" v-show="show">
                        <div class="col">
                            <div class="row row-cols-1 row-cols-md-3 g-4">
                                <AppCard v-for="card in cards"
                                    :extURL="card.Product_url" 
                                    :imgURL="card.Product_img_url" 
                                    :imgAlt="card.Product"
                                    :key="card.Internal_Product_Id"
                                >
                                    <template v-slot:title>
                                        {{ card.Product }}
                                    </template>
                                    <template v-slot:description>                                
                                        <div class="d-flex flex-column justify-content-between">
                                            <div class="mb-5">
                                                <div class="me-2">{{ card.Availability }}</div>
                                                <AppThumbs></AppThumbs>
                                            </div>
                                            <div>
                                                <div>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                                    focusable="false" role="presentation">
                                                        <path
                                                            d="M12 1c6.074 0 10.999 4.925 10.999 11 0 6.074-4.925 10.999-11 10.999-6.074 0-10.999-4.925-10.999-11C1 5.925 5.925 1 12 1zm0 18.173a7.174 7.174 0 10-.001-14.347 7.174 7.174 0 000 14.347zm0-3.653a3.52 3.52 0 110-7.04 3.52 3.52 0 010 7.04z"
                                                            fill-rule="evenodd" fill="rgb(204, 0, 0)">
                                                        </path>
                                                    </svg>
                                                    <span>{{card.Company}}</span>
                                                </div>
                                                <div>
                                                    <small>
                                                        {{card.Address_line1}}{{card.Address_line2}},                     
                                                        {{card.City}}, {{card.State}} {{card.Zip_code}}
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                </AppCard>
                            </div>
                        </div>
                    </section>
        
                    <section class="col-sm-12 mb-4" v-show="!show">
                        <div class="col">
                            <div class="row row-cols-1 row-cols-md-3 g-4">
                                <AppCard v-for="card in cards"
                                    :extURL="card.Product_url" 
                                    :imgURL="card.Product_img_url" 
                                    :imgAlt="card.Product"
                                    :key="card.Internal_Product_Id"
                                >
                                    <template v-slot:title>
                                        {{ card.Product }}
                                    </template>
                                    <template v-slot:description>                                
                                        <div class="d-flex flex-column justify-content-between">
                                            <div class="mb-5">
                                                <div class="me-2">{{ card.Availability }}</div>
                                                <AppThumbs></AppThumbs>
                                            </div>                                    <div>
                                                <div>
                                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                                        focusable="false" role="presentation">
                                                        <path
                                                            d="M12 1c6.074 0 10.999 4.925 10.999 11 0 6.074-4.925 10.999-11 10.999-6.074 0-10.999-4.925-10.999-11C1 5.925 5.925 1 12 1zm0 18.173a7.174 7.174 0 10-.001-14.347 7.174 7.174 0 000 14.347zm0-3.653a3.52 3.52 0 110-7.04 3.52 3.52 0 010 7.04z"
                                                            fill-rule="evenodd" fill="rgb(204, 0, 0)">
                                                        </path>
                                                    </svg>
                                                    <span>{{card.Company}}</span>
                                                </div>
                                                <small>
                                                    {{card.Address_line1}}{{card.Address_line2}},                     
                                                    {{card.City}}, {{card.State}} {{card.Zip_code}}
                                                </small>
                                            </div>
                                        </div>
                                    </template>
                                </AppCard>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <AppFooter />
    </main>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            show: true,
            cards: {
                type: Array,
                default: () => []
            },
            filteredCards: [],
            productFamilyDisplay: this.productFamilies,
            availabilityDisplay: this.availabilities,
            cityDisplay: this.cities,

            productFamily_checkbox: [],
            availability_checkbox: [],
            city_checkbox: [],

        }
    },  
    async fetch({ store }) {
        await store.dispatch('getStores')
    },
	computed: {
        ...mapState([
            'stores',
            'query',
            'email',
        ]),
        productFamilies() {
            let productFamilies = []
            this.stores.forEach( (store) => {
                store.Store_items.forEach( (product) => {
                    if(!productFamilies.includes(product.Product_family)) {
                        productFamilies.push(product.Product_family)
                    }
                })
            })
            return productFamilies.sort()
        },
        availabilities() {
            let availabilities = []
            this.stores.forEach( (store) => {
                store.Store_items.forEach( (product) => {
                        if(!availabilities.includes(product.Availability)) {
                            availabilities.push(product.Availability)
                    }
                })
            })
            return availabilities.sort()
        },
        cities() {
            let cities = []
                this.stores.forEach( (store) => {
                        if(!cities.includes(store.City)) {
                            cities.push(store.City)
                    }
                })
            return cities.sort()
        },
	},
    methods: {
        generateCards(query) {
            let cards = []
            
            this.stores.forEach( (store) => {                
                store.Store_items.forEach( (product) => {
                    // for each card added to the cards array...
                    cards.push({
                        "Company": store.Company,
                        "Zip_code": store.Zip_code,
                        "Address_line1": store.Address_line1,
                        "Address_line2": store.Address_line2,
                        "City": store.City,
                        "State": store.State,
                        "Country": store.Country,
                        "Longitude": store.Longitude,
                        "Latitude": store.Latitude,
                        "Store_name": store.Store_name,
                        "Store_id": store.Store_id,

                        "Internal_Product_Id": product._id,
                        "Product_id": product.Product_id,
                        "Product_family": product.Product_family,
                        "Product": product.Product,
                        "Price": product.Price,
                        "Availability": product.Availability,
                        "Quantity": product.Quantity,
                        "Product_url": product.Product_url,
                        "Product_img_url": product.Product_img_url, 
                        "Total_likes": product.Total_likes,
                        "Total_dislikes": product.Total_dislikes,
                        "Likes": this.findUser(product.Likes),
                        "Dislikes": this.findUser(product.Dislikes),
                    })
                })
            })

            // if query is not empty, get cards that contain query text 
            if(this.query) {
                cards = cards.filter( card => card.Product.includes(this.query))
            } 

            // sort the filtered cards alphabetically by product name (*.Product)
            cards = this.sortAlphabetically(cards)

            return cards
        },
        findUser(users){
            const user = users.find( user => this.email === user.email )
            let isFound = false
            if(user) {
                // user was found 
                isFound = true
            }
            return isFound 
        },

        filterCards(cards) {
            // let filteredCards = new Set()
            // let cardsByQuery = []
            let cardsByPf = []
            let cardsByAvailibility = []
            let cardsByCity = []
            
            // if(this.query) {
            //     // if query is not empty, get cards that contain query text 
            //     cardsByQuery = cards.filter( card => card.Product.includes(this.query))                
            // } 

            if(this.productFamily_checkbox.length > 0) {
                // for every card that has a product family ticked, include it for display
                cards.forEach( card => {
                    this.productFamily_checkbox.forEach( pf => {
                        if( card.Product_family.includes(pf)) {
                            cardsByPf.push(card)
                        }
                    })
                })

                cards = cardsByPf
            } 
            
            if(this.availability_checkbox.length > 0) {
                // for every card that has an availability ticked, include it for display
                cards.forEach( card => {
                    this.availability_checkbox.forEach( a => {
                        if (!a) return 
                        if( card.Availability.includes(a)) {
                            cardsByAvailibility.push(card)
                        }
                    })
                })

                cards = cardsByAvailibility
            } 

            if(this.city_checkbox.length > 0) {
                // for every card that has a city ticked, include it for display
                cards.forEach( card => {
                    this.city_checkbox.forEach( c => {
                        if( card.City.includes(c)) {
                            cardsByCity.push(card)
                        }
                    })
                })

                cards = cardsByCity
            }

            return cards
        },

        updateAccordionOptions(cards) {
            this.productFamilyDisplay = []
            this.availabilityDisplay = []
            this.cityDisplay = []
            
            cards.forEach( card => {
                if(!this.productFamilyDisplay.includes(card.Product_family)) {
                    this.productFamilyDisplay.push(card.Product_family)
                }
                if(!this.availabilityDisplay.includes(card.Availability)) {
                    this.availabilityDisplay.push(card.Availability)
                }
                if(!this.cityDisplay.includes(card.City)) {
                    this.cityDisplay.push(card.City)
                }
            })
        },
        
        sortAlphabetically(cards) {
            cards.sort( (a,b) => {
                if ( a.Product < b.Product ){
                    return -1;
                }
                if ( a.Product > b.Product ){
                    return 1;
                }
                return 0;
            })

            return cards
        },
        sortByAddress(cards) {
            cards.sort( (a,b) => {
                if ( a.Address_line1 < b.Address_line1 ){
                    return -1;
                }
                if ( a.Address_line1 > b.Address_line1 ){
                    return 1;
                }
                return 0;
            })

            return cards
        },
        sortCards(option, cards) {
            switch (option) {
                case 1: 
                    this.cards = this.sortAlphabetically(cards)
                    break
                case 2: 
                    this.cards = this.sortByAddress(cards)
                    break
            }
        },
    },
    watch: {
        query: {
            // Refer eager loading
            // https://vuejs.org/guide/essentials/watchers.html#eager-watchers:~:text=Eager%20Watchers-,%23,-watch%20is%20lazy
            handler(newQuery) {
                this.cards = this.generateCards(newQuery)
                this.updateAccordionOptions(this.cards)
                // this.unfilteredCards = this.cards
            },
            immediate: true,
        },
        productFamily_checkbox: {
            handler(newPf) {
                this.cards = this.generateCards(this.query)
                this.cards = this.filterCards(this.cards)
                // this.updateAccordionOptions(this.cards)
            },
        },
        availability_checkbox: {
            handler(newAvailability) {
                this.cards = this.generateCards(this.query)
                this.cards = this.filterCards(this.cards)
                // this.updateAccordionOptions(this.cards)
            },
        },
        city_checkbox: {
            handler(newCity) {
                this.cards = this.generateCards(this.query)
                this.cards = this.filterCards(this.cards)
                // this.updateAccordionOptions(this.cards)
            },
        },
    },
    mounted() {
        ////////////////////////////
        // Card Component Display //
        ////////////////////////////

        /* Refer Cards Component from https://inclusive-components.design/cards/ */
        /* This is for the AppCard component */

        // const cards = document.querySelectorAll('.card');  
        // Array.prototype.forEach.call(cards, card => {  
        //     let down, up, link = card.querySelector('h5 a');
        //     card.style.cursor = 'pointer';  
        //     card.onmousedown = () => down = +new Date();
        //     card.onmouseup = () => {
        //         up = +new Date();
        //         if ((up - down) < 200) {
        //             link.click();
        //         }
        //     }
        // });
    },
}
</script>

<style lang="scss" scoped>
.word-wrap-block {
    display: block;
    word-wrap: break-word;
}
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