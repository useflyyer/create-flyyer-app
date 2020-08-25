<template lang="html">
  <div>
    <div
      class="layer background"
      :style="{ backgroundImage: `url(${img})` }"
    />
    <div class="layer fade" />
    <div class="layer content">
      <img
        class="logo"
        :src="logo"
      >
      <h1
        v-if="title"
        class="title"
      >
        {{ title }}
      </h1>
      <span
        v-if="description"
        class="description"
      >
        {{ description }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
// Vue + TypeScript support is experimental.
// Feel free to submit issues to https://github.com/flayyer/create-flayyer-app

import Vue from "vue";

import background from "../static/background.jpg";
import logo from "../static/logo.svg";

export default Vue.extend({
  props: {
    variables: { type: Object, default: () => ({}) },
  },

  data() {
    const defaults = {
      title: "Hello world",
      logo,
      img: background,
    }
    return { ...defaults, ...this.variables };
  },
});
</script>

<style lang="css" scoped>
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
.background::before, .background::after {
  content: ' ';
  display: table;
}

.fade {
  background: linear-gradient(to bottom,rgba(0,0,0,0) 0,rgba(0,0,0,.65) 100%);
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  padding: 2.5em 4em;
}

.title {
  margin: 0;
  color: #ffffff;
  font-family: 'Roboto', Arial;
  font-size: 6rem;
}

.description {
  margin: 0;
  color: #ffffff;
  font-family: "Lucida Console", Monaco, monospace;
  font-size: 2rem;
  letter-spacing: 3px;
}

.logo {
  width: 120px;
  height: 120px;
  /* Apply white filter */
  filter: brightness(0) invert(1);
}
</style>
