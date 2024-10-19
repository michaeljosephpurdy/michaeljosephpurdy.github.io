<template>
<div>
  <GameGif class="gif" :name="name" />
  <SubHeaderText :text="displayName || name" style="font-size: 1rem;" />
</div>
</template>

<script>
export default {
  props: {
    displayName: {
      required: false,
      type: String,
    },
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
  filter: grayscale(1);
  &:hover {
    filter: grayscale(0);
  }
}
.gif {
  min-width: 100%;
  max-width: 10rem;
  margin-top: 1rem;
}
</style>
