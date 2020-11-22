<template>
  <div class="game">
    <div>
      Snake clone implemented in PICO-8.
    </div>
    <a href="https://mikepurdy.dev/pico8games/snake.html">
      play it here
    </a>
  </div>
</template>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;

  @media only screen and (min-width : 1000px) {
    justify-content: center;
  }
}
</style>