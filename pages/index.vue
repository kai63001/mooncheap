<template>
  <div class="container">
    <br>
    <h1 class="text-center">
      MOONCHEAP - GAMECHEAP
    </h1>
    <div class="row">
      <div class="col-md-6 pr-1 pl-1 mt-3">
        <div class="card-game rounded shadow-sm">
          <img
            v-lazy-load
            class="image-rounded main-image"
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
          <div class="col-md-6 col-6 mt-3 pr-1 pl-1">
            <div class="card-game rounded shadow-sm">
              <img
                v-lazy-load
                class="image-rounded img-responsive sec-image"
                data-src="https://gamernia.com/wp-content/uploads/2020/01/RE3-Remake-Poster-e1578635479120.png"
                width="100%"
                alt=""
              >
              <div class="p-2 border-card one-line">
                Resident evil 3 remake
              </div>
            </div>
          </div>
          <div class="col-md-6 mt-3 col-6 pr-1 pl-1">
            <div class="card-game rounded shadow-sm ">
              <img
                v-lazy-load
                class="image-rounded sec-image"
                data-src="https://www.blognone.com/sites/default/files/externals/8102fcf7175870a68c41112e10bd65b8.jpg"
                width="100%"
                alt=""
              >
              <div class="p-2 border-card one-line">
                Red Dead Redemption 2
              </div>
            </div>
          </div>
          <div class="col-md-6 col-6 pr-1 pl-1 mt-3">
            <div class="card-game rounded shadow-sm">
              <img
                v-lazy-load
                class="image-rounded sec-image"
                data-src="https://coverfiles.alphacoders.com/134/134412.jpg"
                width="100%"
                alt=""
              >
              <div class="p-2 border-card one-line">
                Assassin’s Creed Valhalla
              </div>
            </div>
          </div>
          <div class="col-md-6 col-6 pr-1 pl-1 mt-3">
            <div class="card-game rounded shadow-sm">
              <img
                v-lazy-load
                class="image-rounded sec-image"
                data-src="https://b2.crackwatch.com/file/crackwatch-temp/11l9yeqcj.jpg"
                width="100%"
                alt=""
              >
              <div class="p-2 border-card one-line">
                Population Zero
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <div class="headgame-top pr-1 pl-1">
      <h2 class="font-weight-bold float-left color-green">
        <strong>TOP SCENE GROUPS</strong>
      </h2>
      <div class="float-right">
        <div class="btn btn-outline-green">
          ALL GROUPS
        </div>
      </div>
      <div class="clearfix" />
    </div>
    <div class="row">
      <div
        v-for="(groups, index) in 4"
        :key="index"
        class="col-md-6 pr-1 pl-1 mt-3"
      >
        <div class="card-game rounded shadow-sm">
          <div class="row">
            <div class="col-md-3 col-4">
              <img
                v-lazy-load
                class="img-rounded-left groud-borrder"
                width="100%"
                height="110px"
                data-src="https://www.kindpng.com/picc/m/212-2123651_tiger-srd-mascot-logo-tigers-logo-hd-png.png"
                alt=""
              >
            </div>
            <div class="col-md-7 col-5 pl-0 pt-md-1">
              <h4 class="one-line">
                Tiger Gaming
              </h4>
              <span class="color-green">
                168 Members
              </span>
              <br>
              <div class="overflow-auto tag-game">
                <span class="badge badge-main">Watch Dogs: Legion</span>
                <span class="badge badge-main">Assassin’s Creed Valhalla</span>
              </div>
            </div>
            <div class="col-md-2 col-3">
              <div class="row h-100 w-100">
                <div class="col-sm-12 mx-auto text-center my-auto">
                  108 Posts
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <div class="headgame pr-1 pl-1">
      <h2 class="font-weight-bold float-left color-purple">
        <strong>GAMES <span v-if="gameDeal.length == 0">
          <span class="spinner-grow color-purple" />
        </span></strong>
      </h2>
      <div class="float-right">
        <div class="btn btn-outline-purple">
          ALL GAMES
        </div>
      </div>
      <div class="clearfix" />
    </div>
    <div class="row">
      <div
        v-for="games in gameMain.slice(0, 8)"
        :key="games.name"
        class="col-md-3 col-6 pr-1 pl-1 pr-1 pl-1 mt-3"
      >
        <nuxt-link
          :to="'/game/' + games.name.replace(/[^a-zA-Z0-9 ]/g, '')
            .replace(/ /g, '-')
            .toLowerCase() + '/'"
          :title="'Detail game ' + games.name"
          class="text-decoration-none color-white"
        >
          <div class="card-game rounded shadow-sm">
            <img
              v-lazy-load
              class="image-rounded img-responsive img-game"
              :data-src="games.background_image"
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
    <br>
    <div class="headgame-main pr-0 pl-0">
      <h2 class="font-weight-bold float-left color-main">
        <strong>DEAL GAMES <span v-if="gameDeal.length == 0">
          <span class="spinner-grow text-danger" />
        </span></strong>
      </h2>
      <div class="float-right">
        <div class="btn btn-outline-main">
          ALL DEALS
        </div>
      </div>
      <div class="clearfix" />
    </div>
    <div class="row">
      <div
        v-for="(gamesDeal, index) in gameDeal"
        :key="index"
        class="col-md-12 pr-1 pl-1 mt-3"
      >
        <nuxt-link
          :to="
            '/game/' +
              gamesDeal.title
                .replace(/[^a-zA-Z0-9 ]/g, '')
                .replace(/ /g, '-')
                .toLowerCase() +
              '/'
          "
          :title="'Detail game ' + gamesDeal.title"
          class="text-decoration-none color-white"
        >
          <div class="card-game color-white rounded shadow-sm">
            <div class="row">
              <div class="col-md-2 col-4 pr-0 groud-borrder-main">
                <img
                  v-if="gamesDeal.thumb.indexOf('capsule_sm_120') >= 0"
                  v-lazy-load
                  class="img-rounded-left"
                  width="100%"
                  height="75px"
                  :data-src="
                    gamesDeal.thumb.replace(/capsule_sm_120/g, 'header')
                  "
                  alt=""
                >
                <img
                  v-else
                  v-lazy-load
                  class="text-center mx-auto d-block "
                  height="75px"
                  :data-src="gamesDeal.thumb"
                  alt=""
                >
              </div>
              <div class="col-md-3 col-8  mt-2 ">
                <div class="one-line">
                  {{ gamesDeal.title }}
                </div>
                <div class="pt-2 pr-1 pl-1 color-main">
                  UP {{ $moment(gamesDeal.lastChange).toUpperCase() }} · DR
                  {{ gamesDeal.dealRating }}
                </div>
              </div>
              <div class="col-md-1 pr-1 pl-1 d-none d-lg-block pl-0">
                <div class="row h-100 w-100">
                  <div class="col-sm-12 mx-auto text-center my-auto">
                    <div v-if="gamesDeal.savings == 0">
                      <div class="badge bg-main">
                        - {{ parseInt(gamesDeal.savings) }}%
                      </div>
                    </div>
                    <div v-else>
                      <div class="badge badge-green">
                        - {{ parseInt(gamesDeal.savings) }}%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-2 d-none d-lg-block">
                <div class="row h-100 w-100">
                  <div class="col-sm-12 mx-auto text-center my-auto">
                    <div v-if="gamesDeal.savings == 0">
                      <div class="color-main">
                        {{ gamesDeal.normalPrice }}
                      </div>
                    </div>
                    <div v-else>
                      <S class="cutprice">${{ gamesDeal.normalPrice }}</S>
                      <br>
                      <B class="color-green">${{ gamesDeal.salePrice }}</B>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-2 pr-0 pl-0 d-none d-lg-block">
                <div class="row h-100 w-100">
                  <div class="col-sm-12 mx-auto text-center my-auto">
                    <img v-lazy-load height="40px" :data-src="require('~/assets/images/'+(parseInt(gamesDeal.storeID) - 1).toString()+'.png')" width="100%" alt="">
                  </div>
                </div>
              </div>
              <div class="col-md-2 pr-0 pl-0 d-none d-lg-block">
                <div class="row h-100 w-100">
                  <div class="col-sm-12 mx-auto text-center my-auto">
                    <nuxt-link to="das" class="btn btn-outline-main">
                      BUY NOW
                    </nuxt-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
    <client-only>
      <infinite-loading @infinite="loadMoreTours" />
    </client-only>

    <br><br>
  </div>
