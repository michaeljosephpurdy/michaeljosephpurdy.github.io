<template>
  <div class="game">
    <div>
      Lights out is a recreation a classic puzzle game played on a 5x5 grid of lights.
    </div>
    <div>
      iOS users can download it now:
    </div>
    <div>
      <AppStoreBadge link="https://apps.apple.com/us/app/lights-out-game/id1538050760" />
    </div>
    <div>
      Android users will need to wait for the next release
    </div>
    <!--
    <GooglePlayBadge link="somewhere" />
    -->
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