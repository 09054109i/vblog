<template>
  <section>
    <transition>
      <!-- <router-view></router-view> -->
      <div>content here</div>
      <slot/>
    </transition>
  </section>
</template>

<script>
  export default {
    name: 'AppMain',
    computed: {

    }
  }
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .2s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
</style>