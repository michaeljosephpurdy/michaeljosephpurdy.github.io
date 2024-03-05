<template>
  <div class="game">
    <div>
      A game where you explore a small dungeon, looking for the important treasure.
    </div>
    <div>
      This was coded over a 14 day period for an internal gamejam at Amazon called Fall Jam 2023.
    </div>
    <div>
      The theme was "Unreliable Narriator", and there was an optional restriction of "1 Bit".
    </div>
    <a href="https://mikepurdy.dev/pico8games/the-treasure-is-real-rare-and-important.html">
      <GameGif name="the-treasure-is-real-rare-and-important"/>
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
