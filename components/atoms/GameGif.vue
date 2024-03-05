<template>
<div>
  <img :src="`/gifs/${name}.gif`" alt="name" />
</div>
</template>

<script>
export default {
  props: {
    name: {
      required: true,
      type: String,
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  min-width: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
img::after {
  min-width: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>
