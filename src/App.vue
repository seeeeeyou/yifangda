<template>
  <div id="app">
    <my-header v-if="$route.name!='error'"/>
    <router-view />
    <my-footer v-if="$route.name!='error'"/>
  </div>
</template>

<style lang="less">
@import './style/reset.css';
@media screen and(max-width: 900px) {
  html {
    font-size: 8px !important;
  }
}
html {
  font-size: 10px;
}
</style>
