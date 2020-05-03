<template>
  <div class="container">
    <br>
    <h1 class="text-center pb-1">
      MOONCHEAP - GAMECHEAP
    </h1>
    <div class="row">
      <div class="col-md-6 pr-md-0">
        <div class="card-game rounded shadow-sm">
          <img
            v-lazy-load
            class="image-rounded"
            height="290"
            data-src="https://www.online-station.net/pic/X2NvbnRlbnQvMjAxOS8wNzE3LzEzOTg1Mi90aHVtYm5haWwvV2F0Y2hEb2dzXzEyMDBfNjI4LmpwZyZ3PTExNDAmaD01OTc"
            width="100%"
            alt=""
          >
          <div class="p-3 border-card">
            <h4>
              Watch Dogs: Legion
              <br>
            </h4>
            $99.07
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-6 pr-md-0">
            <div class="card-game rounded shadow-sm">
              <img
                v-lazy-load
                class="image-rounded"
                data-src="https://gamernia.com/wp-content/uploads/2020/01/RE3-Remake-Poster-e1578635479120.png"
                width="100%"
                height="140px"
                alt=""
              >
              <div class="p-2 border-card">
                Resident evil 3 remake
              </div>
            </div>
          </div>
          <div class="col-md-6 pr-md-0">
            <div class="card-game rounded shadow-sm">
              <img
                v-lazy-load
                class="image-rounded"
                data-src="https://www.blognone.com/sites/default/files/externals/8102fcf7175870a68c41112e10bd65b8.jpg"
                height="140px"
                width="100%"
                alt=""
              >
              <div class="p-2 border-card">
                Red Dead Redemption 2
              </div>
            </div>
          </div>
          <div class="col-md-6 pr-md-0 mt-3">
            <div class="card-game rounded shadow-sm">
              <img
                v-lazy-load
                class="image-rounded"
                data-src="https://coverfiles.alphacoders.com/134/134412.jpg"
                height="140px"
                width="100%"
                alt=""
              >
              <div class="p-2 border-card">
                Assassin’s Creed Valhalla
              </div>
            </div>
          </div>
          <div class="col-md-6 pr-md-0 mt-3">
            <div class="card-game rounded shadow-sm">
              <img
                v-lazy-load
                class="image-rounded"
                data-src="https://b2.crackwatch.com/file/crackwatch-temp/11l9yeqcj.jpg"
                height="140px"
                width="100%"
                alt=""
              >
              <div class="p-2 border-card">
                Population Zero
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <div class="headgame-top pr-0">
      <h2 class="font-weight-bold">
        <strong>Top Scene Groups</strong>
      </h2>
    </div>
    <div class="row mt-3">
      <div class="col-md-6">
        <div class="card-game  rounded shadow-sm">
          <div class="row">
            <div class="col-md-3">
              <img
                class="img-rounded-left groud-borrder"
                width="100%"
                height="110px"
                src="https://www.kindpng.com/picc/m/212-2123651_tiger-srd-mascot-logo-tigers-logo-hd-png.png"
                alt=""
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <div class="headgame pr-0">
      <h2>Games</h2>
    </div>
    <div class="row">
      <div
        v-for="games in gameMain.slice(0, 8)"
        :key="games.name"
        class="col-md-3 pr-md-0 mt-3"
      >
        <nuxt-link
          :to="'/game/' + games.slug"
          :title="'Detail game ' + games.name"
          class="text-decoration-none color-white"
        >
          <div class="card-game rounded shadow-sm">
            <img
              v-lazy-load
              class="image-rounded"
              :data-src="games.background_image"
              height="160px"
              width="100%"
              :alt="'Detail or spec and price of game ' + games.name"
            >
            <div class="p-2 border-card-2 color-white">
              <div class="one-line">
                {{ games.name }}
              </div>
              <span
                class="resles"
              ><i class="fas fa-clock" /> {{ games.released }}</span>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
    <br><br>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  name: 'Index',
  data () {
    return {
      gameMain: []
    }
  },
  async created (req) {
    try {
      const res = await this.$http.get('https://api.rawg.io/api/games')
      this.gameMain = res.data.results
    } catch (error) {}
  }
  // mounted () {
  //   axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
  //   const config = {
  //     headers: { 'Access-Control-Allow-Origin': '*' }
  //   }
  //   axios.get('https://www.cheapshark.com/api/1.0/deals?sortBy=Release&pageSize=60&pageNumber=0', config)
  //     .then(function (response) {
  //       this.unreleseGame = response.data
  //       console.log(response.data)
  //     })
  // }
}
</script>

<style scrope>
.resles {
  color: #8338ec;
  font-size: 13px;
}
.headgame {
  border-bottom: 2px solid #8338ec;
  width: 101%;
}
.img-rounded-left {
  border-radius: 0.25rem 0 0 0.25rem !important;
}
.groud-borrder{
  border-right: 4px solid #06d6a0;
}
.headgame-top{
  border-bottom: 2px solid #06d6a0;
  width: 101%;
}
</style>
