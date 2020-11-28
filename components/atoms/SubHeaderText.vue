<template>
  <HeaderText
    :text="text"
    style="font-size: 1.5rem;"
    />
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