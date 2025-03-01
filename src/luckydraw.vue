<template>
  <!--這裡要置中-->
  <div class="text-center">
    <div class="d-flex justify-content-center mb-3">
      <button class="btn btn-primary d-flex justify-content-center" @click="drawWinner"
        :disabled="participants.length === 0">Draw
        Winner</button>
    </div>
    <h2 v-if="winner">🎉 Winner: {{ winner }} 🎉</h2>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  props: ['participants'],
  setup(props) {
    const winner = ref(null);

    const drawWinner = () => {
      if (props.participants.length === 0) {
        alert("没有参与者！");
        return;
      }
      const randomIndex = Math.floor(Math.random() * props.participants.length);
      winner.value = props.participants[randomIndex];
    };

    return { winner, drawWinner };
  }
};
</script>

<style scoped></style>
