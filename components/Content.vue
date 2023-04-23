
<script>
export default {

}
</script>

<template>
  <main class="px-16 py-6 bg-gray-100 ">
        <div class="flex justify-center md:justify-end">
          <a href="#" class="text-primary btn">Log in</a>
          <a href="#" class="text-primary ml-2 btn">Sign up</a>
        </div>

        <header>
          <h2 class="text-gray-700 text-6xl font-semibold">Recipes</h2>
          <h3 class="mt-2 text-3xl font-semibold text-gray-300">For Ninjas</h3>
        </header>

        <div>
          <h4 class="font-bold mt-12 pb-2 border-b border-gray-200">Latest Recipes</h4>

          <div class="mt-8 grid lg:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5">
            <!-- cards go here -->
            <div class="card">
              <img src="@/assets/images/stew.jpg" alt="stew" class="w-full h-32 sm:h-48 object-cover pb-2 border-b-2 border-double border-gray-300">
              <div class="m-4">
                <span class="block mt-2 font-bold ">5 Bean Chili Stew</span>
                <span class="block text-gray-500 text-sm">Recipe by Mario</span>
              </div>
              <div class="badge">
                <span>25 mins</span>
              </div>
            </div>
            <div class="card">
                <img src="@/assets/images/noodles.jpg" alt="noodles" class="w-full h-32 sm:h-48 object-cover pb-2 border-b-2 border-double border-gray-300">
                <div class="m-4">
                   <svgCommpont iconName="mail" />
                   <svgCommpont iconName="arrow" />
                  <span class="block mt-2 font-bold ">5 Bean Chili Stew</span>
                  <span class="block text-gray-500 text-sm">Recipe by Mario</span>
                </div>
                <div class="badge">
                  <span>25 mins</span>
                </div>
              </div>
              <div class="card">
                <img src="@/assets/images/curry.jpg" alt="curry" class="w-full h-32 sm:h-48 object-cover pb-2 border-b-2 border-double border-gray-300">
                <div class="m-4">
                  <span class="block mt-2 font-bold ">5 Bean Chili Stew</span>
                  <span class="block text-gray-500 text-sm">Recipe by Mario</span>
                </div>
                <div class="badge">
                  <span>25 mins</span>
                </div>
              </div>
          </div>

          <h4>Most Popular</h4>

          <div>
            <!-- cards go here -->
          </div>
        </div>

        <div>
          <div>Load more</div>
        </div>

        <div class="svg-wrapper">
          <svg class="">
            <use xlink:href="~/assets/icons/svg/mail.svg#icon-mail"></use>
          </svg>
        </div>
  </main>
</template>
<style lang="scss">
  .card{
    @apply bg-white rounded-sm overflow-hidden shadow-md relative;
    .badge{
      @apply bg-secondory-100 text-secondory-200 py-2 px-4 uppercase font-bold rounded-full absolute right-2.5 top-2.5 hover:bg-yellow-300 hover:text-white cursor-pointer;
    }
  }
</style>
<script>
import svgCommpont from '@/components/svgCommpont.vue';
export default{
   components:{
    svgCommpont
  },
}
</script>
