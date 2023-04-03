<template>
  <div>
    <div class="bg-gray-800 py-24 sm:py-32 lg:py-40">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="sm:text-center">
          <p class="heading-secondary font-bold inline-block text-3xl md:text-5xl uppercase transition-all">
            A better way to send money
          </p>
          <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-100">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>

        <div class="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div class="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            <!-- looping through the response array -->
            <div v-for="data in featuresContents">
              <div class="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div class="flex h-40 w-40 items-center justify-center rounded-xl text-white sm:shrink-0">
                  <img :src="data.image" :alt="data.image" />
                  <!-- added image -->
                </div>
                <div class="sm:min-w-0 sm:flex-1">
                  <p class="text-lg font-semibold leading-8 uppercase text-emerald-500">
                    {{ data.feature_title }}
                    <!-- added title -->
                  </p>
                  <p class="mt-2 text-base leading-7 text-slate-100">
                    {{ data.feature_desc }}
                    <!-- added description -->
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Features",

  props: ["featuresContents"],

};
</script>

<style scoped>
.heading-secondary {
  font-weight: 700;
  display: inline-block;
  background-image: linear-gradient(to right, #75f55e, #28b485);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 0.2rem;
  transition: all 0.2s;
}
</style>
