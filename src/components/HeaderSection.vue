<template>
  <section class="bg-white">
    <img :src="headerComponent.image" alt="image" srcset="" />
    <!-- added this -->
    <div class="isolate h-85 flex items-center justify-center pt-20">
      <main>
        <div class="relative px-6 lg:px-8 pl-20 container">
          <div class="mx-auto max-w-3xl pt-8 pb-32 sm:pt-24 sm:pb-40">
            <div>
              <div>
                <h1
                  class="heading-secondary text-5xl font-bold tracking-tight sm:text-center sm:text-6xl text-gray-400 uppercase pb-8">
                  {{ headerComponent.title }}
                  <!-- added this -->
                </h1>
                <p class="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                  {{ headerComponent.description }}
                  <!-- added this -->
                </p>

                <div class="mt-8 flex gap-x-4 sm:justify-center">
                  <a href="#"
                    class="inline-block rounded-lg bg-green-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-green-600 hover:bg-green-700 hover:ring-green-700">
                    Explore now
                    <span class="text-indigo-200" aria-hidden="true">&rarr;</span>
                  </a>
                  <a href="#"
                    class="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Check out our Sessions
                    <span class="text-gray-400" aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </section>
</template>

<script>
export default {
  name: "Header",

  props: ["headerComponent"],

};
</script>

<style scoped>
.heading-secondary {
  font-weight: 700;
  display: inline-block;
  background-image: linear-gradient(to right, #7ed56f, #28b485);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  letter-spacing: 0.2rem;
  transition: all 0.2s;
}

section {
  height: 90vh;
  display: flex;
}

@media only screen and (max-width: 768px) {
  section {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }

  img {
    height: 10rem;
  }

  h1 {
    font-size: 1rem;
  }

  p {
    font-size: 14px;
  }

  a {
    font-size: 14px;
  }
}
</style>
