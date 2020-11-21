<template>
  <div>
    <a :href="path" :target="external ? '_none' : ''">
      <div>
        <i :class="icon"></i>
        <EmphasizableText :name="name" :bold="selected" />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      required: true,
      type: String,
    },
    icon: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    external: {
      required: false,
      type: Boolean,
    },
  },
  computed: {
    selected() {
      return this.$route.path && this.$route.path.includes(this.$props.path)
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  display:flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
}
a {
  text-decoration: none;
  color: black;
}
</style>