<template>
  <div id="model-menu">
    <div>
      <h1 @click="handleModelListClick">Models</h1>
    </div>
    <div>
      <button>New model</button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#model-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}
</style>
