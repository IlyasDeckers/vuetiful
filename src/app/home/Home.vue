<template>
  <div class="">
    <div class="w-full h-64 bg-blue-light text-center text-white">
      <h1 class="p-4 pt-16 text-white font mono">Vuetiful</h1>
      <p class="pb-4 text-white">VueJS framework with TailwindCSS for rapid development</p>
      <a href="https://ilyasdeckers.github.io/vuetiful-docs/" class="p-4"><fa-icon :icon="['fa', 'book']" /> Documentation</a> |
      <a href="https://github.com/ilyasdeckers/vuetiful" class="p-4">
        <fa-icon :icon="['fab', 'github']" /> GitHub
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

<div class="text-grey">// Run unit tests</div>npm run unit

<div class="text-grey">// Run with hot reloading on localhost:8080</div>npm run dev
            </code>
          </pre>
          <div class="my-8">
            <h3 class="mb-8">Cards</h3>
            <card title="Card Example">
              <template slot="card-header">
                test
              </template>
              body
              <template slot="card-footer">
                footer
              </template>
            </card>
          </div>

          <div class="my-8">
            <h3 class="mb-8">Toastr</h3>
            <button class="btn btn-success" @click.prevent="$toastr.s('Success!')">Success</button>
            <button class="btn btn-warning" @click.prevent="$toastr.w('Warning!')">Warning</button>
            <pre class="bg-grey-lighter pl-4 my-4 rounded border">
              <code>
$this.toastr.s('text', 'title')
              </code>
            </pre>
          </div>
          <div class="my-8">
            <h3 class="mb-8">Calendar Component</h3>
            <pre class="bg-grey-lighter pl-4 my-4 rounded border">
              <code>
import calendar from '@/plugins/calendar/componentsCalendar'

export default {
  components: { calendar },
}
              </code>
            </pre>
          </div>
        </div>
        <div class="flex-1" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  mounted () {
  }
}
</script>

<style scoped>

</style>
