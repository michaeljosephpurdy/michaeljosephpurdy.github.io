<template>
  <div class="game">
    <div>
      A game where you need to try to get the paper airplane as far as you can, to keep your parents from reading it.
    </div>
    <div>
      Of course they will inevitably see your grades.
    </div>
    <div>
      This was coded over a 7 day period for an internal gamejam at Amazon called Winter Jam 2023.
      The theme was 'Delay the Inevitable'.
    </div>
    <div>
    </div>
    <a href="https://mikepurdy.dev/pico8games/report-cards-are-in.html">
      <GameGif name="report-cards-are-in"/>
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
