---
to: "src/app/<%= h.inflection.dasherize(folder).toLowerCase() %>/<%= h.inflection.dasherize(name).toLowerCase().slice(0, 5) === 'base-' ? '_' : '' %><%= h.inflection.dasherize(name) %>.vue"
eof_last: false
unless_exists: true
---
<template>
  <div class="w-full m-32 text-center">
    <p><%= h.inflection.dasherize(name) %></p>
  </div>
</template>

<script>
export default {
  name: '<%= h.inflection.dasherize(name) %>',
}
</script>

<style lang="scss" module>
</style>
