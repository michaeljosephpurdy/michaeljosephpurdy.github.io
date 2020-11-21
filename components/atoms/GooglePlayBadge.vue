<template>
  <a :href="link" target="_blank">
    <img src="~/assets/google-play-badge.png" />
  </a>
</template>

<script>
export default {
  props: {
    link: {
      required: true,
      type: String,
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 140px;
}
</style>