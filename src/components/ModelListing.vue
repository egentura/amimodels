<template>
  <div id="model-search">
    <input type="text" placeholder="Search model" />
  </div>

  <div v-for="model in modelList" :key="model.id">
    <ModelDetail :model="model"></ModelDetail>
  </div>
</template>

<!---------------------------------------------------------------->
<script setup>
import { useModels } from "@/composables/useModels";
import ModelDetail from "@/components/ModelDetail";

const { modelList } = useModels();
</script>

<!---------------------------------------------------------------->
<style lang="scss" scoped>
#model-search {
  margin: 0 1rem 1rem 1rem;
  font-size: 0.65rem;
  color: #666;
}

#model-search input {
  background-color: transparent;
  border: none;
}
</style>
