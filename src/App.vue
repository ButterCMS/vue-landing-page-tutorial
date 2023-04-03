<script setup>
import Header from "./components/HeaderSection.vue";
import Features from "./components/FeaturesSection.vue";
import Offers from "./components/OffersSection.vue";
import Footer from "./components/FooterSection.vue";
import { ref, onMounted } from "vue";
import Butter from "buttercms";

const headerComponent = ref(null);
const footerComponent = ref(null);
const offersContent = ref([]);
const featuresContents = ref(null);

onMounted(() => {
  const butter = Butter(import.meta.env.VITE_BUTTER_API_KEY);

  butter.page
    .retrieve("*", "landing-page")
    .then((resp) => {
      const { offers, header_component, footer_component, features } = resp.data.data.fields;

      headerComponent.value = header_component;
      footerComponent.value = footer_component;
      featuresContents.value = features;
      offersContent.value = offers;
    })
    .catch(function (resp) {
      console.log(resp);
    });

});
</script>

<template>
  <div class="relative">
    <Header v-if="headerComponent != null" :headerComponent="headerComponent" />
    <Features v-if="featuresContents != 0" :featuresContents="featuresContents" />
    <Offers v-if="offersContent.value != 0" :offersContent="offersContent" />
    <Footer v-if="footerComponent != null" :footerComponent="footerComponent" />
  </div>
</template>
