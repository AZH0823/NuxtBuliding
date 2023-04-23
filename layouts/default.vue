<template>
  <div class="grid md:grid-cols-3">
    <NavLink></NavLink>
    <Nuxt />
  </div>
</template>
<script>
  import NavLink from '@/components/NavLink.vue';
  export default{
    components:{
      NavLink
    }
  }
</script>