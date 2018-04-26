new Vue({
  el: '#app',
  data: {
    started: false,
    fullHealth: 100,
    player: {
      playerHealth: 100
    },
    monster: {
      monsterHealth: 100
    }
  },
  methods: {
    startGame: function() {
      this.started = !this.started
      this.player.width = this.fullHealth + '%'
      this.monster.width = this.fullHealth + '%'
    },
    endGame: function() {
      this.started = !this.started
    },
    attack: function() {
      playerDamage = Math.floor(Math.random() * 10) + 1
      monsterDamage = Math.floor(Math.random() * 10) + 1

      this.player.playerHealth -= playerDamage
      this.monster.monsterHealth -= monsterDamage

      this.player.width = this.player.playerHealth + '%'
      this.monster.width = this.monster.monsterHealth + '%'
    }
  }
})