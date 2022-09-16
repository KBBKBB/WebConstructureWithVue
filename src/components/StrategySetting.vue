<script setup lang="ts">
    import {ref} from 'vue'
    const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))
</script>

<template>
    
    <div class="component" style="width: 100%;background-color: aqua;">组件框11111111111111</div>
    <div>
        <el-scrollbar>
          <el-table :data="tableData">
            <el-table-column prop="date" label="Date" width="140" />
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column prop="address" label="Address" />
          </el-table>
        </el-scrollbar>
    </div>
</template>



<style scoped>
.component{
    border: 1px solid gray;
    border-radius: 5px;
    height: 50px;
}
</style>