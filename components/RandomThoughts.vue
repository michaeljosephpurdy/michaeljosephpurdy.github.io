<template>
  <div>
    {{ fact }}
  </div>
</template>

<script>
const thoughts = [
  ''
]
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
export default {
  computed: {
    fact() {
      return thoughts[getRandomInt(facts.length)]
    }
  }
}
</script>