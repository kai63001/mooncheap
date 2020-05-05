<template>
  <div class="container">
    <br>
    <h1>{{ gamedata.name_original }}</h1>
    <div class="row">
      <div class="col-md-8">
        <iframe
          v-if="gamedata.clip !== null"
          v-lazy-load
          width="100%"
          height="400"
          :data-src="'https://www.youtube.com/embed/'+gamedata.clip.video"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <div class="col-md-4">
        das
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Gamedetail',
  async asyncData ({ params }) {
    // eslint-disable-next-line camelcase
    const frist_game = await axios.get(
      'https://api.rawg.io/api/games?search=' + params.name.replace(/-/g, '+') + '&page_size=1'
    )
    const game = await axios.get(
      'https://api.rawg.io/api/games/' + frist_game.data.results[0].id
    )
    // console.log(game.data.results)
    return {
      gamedata: game.data
    }
  },
  computed: {
    hasMyObject () {
      return Object.keys(this.gamedata).length
    }
  },
  created () {

  }
}
</script>
