<template>
    <div>
        <div class="d-flex">
            <form @submit.prevent="toggleLike()">
                <div @mouseover="showBubble = true" @mouseleave="showBubble = false">
                    <button type="button" class="small-button pressable-button" @click="toggleLike()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                            <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"></path>
                        </svg>
                        <span>{{ total_likes }}</span> 
                    </button>
                </div>
            </form>
            
            <form @submit.prevent="toggleDislike()">
                <div @mouseover="showBubble = true" @mouseleave="showBubble = false">
                    <button type="button" class="small-button pressable-button" @click="toggleDislike()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                            <path d="M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856 0 .289-.036.586-.113.856-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a9.877 9.877 0 0 1-.443-.05 9.364 9.364 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964l-.261.065zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a8.912 8.912 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581 0-.211-.027-.414-.075-.581-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.224 2.224 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.866.866 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1z"/>
                        </svg>
                        <span>{{ total_dislikes }}</span>
                    </button>
                </div>
            </form>

            <div class="bubble small" v-show="showBubble === true">
                Inventory accurate?
            </div>
        </div>

        <div class="toast-container position-fixed bottom-0 start-0 p-3">
            <div id="tokenToast" class="toast bg-danger text-white" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-body d-flex align-items-center">
                    <i class="fas fa-exclamation-circle me-2"></i>
                    <span class="fw-semibold">
                        Please login first before voting availability.
                    </span>
                </div>
            </div>
        </div>

        <div class="toast-container position-fixed bottom-0 start-0 p-3">
            <div v-if="failedVoteErrorMessage !== ''" id="failedVote" class="toast bg-danger text-white" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-body d-flex align-items-center">
                    <i class="fas fa-exclamation-circle me-2"></i>
                    <span class="fw-semibold">
                        {{ failedVoteErrorMessage }}
                    </span>
                </div>
            </div>
        </div>

        <div class="toast-container position-fixed bottom-0 start-0 p-3">
            <div id="successfulVote" class="toast bg-success text-white" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="toast-body toast-body-success d-flex align-items-center">
                    <i class="fas fa-check-circle me-2"></i>
                    <span class="fw-semibold">
                        Your feedback was submitted successfully!
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'AppThumbs',
    props: {
        total_likes: {
            type: Number,
            default: 0,
        },
        total_dislikes: {
            type: Number,
            default: 0,
        },
        likesArray: {
            type: Array,
            default: () => [], 
        },
        dislikesArray: {
            type: Array,
            default: () => [], 
        },
        store_id: {
            type: String,
            required: true,
        },
        product_id: {
            type: String,
            required: true,
        },
    },
    computed: {
        token() {
            return this.$store.state.token; // Access token from Vuex store
        },
        email() {
            return this.$store.state.email;
        }
    },
    data() {
        return {
            showBubble: false,
            like: 0,
            dislike: 0,
            failedVoteErrorMessage: "",
        };
    },
    mounted() {
        // Check if the email is found in the likesArray
        if (this.likesArray.includes(this.email)) {
            this.like = 1; // Set like to 1 if the email is found
        } else {
            this.like = 0; // Set like to 0 if the email is not found
        }

        // Check if the email is found in the dislikesArray
        if (this.dislikesArray.includes(this.email)) {
            this.dislike = 1; // Set dislike to 1 if the email is found
        } else {
            this.dislike = 0; // Set dislike to 0 if the email is not found
        }
    },
    methods: {
        // TODO:
        // Clean up the URL to product API.

        /*
            Logic for Toggling:

            But what happens if that was the user's first interaction?
            We should only increase the dislikes (or likes) but NOT decrease the other one.
            Pass both Like and Dislike together whether the user selects like or dislike.
            
            Route === likes:
                If Like = 1 and Dislike = 0, backend only increase Total_likes.   
                If Like = 1 and Dislike = 1, backend increase Total_likes and decrease Total_dislikes.
                If Like = 0 and Dislike = 1, backend throws error.
            
            Route === dislikes:
                If Dislike = 1 and Like = 0, backend only increase Total_dislikes.   
                If Dislike = 1 and Like = 1, backend increase Total_dislikes and decrease Total_likes.
                If Dislike = 0 and Like = 1, backend throws error.
        */

        toggleLike() {            
            if(this.token !== null) {
                this.like = this.like === 1 ? 0 : 1;
                this.submitVoteLike();
            } else {
                this.showLoginErrorToast();
            }
        },

        async submitVoteLike() {
            const vote = {
                store_id: this.store_id,
                product_id: this.product_id, 
                email: this.email, 
                like: this.like, 
                dislike: this.dislike 
            };

            try {
                const response = await this.postVoteLike(vote);

                if (response.message == 'SUCCESS') {
                    this.showSuccessfulVoteToast();

                    // Emit an event to notify the parent component
                    // console.log('Emitting vote-submitted event from AppThumbs');
                    // this.$emit('vote-submitted'); 
                    
                    setTimeout( async () => {
                        console.log('Attempting to force re-render of parent component');
                        // Force a re-render of the component
                        this.$router.go(0); // Reloads the current page
                    }, 3000); // 3000 milliseconds = 3 seconds
                } else {
                    this.showFailedVoteToast("Vote submission failed to update database.");
                }
            } catch (err) { // Use 'err' instead of 'error'
                console.log("submitVote() error: " + err.message); // Use 'err' here
                this.showFailedVoteToast(err.message); // Use 'err' here
            }
        },

        async postVoteLike(vote) {
            const token = this.$store.state.token; // || localStorage.getItem('authToken'); // Retrieve token
    
            try {
                // const res = await this.$axios.post(`${this.$config.baseURL}/product/like`, {
                const res = await this.$axios.post(
                    this.$config.baseURL + `/product/like`,
                    // `http://helpmybabies.com:5000/api/v1/product/like`,
                    // `http://localhost:5000/api/v1/product/like`,
                    {
                        store_id: vote.store_id,
                        product_id: vote.product_id,
                        email: vote.email,
                        like: vote.like,
                        dislike: vote.dislike,
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        },
                        // withCredentials: true  
                    }
                );
        
                const { status, data } = res;
        
                if (status === 200) {
                    return data; // Return the data for further processing if needed
                } else {
                    console.error(`Error: Received status code ${status}`);
                    throw new Error(`Unexpected status code when submitting vote: ${status}`);
                }
            } catch (error) {
                console.error("Network error when submitting vote:", error.message);
                throw error;
            }
        },

        //////////////////////////////////////////////////////////////

        toggleDislike() {
            if(this.token !== null) {
                this.dislike = this.dislike === 1 ? 0 : 1;
                this.submitVoteDislike();
            } else {
                this.showLoginErrorToast();
            }
        },

        async submitVoteDislike() {
            const vote = {
                store_id: this.store_id,
                product_id: this.product_id, 
                email: this.email, 
                like: this.like, 
                dislike: this.dislike 
            };

            try {
                const response = await this.postVoteDislike(vote);

                if(response.message == 'SUCCESS') {
                    this.showSuccessfulVoteToast();

                    // console.log('Emitting vote-submitted event from AppThumbs');
                    // this.$emit('vote-submitted'); 

                    setTimeout( async () => {
                        console.log('Attempting to force re-render of parent component');
                        // Force a re-render of the component
                        this.$router.go(0); // Reloads the current page

                    }, 3000); // 3000 milliseconds = 3 seconds
                } else {
                    this.showFailedVoteToast("Vote submission failed to update database.");
                    this.showFailedVoteToast(error.message);
                }
            } catch (err) {
                console.log("submitVote() error: " + err.message)
                this.showFailedVoteToast(err.message);
            }
        },

        async postVoteDislike(vote) {
            const token = this.$store.state.token; // || localStorage.getItem('authToken'); // Retrieve token

            try {
                // const res = await this.$axios.post(`${process.env.API_BASE_URL}/product/dislike`, {
                // const res = await this.$axios.post(`${this.$config.baseURL}/product/dislike`, {
                const res = await this.$axios.post(
                    this.$config.baseURL + `/product/dislike`,
                    // `http://helpmybabies.com:5000/api/v1/product/dislike`,
                    // `http://localhost:5000/api/v1/product/dislike`,
                    {
                        store_id: vote.store_id,
                        product_id: vote.product_id,
                        email: vote.email,
                        like: vote.like,
                        dislike: vote.dislike,
                    },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        },
                        // withCredentials: true  
                    }
                );
        
                const { status, data } = res;
        
                if (status === 200) {
                    return data; // Return the data for further processing if needed
                } else {
                    console.error(`Error: Received status code ${status}`);
                    throw new Error(`Unexpected status code when submitting vote: ${status}`);
                }
            } catch (error) {
                console.error("Network error when submitting vote:", error.message);
                throw error;
            }
        },


        //////////////////////////////////////////////////////////////

        async showLoginErrorToast() {
            if (process.client) { 
                const bootstrap = await import('bootstrap'); 
                const toastEl = document.getElementById('tokenToast');
                const toast = new bootstrap.Toast(toastEl);
                toast.show(); 
            }
        },

        async showSuccessfulVoteToast() {
            if (process.client) { 
                const bootstrap = await import('bootstrap'); 
                const toastEl = document.getElementById('successfulVote');
                const toast = new bootstrap.Toast(toastEl);
                toast.show(); 
            }
        },

        async showFailedVoteToast(error) {
            this.failedVoteErrorMessage = error;

            // console.log("showFailedVoteToast() error: " + error)

            if (process.client) {
                const bootstrap = await import('bootstrap'); 
                const toastEl = document.getElementById('failedVote');
                const toast = new bootstrap.Toast(toastEl);
                toast.show(); 

                setTimeout(() => {
                    this.failedVoteErrorMessage = ""; 
                }, 3000);             
            }
        }
        
    },
    emits: ['vote-submitted'],
};
</script>
  
<style>
.small-button {
    border: 0;
    background-color: white;
    min-width: 3rem;
    padding-left: 0;
}
.small-button:hover {
    color: #EC8AB6;
}

.pressable-button {
    position: relative;
    cursor: pointer;
    transition: transform 0.1s ease, box-shadow 0.1s ease;
}
.pressable-button svg {
    transition: transform 0.1s ease, filter 0.1s ease;
    filter: drop-shadow(0 4px 4px rgba(0, 0, 0, 0.2));
}
.pressable-button:active svg {
    transform: translateY(2px);
    filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.2));
}

.bubble {
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    background: lightgrey;
    min-width: 10rem;
    border-radius: 0.5rem;
    animation: fadeIn 1.5s;
}
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
.toast {
    color: white; 
}
.toast-body {
    background-color: #dc3545;
    border-radius: 0.5rem;
    white-space: normal; /* Allow text to wrap */
}
.toast-body-success {
    background-color: #28a745;
}
</style>
  
