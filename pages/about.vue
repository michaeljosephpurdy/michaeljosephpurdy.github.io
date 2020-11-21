<template>
  <div class="about">
    <img src="/images/me.png" />
    <div class="about__statement">
      I am a software developer at Amazon.
    </div>
    <div class="about__statement">
      I was a software developer at Vangaurd.
    </div>
    <div class="about__statement">
      I like to make things.
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
</style>