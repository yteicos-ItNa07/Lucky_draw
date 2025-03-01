<template>
  <!--創建卡片-->
  <div class="d-flex">
    <div class="container-fluid">
      <!--創建column佈局-->
      <div>
        <div class="d-md-flex flex-row text-center p-5">
          <!--卡片A-->
          <div class="col px-5">
            <div class="card bg-warning card-sized">
              <div class="card-body">
                <h1 class="card-title">鄒信</h1>
                <div class="card-text">我是來自...</div>
              </div>
            </div>
          </div>
          <!--卡片B-->
          <div class="col px-5">
            <div class="card bg-warning card-sized">
              <div class="card-body">
                <h1 class="card-title">徐之淇</h1>
                <div class="card-text">我是來自...</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-sized {
  height: 400px;
}
</style>