</template>

<script>
const api = 'https://www.cheapshark.com/api/1.0/deals?&pageSize=60&pageNumber='

export default {
  name: 'Index',
  data () {
    return {
      gameMain: [],
      gameDeal: [],
      page: 0
    }
  },
  async created () {
    try {
      const res = await this.$http.get(
        'https://api.rawg.io/api/games?page_size=8'
      )
      this.gameMain = res.data.results

      const deal = await this.$http.get(
        api + '0'
      )
      this.gameDeal = deal.data
    } catch (error) {}
  },
  methods: {
    async loadMoreTours ($state) {
      await this.$axios.$get(api + this.page).then((res) => {
        this.gameDeal.push.apply(this.gameDeal, res)
        if (res.length > 0) {
          this.page += 1
          $state.loaded()
        } else {
          $state.complete()
        }
      }).catch((e) => { console.log(e) })
    }

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
  width: 102%;
  margin-left: -1%;
}
.img-rounded-left {
  border-radius: 0.25rem 0 0 0.25rem !important;
}
.groud-borrder {
  border-right: 4px solid #06d6a0;
}
.headgame-top {
  border-bottom: 2px solid #06d6a0;
  width: 102%;
  margin-left: -1%;
}
.badge-main {
  background: #8338ec;
}
.tag-game {
  height: 24px;
  white-space: nowrap;
}
.btn-outline-green {
  border: 2px solid #06d6a0;
  color: #06d6a0;
}
.btn-outline-green:hover {
  border: 2px solid #06d6a0;
  color: white;
  background: #06d6a0;
}
.badge-green {
  background: #06d6a0;
  color: white;
}
.btn-outline-purple {
  border: 2px solid #8338ec;
  color: #8338ec;
}
.btn-outline-purple:hover {
  border: 2px solid #8338ec;
  color: white;
  background: #8338ec;
}
.btn-outline-main {
  border: 2px solid #d90429;
  color: #d90429;
}
.btn-outline-main:hover {
  border: 2px solid #d90429;
  color: white;
  background: #d90429;
}
.headgame-main {
  border-bottom: 2px solid #d90429;
  width: 102%;
  margin-left: -1%;
}
.groud-borrder-main {
  border-right: 4px solid #d90429;
}
.cutprice {
  margin-left: 50%;
  font-size: 12px;
}
.main-image {
  height: 300px !important;
}
.sec-image{
  height: 146px !important;
}

@media only screen and (max-width: 600px) {
  .main-image {
    height: 200px !important;
  }
  .sec-image{
    height: 100px !important;
  }
}
</style>
