<script lang="ts" setup>
import { toggleDark } from '~/composables';


import { ref } from "vue";

const activeIndex=ref('0');
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>
<template>
  <el-menu class="el-menu-demo" mode="horizontal" style="position:fixed;width: 100%;" 
   :ellipsis="false" :default-active="activeIndex" @select="handleSelect">
   <el-menu-item index="1" :disabled="true">LOGO</el-menu-item>
   <div class="flex-grow" ></div>
    <!-- <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" disabled>Info</el-menu-item>
    <el-menu-item index="4" @click="OrdersClick"> -->
      <!-- <router-link to="/Orders">Orders</router-link> -->
      <!-- Orders
    </el-menu-item> -->
    <el-menu-item h="full" @click="toggleDark()" index="2">
      <button class="border-none w-full bg-transparent cursor-pointer" style="height: var(--ep-menu-item-height);">
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>
  
  </el-menu>
</template>


<style>
  .flex-grow{
    flex-grow: 1;
  }
</style>
