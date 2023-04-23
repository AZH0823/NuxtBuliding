<template>
  <div class=" md:col-span-2">
    <Content></Content>

  </div>

</template>

<script>

import Content from '@/components/Content.vue';

export default {
  layout: 'default',
  data(){
    return{
      mail:'mail'
    }
  },
  components:{
    Content,
  },
  name: 'IndexPage'
}
</script>
<style lang="scss">
.btn{
  @apply rounded-full py-2 px-3 text-xs font-bold cursor-pointer tracking-wide border border-transparent shadow;
  &:hover{
    @apply border border-gray-500 text-white bg-yellow-400;
  }
}
.abc::after{
  content: 'good';
  display: block;
  width: 100%;
  height: 30px;
  color:black;
  background: purple;
  &:hover{
    color:red;
    background: orange;
  }

}
.svg-wrapper{
  display: block;
  box-sizing: content-box;
  width: 16px;
  height: 16px;
  padding: 10px;
  margin: 0 auto;

}
.svg-icon {
  max-width: 100%;
  object-fit: contain;
  transition: transform 0.3s ease-in-out;
}

.svg-wrapper:hover .svg-icon {
  transform: rotate(360deg);
  fill :red;
}
</style>
