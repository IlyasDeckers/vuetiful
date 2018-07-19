<template>
  <div class="">
    <div class="w-full h-64 bg-blue-light text-center text-white">
      <h1 class="p-4 pt-16 text-white font mono">Vuetiful</h1>
      <p class="pb-4 text-white">VueJS framework with TailwindCSS and a lot of goodies</p>
      <router-link to="/docs" class="p-4"><icon :icon="['fas', 'book']" /> Documentation</router-link> |
      <a href="https://github.com/ilyasdeckers/vuetiful" class="p-4">
        <icon :icon="['fab', 'github']" /> GitHub
      </a>
    </div>
    <div class="mt-16">
      <div class="flex">
        <div class="flex-1" />
        <div class="flex-1 text-left">
          <h3>Quickstart</h3>
          <pre class="bg-grey-lighter pl-4 mt-4 rounded border">
            <code>
<div class="text-grey">// Install the dependencies</div>npm install

<div class="text-grey">// Run with hot reloading on localhost:8080</div>npm run dev

<div class="text-grey">// Run the documentation on localhost:8081</div>npm run docs:dev
            </code>
          </pre>
        </div>
        <div class="flex-1" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    console.log(this.$plugin)
  }
}
</script>

<style scoped>

</style>
