<template>
  <main class="flex justify-center bg-white/90 pb-16 md:pb-0 pl-20 pr-20 h-100vh">
    <!-- Looping through the Offers list -->
    <div v-for="data in offersContent">
      <section class="pb-24 px-4 md:px-8 pt-20">
        <div class="text-center mb-14 md:mb-28">
          <h2 class="heading-secondary font-bold inline-block text-4xl md:text-5xl uppercase transition-all">
            {{ data.main_title }}
            <!-- added main title -->
          </h2>
        </div>

        <div class="flex flex-col md:flex-row">
          <div class="w-full md:w-1/2 mb-12">
            <h3 class="text-2xl md:text-2xl font-bold uppercase mb-4 text-slate-600">
              {{ data.subtitle }}
              <!-- added subtitle -->
            </h3>
            <p class="text-lg mb-8 text-emerald-700">
              {{ data.description }}
              <!-- added description -->
            </p>

            <a href="#"
              class="btn-text text-lg inline-block text-gray-700 no-underline border-b border-gray-700 p-2 transition-all hover:bg-green-500 hover:text-gray-800 hover:shadow-lg hover:-translate-y-2 active:shadow-md active:translate-y-0">Learn
              more &rarr;</a>
          </div>

          <!-- added 3 images -->

          <div class="md:w-1/2 md:pl-12">
            <div class="relative flex">
              <img :src="data.image1" alt="Photo 1"
                class="w-5/12 shadow-lg absolute z-10 transition-all duration-300 outline-offset-8 hover:scale-110 hover:-translate-y-2 hover:shadow-md hover:z-20 left-0 md:left-12 md:-top-8" />

              <img :src="data.image2" alt="Photo 2"
                class="w-5/12 shadow-lg absolute md:z-10 transition-all duration-300 outline-offset-8 hover:scale-110 hover:-translate-y-2 hover:shadow-md z-30 hover:z-20 md:right-28 md:top-8 left-1/4" />

              <img :src="data.image3" alt="Photo 3"
                class="w-5/12 shadow-lg absolute z-10 transition-all duration-300 outline-offset-8 hover:scale-110 hover:-translate-y-2 hover:shadow-md hover:z-20 md:top-20 right-14" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
<script>


export default {
  name: "Offers",

  props: ["offersContent"],
};
</script>

<style scoped>
.heading-secondary {
  background-image: linear-gradient(to right, #7ed56f, #28b485);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

@media only screen and (max-width: 768px) {
  main {
    flex-direction: column;
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
