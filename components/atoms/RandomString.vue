<template>
  <div>
    {{ str }}
  </div>
</template>

<script>
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
export default {
  props: {
    strings: {
      required: true,
      type: Array,
    }
  },
  computed: {
    str() {
      return strings[getRandomInt(strings.length)]
    }
  }
}
</script>