<template>
  <div class="d-flex justify-content-center input-group mb-3">
    <input class="form-control" v-model="name" placeholder="Enter your name" />
    <button class="btn btn-primary" @click="submitName">Add Participant</button>
  </div>
  <h2>Participants</h2>
  <ul class="mb-3">
    <li v-for="(participant, index) in participants" :key="index">{{ participant }}</li>
  </ul>
</template>

<script>
import { ref } from 'vue';

export default {
  props: ['participants'],
  emits: ['add-participant'],
  setup(props, { emit }) {
    const name = ref("");

    const submitName = () => {
      emit('add-participant', name.value);
      name.value = "";
    };

    return { name, submitName };
  }
};
</script>

<!-- style scoped 後面要加一個scoped因為不加的話會串-->
<style scoped></style>
