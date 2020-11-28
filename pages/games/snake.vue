<template>
  <div class="game">
    <div>
      A snake clone implemented in PICO-8.
    </div>
    <a href="https://mikepurdy.dev/pico8games/snake.html">
      <GameGif name="snake" />
      <SubHeaderText text="click to play" />
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