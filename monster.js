new Vue({
  el: '#app',
  data: {
    started: false,
    defaultHealth: 80,
    fullHealth: 100,
    player: {
      health: this.width
    },
    monster: {
      health: this.width
    }
  },
  methods: {
    startGame: function() {
      this.started = !this.started

      this.player.width = this.fullHealth + '%'
      this.player.health = this.fullHealth

      this.monster.width = this.fullHealth + '%'
      this.monster.health = this.fullHealth
    },
    endGame: function() {
      this.started = !this.started

      this.player.width = this.defaultHealth + '%'
      this.player.health = this.defaultHealth

      this.monster.width = this.defaultHealth + '%'
      this.monster.health = this.defaultHealth
    },
    attack: function(multiplier = 1) {
      playerDamage = Math.floor(Math.random() * 15) + 1
      monsterDamage = Math.floor(Math.random() * 15) + multiplier
      
      this.player.health -= playerDamage
      this.monster.health -= monsterDamage

      this.player.width = this.player.health + '%'
      this.monster.width = this.monster.health + '%'
    },
    heal: function() {
      health = Math.floor(Math.random() * 5) + 1
      playerDamage = Math.floor(Math.random() * 10) + 1
      
      this.player.health += (health + playerDamage)
      this.player.width = this.player.health + '%'
    }
  }
})