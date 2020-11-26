<template>
<a :href="`${name}`">
  <div>
    <GameGif class="gif" :name="name"/>
    {{ name }}
  </div>
</a>
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
div {
  display: flex;
  flex-direction: column;
}
.gif {
  max-width: 10rem;
}
</style>