<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>

<template>
  <div class="card">
    <div class="card-header">
      <div layout="row center-justify">
        <span class="card-title ">{{ title }}</span>
        <div>
            <slot name="card-header"></slot>
        </div>
      </div>
    </div>
    <div class="card-body">
      <slot></slot>
    </div>
    <div class="card-footer">
      <slot name="card-footer"></slot>
    </div>
  </div>
</template>
