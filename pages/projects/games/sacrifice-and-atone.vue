<template>
  <div class="game">
    <div>
      A sokoban-like where you must make sacrifices to atone for your sins.
    </div>
    <div>
      This was coded over a 7 day period for an internal gamejam at Amazon called Winter Jam 2024.
    </div>
    <div>
      The theme was "Your Life is Currency".
    </div>
    <a href="https://mikepurdy.dev/sacrifice-and-atone">
      <GameGif name="sacrifice-and-atone"/>
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
