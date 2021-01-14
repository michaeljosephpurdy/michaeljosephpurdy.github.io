<template>
  <div class="footer">
    <div class="footer__item">
      <a href="mailto:me@mikepurdy.dev">
        <i class="far fa-envelope"></i>
      </a>
    </div>
    <div class="footer__item">
      <a href="https://www.linkedin.com/in/michael-purdy-90302661/">
        <i class="fab fa-linkedin"></i>
      </a>
    </div>
    <div class="footer__item">
      <a href="https://www.twitter.com/actualmikepurdy/">
        <i class="fab fa-twitter"></i>
      </a>
    </div>
    <div class="footer__item">
      <a href="https://github.com/michaeljosephpurdy/">
        <i class="fab fa-github"></i>
      </a>
    </div>
    <div class="footer__item">
      <a href="https://purdy.itch.io/" >
        <i class="fab fa-itch-io"></i>
      </a>
    </div>
    <div class="footer__item">
      <a href="https://www.youtube.com/channel/UCf4UjDakDLZHOS4paM4ohwg">
        <i class="fab fa-youtube"></i>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  background-color: white;
  padding: .75rem 0;

  @media only screen and (min-width : 1000px) {
    padding-left: 16rem;
    padding-right: 16rem;
  }

  &__item {
    padding: 0 1rem;
  }
}
a {
  color: black;
  font-size: 1.5rem;
}
</style>
