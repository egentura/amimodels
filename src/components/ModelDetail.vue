<template>
  <PopUp ref="DeletePopupRef">
    <button>delete</button>
  </PopUp>

  <div class="model-detail">
    <div class="model-title">
      <div>
        <h2>{{ model.name }}</h2>
      </div>

      <div class="model-date">
        {{ model.day }} | start: {{ model.start_time }} - end:
        {{ model.end_time }}
      </div>

      <div
        @click="event => DeletePopupRef.showPopup(event.clientX, event.clientY)"
        class="model-delete"
      >
        ...
      </div>
    </div>

    <div class="model-description">
      {{ model.description || "no description" }}
    </div>
  </div>
</template>

<!---------------------------------------------------------------->
<script setup>
import { ref, defineAsyncComponent } from "vue";
const props = defineProps(["model"]);

/* pas utile dans l'immédiat, mais en prévision d'une optimisation du cycle de chargement */
const PopUp = defineAsyncComponent(() => import("@/components/PopUp.vue"));

const DeletePopupRef = ref(null);
</script>

<!---------------------------------------------------------------->
<style lang="scss" scoped>
.model-detail {
  margin-bottom: 1rem;
  background-color: white;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0px 1px 1px rgba(100, 100, 100, 0.1);
}

.model-title {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 1rem;
}

.model-description {
  font-size: 0.8rem;
}

.model-date {
  flex-grow: 1;
  margin-right: 1rem;
  margin-left: 1rem;
  text-align: right;
  font-size: 0.65rem;
  color: #666;
}

.model-delete {
  color: #666;
  cursor: pointer;
}
</style>
