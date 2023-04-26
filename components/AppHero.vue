<template>
    <div class="greypicture">
        <section class="masthead" role="img" aria-label="Image Description">
            <h1>Find Infant Formula</h1>
            <AppSearch />
        </section>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
// Refer https://css-tricks.com/apply-a-filter-to-a-background-image/ for grey background
// Refer https://hero-generator.netlify.app for generating boilerplate
.greypicture {
  position: relative;
}
.greypicture::before {
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 100%; 
  height: 100vh;
  background-image: url(~/static/Formula_shortage.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.5;
  filter: grayscale(100%);
}
.masthead {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100vh; /* if you don't want it to take up the full screen, reduce this number */
  overflow: hidden;
  background-size: cover !important;
  background: radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.95) 100%), no-repeat center center scroll;
  // background: radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 37%, rgba(0,0,0,0.85) 100%), url(~/static/Formula_shortage.jpg) no-repeat center center scroll;
}
h1 {
  font-style: normal;
  font-weight: bold;
  color: #ffbe0b;
  font-size: 7vmin;
  letter-spacing: 0.03em;
  line-height: 1;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 40px;
}           
</style>