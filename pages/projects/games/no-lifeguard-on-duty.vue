<template>
  <div class="game">
    <div>
      Help save the drowning swimmer by hitting the correct order of operations.
    </div>
    <div>
      This was coded over a 7 day period for an internal gamejam at Amazon called Summer Jam 2023.
    </div>
    <div>
      The theme for the jam was "What does this button do?"
    </div>
    <a href="https://mikepurdy.dev/pico8games/no-lifeguard-on-duty.html">
      <GameGif sytle="min-width: 100%" name="no-lifeguard-on-duty"/>
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
