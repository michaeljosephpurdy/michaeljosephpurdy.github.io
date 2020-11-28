<template>
<div>
  <div class="category">
    <SubHeaderText class="category__sub-header" text="mobile" />
    <a href="/games/lights-out">
      <GamePreview class="category__item" name="lights-out"/>
    </a>
  </div>
  <div class="category">
    <SubHeaderText class="category__sub-header" text="desktop" />
    <a href="/games/snake">
      <GamePreview class="category__item" name="snake"/>
    </a>
  </div>
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
.category {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1rem;
}
</style>