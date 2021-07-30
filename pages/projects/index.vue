<template>
<div>
  <!--
  <div class="category">
    <SubHeaderText class="category__sub-header" text="software!" />
    hi 
  </div>
  -->
  <div class="category">
    <SubHeaderText class="category__sub-header" text="mobile games" />
    <a href="/projects/games/lights-out">
      <GamePreview class="category__item" name="lights-out"/>
    </a>
  </div>
  <div class="category">
    <SubHeaderText class="category__sub-header" text="browser games" />
    <a href="/projects/games/snake">
      <GamePreview class="category__item" name="snake"/>
    </a>
    <a href="/projects/games/shave-me">
      <GamePreview class="category__item" name="shave-me"/>
    </a>
    <a href="/projects/games/lost-remote">
      <GamePreview class="category__item" name="lost-remote"/>
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
  @media only screen and (min-width : 1000px) {
    align-self: flex-start;
  }
}
</style>