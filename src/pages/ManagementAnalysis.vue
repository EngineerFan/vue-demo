<template>
<div id="ManagementAnalysis">
  <el-row>
    <el-col :span="24">
      <div class="matchSearch grid-content bg-purple">
        <div class="block">
          <span class="demonstration">年月</span>
          <el-date-picker v-model="yearMonth" type="month" placeholder="请选择年月" size="small">
          </el-date-picker>
        </div>

        <div class="block">
          <span class="demonstration">省区</span>
          <el-cascader placeholder="省区" v-model="provVal" :options="proValArr" filterable size="small"></el-cascader>
        </div>

        <div class="block">
          <span class="demonstration">转运中心</span>
          <el-cascader placeholder="转运中心" v-model="transportCenterVal" :options="transportCenterValArr" filterable size="small"></el-cascader>
        </div>
        <div class="block">
          <el-button type="primary" icon="el-icon-search" size="small">查询</el-button>
          <el-button type="primary" icon="el-icon-download" size="small">导出PPT</el-button>
        </div>
      </div>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <div class="grid-content bg-purple-light">
        
      </div>
    </el-col>
  </el-row>
</div>
</template>
<script>
import {
  provData
} from '@/utils/data.js';

//创建一个Counter组件
const Counter = {
  template: '<div>{{ count }}</div>',
  computed:{
    count(){
      return store.state.count;
    }
  }
}


export default {
  name: "ManagementAnalysis",
  data: () => ({
    yearMonth: '',
    provVal: '北京区',
    transportCenterVal: '',
    proValArr: [],
    transportCenterValArr: []

  }),
  created() {
    //do something after creating vue instance
    this.getCurrentYearMonth();
    //init prov
    this.getProvArrData();
    //invoke increment
    this.$store.commit('increment');
    console.log(this.$store.state.count);
  },
  methods: {
    getCurrentYearMonth() {
      let date = new Date();
      let year = date.getFullYear().toString();
      let month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString();
      this.yearMonth = year + '-' + month;
    },
    getProvArrData() {
      let provArr = new Array();
      provData.forEach((v, i) => {
        let o = new Object();
        o.label = v.finProvNm;
        o.value = v.finProvCd;
        provArr.push(o)
      });
      this.proValArr = provArr;
    }
  }
}
</script>
<style scoped>
.matchSearch {
  margin: 0 auto
}

.matchSearch .block {
  float: left
}

.matchSearch>div+div {
  margin-left: 30px
}
</style>
