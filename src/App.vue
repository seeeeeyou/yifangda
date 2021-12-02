<template>
  <div id="app">
    <my-header />
    <router-view />
    <my-footer />
  </div>
</template>

<style lang="less">
@media screen and(max-width: 900px) {
  html {
    font-size: 8px !important;
  }
}
html {
  font-size: 10px;
}
</style>
