<template>
  <div class="header">
    <div>
      <a href="/">
        <HeaderText text="mikepurdy.dev" />
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
  @media only screen and (min-width : 1000px) {
    padding-left: 16rem;
    padding-right: 16rem;
  }
}
.fas {
  font-size: 2rem;
}
</style>