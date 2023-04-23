<template>
  <div class="svg-wrapper">
    <svg class="svg-icon">
      <use :xlink:href="urlCovert"></use>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      required: true
    }
  },
  computed: {
    urlCovert() {
      const svg = require(`@/assets/icons/svg/${this.iconName}.svg`)
      return `${svg}#icon-${this.iconName}`
    }
  }
}
</script>
