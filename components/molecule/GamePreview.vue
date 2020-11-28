<template>
<div>
  <GameGif class="gif" :name="name" />
  <SubHeaderText :text="name" style="font-size: 1rem;" />
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
div {
  display: flex;
  flex-direction: column;
}
.gif {
  max-width: 10rem;
}
</style>