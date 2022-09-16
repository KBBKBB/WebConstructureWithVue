<template>
  <el-menu
    default-active="0"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    style="position:fixed;top:60px;height: 100%;"
  >
    <!-- <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu> -->
    <el-menu-item index="0" @click="MapClick">
        <el-icon><Position /></el-icon>
        <template #title>
          地图
        </template>
    </el-menu-item>
    <el-menu-item index="1" @click="StrategyClick">
      <el-icon><Notebook /></el-icon>
      <template #title>策略设置</template>
    </el-menu-item>
    <!-- <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item> -->
    <el-menu-item index="2" @click="SystemSettingClick">
      <el-icon><setting /></el-icon>
      <template #title>系统设置</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {router} from '~/main'

//路由
function WorkspaceClick(){
  router.push("/HelloWorld")
}

function StrategyClick()
{
  router.push("/StrategySetting")
}

function MapClick()
{
  router.push('/Map')
}

function SystemSettingClick()
{
  router.push('/SystemSetting')
}

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

