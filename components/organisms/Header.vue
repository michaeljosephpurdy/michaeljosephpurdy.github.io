<template>
  <div class="header">
    <div class="header__text">
      <a href="/">
        mikepurdy.dev
      </a>
    </div>
    <Navigation />
  </div>
</template>

<style lang="scss" scoped>
.header {
  margin-top: 1rem;
  margin-left: 1rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  //align-items: center;
  &__text {
    font-family:
      'Helvetica Neue',
      'Quicksand',
      'Source Sans Pro',
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Arial,
      sans-serif;
    display: block;
    font-weight: 300;
    font-size: 2rem;
    color: #35495e;
    overflow: hidden;
    white-space: nowrap;
    letter-spacing: 1px;
  }
  @media only screen and (min-width : 1000px) {
    padding-left: 16rem;
    padding-right: 16rem;
  }
}
.fas {
  font-size: 2rem;
}
a {
  text-decoration: none;
  color: black;
}
</style>