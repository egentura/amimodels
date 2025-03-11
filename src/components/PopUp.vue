<template>
  <div v-show="visible" ref="popupRef" class="floating-box">
    <slot></slot>
  </div>
</template>

<!---------------------------------------------------------------->
<script setup>
import { ref } from "vue";

const visible = ref(false);

const popupRef = ref(null);

const updatePosition = (x, y) => {
  if (!popupRef.value) return;

  const popupElement = popupRef.value;
  const { innerWidth, innerHeight } = window; // Taille de l'écran
  const { width, height } = popupElement.getBoundingClientRect(); // Taille de l'élément

  // Ajustement pour que l'élément reste visible à l'écran
  const adjustedX = Math.min(Math.max(0, x), innerWidth - width);
  const adjustedY = Math.min(Math.max(0, y), innerHeight - height);

  // Appliquer la nouvelle position
  popupElement.style.left = `${adjustedX}px`;
  popupElement.style.top = `${adjustedY}px`;
};

const showPopup = (x, y) => {
  updatePosition(x, y);
  visible.value = !visible.value;
};

defineExpose({
  showPopup
});
</script>

<!---------------------------------------------------------------->
<style scoped>
.floating-box {
  border-radius: 0.5rem;
  position: absolute;
  background: white;
  box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.1);
  padding: 10px;
}
</style>
