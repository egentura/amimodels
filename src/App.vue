<template>
  <header>
    <div>
      <img src="@/assets/icons/logo.svg" alt="logo" />
    </div>
    <div>
      <select>
        <option>
          account
        </option>
      </select>
    </div>
  </header>

  <main>
    <ModelSelection />
  </main>
</template>

<!---------------------------------------------------------------->
<script setup>
import ModelSelection from "@/components/ModelSelection";
</script>

<!---------------------------------------------------------------->
<style lang="scss">
@use "./assets/css/style.css";

main {
  max-width: 640px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

header select {
  border: none;
  background-color: white;
  padding: 0.5rem 1rem;
  color: #666;
  box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.1);
}
</style>
