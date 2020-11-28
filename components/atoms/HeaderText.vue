<template>
<div>
  {{ text }}
</div>
</template>

<script>
export default {
  props: {
    text: {
      required: true,
      type: String,
    }
  }
}
</script>

<style lang="scss" scoped>
div {
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
  white-space: nowrap;
  letter-spacing: 1px;
}
</style>