<script setup>
import Title from '@/components/title/title.vue'
import EchartsBar from './cpns/EchartsBar.vue'
import EchartsMap from './cpns/EchartsMap.vue'
import EchartsTask from './cpns/EchartsTask.vue'

</script>

<template>
  <div class="dashboard">
    <div class="box-top">
      <el-card class="card-addr">
        <div style="display: flex; align-items: center; height: 86px; justify-content: space-between">
          <img src="@/assets/img/addr.png" alt="">
          <div class="card-addr-txt">
            <h5>昌平网点</h5>
            <p>北京省/北京市/昌平区/金燕龙</p>
          </div>
          <div class="card-addr-num">
            <h5>0</h5>
            <p>下属机构</p>
          </div>
          <div class="card-addr-num">
            <h5>120</h5>
            <p>系统员工</p>
          </div>
        </div>
      </el-card>
      <el-card class="card-icons">
        <div style="display: flex; justify-content: space-evenly; align-items: center; height: 100%;">
          <div class="icon-box">
            <img src="@/assets/img/dashboard-icon-1.png" alt="">
            <div class="icon-txt">
              <h5>65</h5>
              <p>待分配作业范围</p>
            </div>
          </div>
          <div class="icon-box">
            <img src="@/assets/img/dashboard-icon-2.png" alt="">
            <div class="icon-txt">
              <h5>3456</h5>
              <p>取件待办</p>
            </div>
          </div>
          <div class="icon-box">
            <img src="@/assets/img/dashboard-icon-3.png" alt="">
            <div class="icon-txt">
              <h5>120</h5>
              <p>派件待办</p>
            </div>
          </div>
        </div>
      </el-card>
    </div>
    <div class="box-mid">
      <el-card class="card-left">
        <Title title="订单总量"/>
        <EchartsBar />
      </el-card>
      <el-card class="card-right">
        <Title title="订单分布"/>
        <EchartsMap />
      </el-card>
    </div>
      <el-card class="box-bottom">
        <Title title="作业信息"/>
        <EchartsTask />
      </el-card>
  </div>
</template>

<style lang='scss' scoped>
.dashboard{
  .box-top{
    display: flex;
    justify-content: space-between;
    
    .card-addr{
      width: 49%;
      height: 86px;
      padding: 0 30px;
      
      img{
        display: block;
        width: 67px;
        height: 67px;
        margin-right: 15px;
      }

      .card-addr-txt{
        display: flex;
        flex-direction: column;
        justify-content: center;

        h5{
          margin: 0;
          font-size: 16px;
        }
        p{
          margin: 0;
          font-size: 14px;
        }
      }
      .card-addr-num{
        width: 100px;
        height: 86px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h5{
          margin: 0;
          font-size: 18px;
          color: #3681ff;
          font-weight: 700;
        }
        p{
          margin: 0;
          font-size: 14px;
          color: #999;
        }
      }
    }
    .card-icons{
      width: 49%;
      height: 86px;
      padding: 0 30px;

      .icon-box{
        width: 160px;
        display: flex;
        height: 86px;
        align-items: center;
        
        img{
          width: 48px;
          height: 48px;
          margin-right: 10px;
        }
        .icon-txt{
          display: flex;
          flex-direction: column;
          justify-content: center;

          h5{
            margin: 0;
            color: #f04b30;
            font-weight: 700;
            font-size: 18px;
          }
          p{
            margin: 0;
            font-size: 14px;
            color: #999;
          }
        }
      }
    }
  }

  .box-mid{
    display: flex;
    justify-content: space-between;
    margin-top: 16px;

    .card-left{
      width: 49%;
      height: 340px;
    }
    .card-right{
      width: 49%;
      height: 340px;
    }
  }

  .box-bottom{
    width: 100%;
    height: 400px;
    margin-top: 16px;
  }
  :deep(.el-card__body){
    padding: 0;
  }
}

</style>