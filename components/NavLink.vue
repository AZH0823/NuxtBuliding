
<script>
export default {

}
</script>
<template>
  <div class="navbar md:col-span-1" >
    <nav class="px-16 py-10 md:h-[100vh] md:border-r-2 md:border-gray-400 shadow-md">
      <div>
        <h1 class="text-center text-3xl font-bold">
          <nuxt-link to="/">Food Nisadas</nuxt-link>
        </h1>
      </div>
      <ul class="flex flex-col items-center my-16 space-y-5">
        <li class="w-full">
          <a href="#" class="md:flex items-center text-center relative">
            <span class="fontScss flex-1 block">Home</span><fa class="absolute top-[15%] right-[25%]" :icon="['fas', 'house']" />
          </a>
        </li>
        <li class="w-full">
          <a href="#" class="md:flex items-center text-center relative">
            <span class="cc md:flex-1 block">About</span><fa class="absolute top-[15%] right-[25%]" :icon="['fab', 'github']" />
          </a>
        </li>
        <li class="w-full">
          <a href="#" class="md:flex items-center text-center relative">
            <span class="md:flex-1 block">Contact</span><fa class="absolute top-[15%] right-[25%]"  :icon="['fas', 'comment']" />
          </a>
        </li>
         <li class="w-full">
            <nuxt-link to="/Elemnt_UI" class="md:flex items-center text-center relative">
              <span class="md:flex-1 block">elemnt UI</span><fa class="absolute top-[15%] right-[25%]"  :icon="['fas', 'comment']" />
            </nuxt-link>
          </li>
          <li class="w-full">
            <nuxt-link to="/imageUpload" class="md:flex items-center text-center relative">
              <span class="md:flex-1 block">imageUpload</span><fa class="absolute top-[15%] right-[25%]" :icon="['fas', 'upload']" />
            </nuxt-link>
          </li>
      </ul>
    </nav>
  </div>
</template>


<style lang="scss">
@import '@/assets/scss/main.scss';
// 元件使用 tailwind @apply 指令
.appleMode1{
  @apply text-9xl text-red-800 font-black
}

</style>
