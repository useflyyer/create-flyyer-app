<template>
  <div>
    <div class="layer background" :style="{backgroundImage: `url(${img})`}" />
    <div class="layer fade" />
    <div class="layer content">
      <img class="logo" :src="logo" />
      <h1 v-if="title" class="title">
        {{ title }}
      </h1>
      <span v-if="description" class="description">
        {{ description }}
      </span>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

import background from "../static/background.jpeg";
import logo from "../static/logo.svg";

export default Vue.extend({
  props: {
    width: {type: Number, required: true},
    height: {type: Number, required: true},
    variables: {type: Object, default: () => ({})},
  },

  data() {
    const defaults = {
      title: "Created with Vue.js",
      logo,
      img: background,
    };
    return {...defaults, ...this.variables};
  },
});
</script>

<style scoped>
.layer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.background {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.fade {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.65) 100%);
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2.5em 4em;
}

.logo {
  width: 280px;
  margin: 1.4rem;
  /* Apply white filter */
  filter: brightness(0) invert(1);
}

.title {
  margin: 0;
  color: #ffffff;
  font-family: "Roboto", Arial;
  font-size: 6rem;
  text-align: center;
}

.description {
  margin: 1rem 0 0 0;
  color: #ffffff;
  font-family: "Lora", serif;
  font-size: 3rem;
  letter-spacing: 3px;
  text-align: center;
}

/* Thumbnails for Whatsapp: 400x400px */
@media (min-height: 400px) {
  .title,
  .description {
    display: none;
  }
}
/* Banners (og:image): 1200x630px */
@media (min-height: 630px) {
  .title,
  .description {
    display: block;
  }
}
/* Instagram square posts: 1080x1080px */
@media (min-height: 1080px) {
}
/* Stories: 1080x1920px */
@media (min-height: 1920px) {
}
</style>
