<template>
  <div class="game">
    <div>
      A game where you are a barber and shave people.
    </div>
    <div>
      This was coded over a 12 day period for an internal gamejam at Amazon called Winter Jam 2020.
    </div>
    <div>
      I updated it in early 2022, fixing some bugs and adding a message speed option.
    </div>
    <a href="https://mikepurdy.dev/pico8games/shave-me.html">
      <GameGif name="shave-me"/>
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
