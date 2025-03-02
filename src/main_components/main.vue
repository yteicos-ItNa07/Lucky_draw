<template>
  <!--這裡沒有彈性佈局(d-flex) 也沒有置中-->
  <div class="d-flex justify-content-center" style="width: 100%;">
    <div class="container bg-secondary rounded-3 p-5">
      <h1 class="text-center"> Lucky Draw </h1>
      <ParticipantList @add-participant="addParticipant" :participants="participants" />
      <LuckyDraw :participants="participants" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import ParticipantList from './participantslist.vue';
import LuckyDraw from './luckydraw.vue';

export default {
  components: { ParticipantList, LuckyDraw },
  setup() {
    const participants = ref([]);

    const addParticipant = (name) => {
      if (!name.trim()) {
        alert("请输入有效的名字！");
        return;
      }
      if (participants.value.includes(name)) {
        alert("该名字已添加！");
        return;
      }
      participants.value.push(name);
    };

    return { participants, addParticipant };
  }
};
</script>
<!--這裡style後面要加scope 不然每個vue文件style會串-->
<style scope></style>
