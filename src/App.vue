<!-- <template>
  <el-config-provider namespace="ep">
    <BaseHeader />
    <div style="display: flex;">
      <BaseSide /> -->
      <!-- <div>
        <img alt="Vue logo" class="element-plus-logo" src="./assets/logo.png" />
        <HelloWorld msg="Hello Vue 3.0 + Element Plus + Vite" />
      </div> -->
      <!-- <div class="main">
        <img alt="Vue logo" class="element-plus-logo" src="./assets/logo.png" />
        <router-view></router-view>
      </div>
    </div>
  </el-config-provider>
</template> -->
<template>
  <div class="common-layout">
    <el-container>
      <el-header >
         <BaseHeader  style="z-index: 9999;" />
      </el-header>
    <el-container>
      <el-aside  width="65px"><BaseSide /></el-aside>
      <el-container>
      <el-main>
        <div>
          <router-view></router-view>
       </div>
      </el-main>
    </el-container>
    </el-container>
    </el-container>
  </div>
</template>


<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
}

.element-plus-logo {
  width: 50%;
}

.main{
  position: absolute;
  top: 50px;
  left: 66px;
  background-color:blue;
  width: 100%;
}
</style>
