<template>
  <div :class="bold ? 'selected' : ''">
    {{ name }}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      requred: true,
      type: String,
    },
    bold: {
      required: false,
      type: Boolean,
    },
  },
}
</script>

<style lang="scss" scoped>
.selected {
  font-style: italic;
}
</style>