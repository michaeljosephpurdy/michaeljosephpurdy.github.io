<template>
  <div class="about">
    <div class="about__image image">
      <span class="image__container">
        <img class="image__image" src="/images/me.png" alt="A picture of Mike Purdy."/>
      </span>
    </div>
    <div class="about__statement">
      My name is Mike Purdy.
    </div>
    <div class="about__statement">
      Father, Husband, Marine, Developer.
    </div>
    <div class="about__statement">
      I like to make things.  Game development, projects around the house, small websites, etc.  I spend a lot of time tinkering.
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  &__statement {
    padding-bottom: 1rem;
  }
}
.image {
  padding-bottom: 2rem;
  &__container {
    display: inline-block;
  }
  &__image {
    filter: grayscale(1);
    border-radius: 50%;
    scale: (0.5);
    width: 50%;
  }
}
</style>