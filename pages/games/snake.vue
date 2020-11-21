<template>
  <div class="game">
    <div>
      snake
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
        script: [
          {
            src:
              '../snake.js'
          }
        ],
        script: [
          {
            src:
              '../../snake.js'
          }
        ],
    }
  },
}
</script>
<style lang="scss" scoped>
.game {
  display: flex;
  flex-direction: column;
}
</style>