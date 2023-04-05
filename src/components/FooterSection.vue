<template>
  <div>
    <footer class="footer flex flex-col bg-grey-800 pt-14 pb-24">
      <div class="flex justify-center mb-12">
        <img :src="footerComponent.logo" alt="Logo" class="w-32 h-32 rounded-circle" />
        <!-- added logo -->
      </div>
      <div class="flex flex-col md:flex-row text-xl justify-center text-white/90">
        <section class="w-full md:w-1/3 flex justify-center flex-col px-8 mb-12">
          <h3 class="font-bold uppercase mb-2 underline underline-offset-4 inline-block">
            Company
          </h3>
          <ul>
            <li>
              <a href="#" class="pb-2 hover:underline inline-block underline-offset-4 transition-all">About us</a>
            </li>
            <li>
              <a href="#" class="pb-2 hover:underline inline-block underline-offset-4 transition-all">Contact us</a>
            </li>
          </ul>
        </section>

        <section class="flex flex-col justify-center items-center px-4">
          <h1 class="text-xl text-gray-100 uppercase font-bold mb-4 text-center">
            Subscribe to our newsletter
          </h1>
          <p class="text-lg italic text-center">
            Get the latest news and updates from us
          </p>
          <div class="flex flex-col justify-center items-center mt-10">
            <input class="border-2 border-green-600 rounded-md p-2 w-80 md:mb-0 md:mr-4" type="email"
              placeholder="Enter your email" />
            <button
              class="bg-green-500 text-white rounded-md mt-8 p-1.5 w-32 m-auto hover:-translate-y-1 transition-all duration-300">
              Subscribe
            </button>
          </div>

          <div class="mt-12">
            <h2 class="text-xl text-slate-400">
              Want to know more about us?
              <a href="#" class="ml-2 italic underline text-green-700 text-md">
                Click here
              </a>
            </h2>
          </div>
        </section>
      </div>

      <div class="flex justify-center items-center text-white/90 py-8">
        <p class="text-sm">
          &copy; 2022 All rights reserved &#x2022; {{ footerComponent.developer }}
          <!-- added developer -->
        </p>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  name: "Footer",

  props: ["footerComponent"],

};
</script>
