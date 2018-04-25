new Vue({
  el: '#app',
  data: {
    started: false,
    fullHealth: 100
  },
  methods: {
    startGame: function() {
      this.started = !this.started
    },
    endGame: function() {
      this.started = !this.started
    }
  },
  computed: {
    updateHealth: function() {
      if(this.started) {
        return {
          width: this.fullHealth + '%'
        }
      }
    }
  }
})