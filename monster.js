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
      this.setHealth(this.fullHealth)
    },
    endGame: function() {
      this.started = !this.started
      this.setHealth(this.defaultHealth)
    },
    attack: function(multiplier = 1) {
      let playerDamage = Math.floor(Math.random() * 15) + 1
      let monsterDamage = Math.floor(Math.random() * 15) + multiplier
      
      this.subtractHealth(this.player, playerDamage)
      this.subtractHealth(this.monster, monsterDamage)
    },
    heal: function() {
      let playerDamage = Math.floor(Math.random() * 15) + 1
      let healing = Math.floor(Math.random() * 10) + 10
      
      this.player.health += healing
      this.subtractHealth(this.player, playerDamage)
    },
    setHealth: function(health) {
      this.player.health = health
      this.player.width = health + '%'

      this.monster.health = health
      this.monster.width = health + '%'
    },
    subtractHealth: function(character, damage) {
      character.health -= damage

      if(character.health < 0){
        character.health = 0
        character.width = 0 + '%'
      } else {
        character.width = character.health + '%'
      }
    },
    healthDisplay: function(character) {
      return character.health
    }
  }
})