<template>
  <div>
    <div class="navigation">
      <HeaderChoice class="navigation__item" name="projects" icon="fas fa-toolbox" path="/projects" />
      <HeaderChoice class="navigation__item" name="about" icon="fas fa-user" path="/about" />
      <HeaderChoice class="navigation__item" name="resume" icon="fas fa-file" path="/resume" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    route(_name) {
      return this.$route.path && this.$route.path.includes(_name)
    }
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  display:flex;
  flex-direction: row;

  &__item {
    padding-right: 1.5rem;
  }
}
</style>