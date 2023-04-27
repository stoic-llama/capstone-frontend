<template>
    <nav class="navbar bg-dark">
        <div class="container-fluid">
            <NuxtLink class="d-flex align-items-center navbar-brand" id="logo" to="/">
                <img src="~/static/logo_transparent_v3.png" alt="Logo" width="60" height="40">
                <span class="pink ps-2 mobile">Infant Formula Finder</span>
            </NuxtLink>
            <div class="d-flex align-items-center">
                <div>
                    <span class="greeting">{{ firstName === '' ? 'Hello Guest' : `Hello ${firstName}`}} </span> 
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body off-canvas-sm">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                    <li class="nav-item">
                        <NuxtLink class="nav-link active" aria-current="page" to="/">Home</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/about">About</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link" to="/test">Test</NuxtLink>
                    </li>
                    <li class="nav-item dropdown">
                        <NuxtLink class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        My Account
                        </NuxtLink>
                        <ul class="dropdown-menu">
                            <li><NuxtLink class="dropdown-item" to="/user/lookup">Edit My Profile</NuxtLink></li>
    
                            <li><NuxtLink class="dropdown-item" to="/user/signup">Register New Account</NuxtLink></li>
    
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><NuxtLink class="dropdown-item" to="#">Log Out</NuxtLink></li>
                        </ul>
                    </li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
    computed: {
        ...mapState([
            'firstName',
        ])
    },
}

</script>

<style lang="scss" scoped>
.pink {
    color: #EC8AB6;
    font-family: Permanent Marker, sans-serif;
    font-weight: 500;
}
.greeting {
    color: #ffbe0b;
    font-family: sans-serif;
    font-weight: 500;
}
.navbar {
    // min-width: 400px;
    --bs-navbar-toggler-focus-width: 0;
}
.navbar-toggler:hover {
    color: #EC8AB6;
    --bs-navbar-toggler-focus-width: 0.25rem;
}
.navbar-toggler-icon {
    background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='%23EC8AB6'%20stroke-linecap='round'%20stroke-miterlimit='10'%20stroke-width='2'%20d='M4%207h22M4%2015h22M4%2023h22'/></svg>")
}
.offcanvas {
    --bs-offcanvas-width: 250px;
}
@media screen and (max-width: 400px) {
    .mobile {
        display: none;
    }
}
</style>