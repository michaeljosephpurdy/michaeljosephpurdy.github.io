<template>
  <div class="game">
    <div>
      A game made for Global Game Jam 2021.
    </div>
    <div>
      The theme was 'Lost and Found'.
    </div>
    <a href="https://mikepurdy.dev/pico8games/lost-remote.html">
      <GameGif name="lost-remote" />
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