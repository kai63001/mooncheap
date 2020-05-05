<template>
  <div>
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
const Navbar = () => import('~/components/navbar')

export default {
  components: {
    Navbar
  }
}
</script>

<style>
@font-face {
  font-family: "romeo";
  src: url("~assets/fonts/main.otf") format("opentype");
  font-display: swap;
}

body {
  font-family: "romeo" !important;
  background: #27282e;
  color: white;
}

.color-white {
  color: white;
}

.color-main {
  color: #d90429 !important;
}

.color-green {
  color: #06d6a0 !important;
}

.overlay-dark {
  background-color: rgba(black, 0.4) !important;
}

.color-purple {
  color: #8338ec !important;
}

.bg-main {
  background-color: #d90429 !important;
}

.page-item.active .page-link {
  background-color: #d90429 !important;
  border-color: #d90429 !important;
}

.border-main {
  border-color: #ef476f !important;
}

.btn-main-hover:hover {
  color: white !important;
  background-color: #ef476f !important;
}
.card-game {
  background: #000103;
}
.border-card {
  border-top: 4px solid #d90429 !important;
}
.border-card-2 {
  border-top: 4px solid #8338ec !important;
}
.image-rounded {
  border-radius: .25rem .25rem 0 0!important;
}
.one-line{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.img-game{
  height: 160px !important;
}
@media only screen and (max-width: 600px) {
 .img-game{
    height: 100px !important;
  }
}
</style>
