<template>
  <div class="game">
    <div>
      A game where you are a barber and shave people.
    </div>
    <div>
      This was coded over a 7 day period for an internal gamejam at Amazon called Summer Jam 2023.
    </div>
    <a href="https://mikepurdy.dev/pico8games/no-lifeguard-on-duty.html">
      <GameGif name="no-lifeguard-on-duty"/>
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
