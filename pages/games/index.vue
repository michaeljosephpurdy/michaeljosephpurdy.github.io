<template>
<div>
  <GamePreview class="game" name="snake"/>
  <hr>
  <GamePreview class="game" name="lights-out"/>
  <hr>
</div>
</template>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  @media only screen and (min-width : 1000px) {
    flex-direction: row;
  }
}
.game {
  padding: 1rem;
}
</style>