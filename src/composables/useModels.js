import { ref } from 'vue';
import data from "../assets/json/data.json";

export function useModels() {
  const modelList = ref(data.models)

  return { modelList }
};