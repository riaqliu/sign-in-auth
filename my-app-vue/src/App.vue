<script setup>
import SignInComponent from './components/SignInComponent.vue';
</script>

<template>
  <div class="sign-in-form">
    <!-- <SignInComponent/> -->
     <router-view></router-view>
  </div>
</template>

<style scoped>
  .sign-in-form {
    display: inline-block;
    text-align: left;
  }
</style>
