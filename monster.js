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
    },
    logs: []
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
      let damageToPlayer = Math.floor(Math.random() * 15) + 1
      let damageToMonster = Math.floor(Math.random() * 15) + multiplier
      
      this.subtractHealth(this.player, damageToPlayer)
      this.subtractHealth(this.monster, damageToMonster)

      let playerMessage = "Player hit Monster for " + damageToMonster
      let monsterMessage = "Monster hit Player for " + damageToPlayer

      this.logs.push([playerMessage, monsterMessage])
    },
    heal: function() {
      let damageToPlayer = Math.floor(Math.random() * 15) + 1
      let healing = Math.floor(Math.random() * 10) + 10
      
      this.addHealth(this.player, healing)
      this.subtractHealth(this.player, damageToPlayer)

      let playerMessage = "Player healed for " + healing
      let monsterMessage = "Monster hit Player for " + damageToPlayer

      this.logs.push([playerMessage, monsterMessage])
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
    addHealth: function(character, healing) {
      character.health += healing

      if(character.health > 100){
        character.health = 100
        character.width = 100 + '%'
      } else {
        character.width = character.health
      }
    },
    healthDisplay: function(character) {
      return character.health
    }
  }
})