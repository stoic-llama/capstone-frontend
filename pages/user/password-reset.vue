<template>
    <div class="container d-flex justify-content-center align-items-center">
        <form class="my-5" @submit.prevent="submitPassword(inputPassword)">
            <h2 class="fw-light">Reset your account password.</h2>
            <div class="mb-3">
                <label for="OTP" class="form-label">Code</label>
                <input type="password" class="form-control" aria-describedby="OTPHelp" id="OTP" v-model="OTP">
                <div id="OTPHelp" class="form-text">Enter one time passcode that was sent to your email.</div>
            </div>
            <div class="mb-3">
                <label for="inputPassword" class="form-label">New Password</label>
                <input type="password" class="form-control" id="inputPassword" v-model="inputPassword">
                <div v-show="!validatePassword(inputPassword, inputConfirmPassword)" class="form-text">Please enter password that matches.</div>
            </div>
            <div class="mb-3">
                <label for="inputConfirmPassword" class="form-label">Confirm New Password</label>
                <input type="password" class="form-control" id="inputConfirmPassword" v-model="inputConfirmPassword">
                <div v-show="!validatePassword(inputPassword, inputConfirmPassword)" class="form-text">Please enter password that matches.</div>
            </div>

            <button :disabled="initialState !== true" type="submit" class="btn btn-dark round" @click="submitPassword(inputPassword)">Reset Password</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            OTP: '',
            inputPassword: '',
            inputConfirmPassword: '',
            initialState: false,
        }
    },
    methods: {
        submitPassword(password) {
            this.$store.dispatch('actionUpdatePassword', password).then(() => {
                this.$router.push('/')
                // console.log("finished dispatch")
            })
            // this.$store.commit('updatePassword', password)
        },
        validatePassword(inputPassword, inputConfirmPassword) {
            if(inputPassword === inputConfirmPassword && inputPassword.length > 0 && inputConfirmPassword.length > 0) {
                this.initialState = true // show button
                return true // show warning text
            }
            this.initialState = false // hide button
            return false // hide warning text
        },
        validateOTP(inputValue, dbValue) {
            // need to call database and compare with what's entered
            // stub for now --> default return true
            return true
        }
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