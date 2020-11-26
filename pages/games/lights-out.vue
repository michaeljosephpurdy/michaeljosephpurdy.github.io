<template>
  <div class="game">
    <div>
      Lights out is a mobile recreation of a classic puzzle game played on a 5x5 grid of lights.
    </div>
    <div>
    <AppStoreBadge link="https://apps.apple.com/us/app/lights-out-game/id1538050760" />
    </div>
    <div>
    <GooglePlayBadge link="https://play.google.com/store/apps/details?id=dev.purdy.lightsout" />
    </div>
    <div>
      <GameGif name="lights-out"/>
    </div>
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