<script setup>
import { useRouter } from 'vue-router'
import { MoreFilled } from '@element-plus/icons-vue'


const router  = useRouter()

const activeNames = ref(['1', '2', '3', '4'])
const handleChange = (val) => {
  console.log(val)
}

// 费用信息
const tableData = ref([
  {
    index: '1',
    name: '食品',
    num: '1',
    type: 'aa',
    kg: '1',  
    volume: '45',
    code: '7654',
    remarks: '按时归还的计划是'
  }
])



</script>

<template>
  <div class="detail">
    <div class="top">
      <div class="item">
        <h5>订单编号：</h5>
        <p>1234567887654323456787</p>
      </div>
      <div class="item">
        <h5>运单状态：</h5>
        <p>876543</p>
      </div>
      <div class="item">
        <h5>下单时间：</h5>
        <p>2022-2-8</p>
      </div>
      <div class="item">
        <h5>订单状态：</h5>
        <p>已取消</p>
      </div>
      <div class="item">
        <h5>预计到达日期：</h5>
        <p>2021-3-3</p>
      </div>
    </div>
    <div class="collapse">
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="基本信息" name="1">
          <el-timeline>
            <el-timeline-item type="primary" >
              <div class="title">发货方</div>
              <div class="timeline">
                <p>收货人姓名：<span>张三</span></p>
                <p>收货人姓名：<span>张三</span></p>
                <p>收货人姓名：<span>张三</span></p>
                <p>收货人姓名：<span>张三</span></p>
              </div>
            </el-timeline-item>
            <el-timeline-item type="primary" color="yellow">
              <div class="title">发货方</div>
              <div class="timeline">
                <p>收货人姓名：<span>张三</span></p>
                <p>收货人姓名：<span>张三</span></p>
                <p>收货人姓名：<span>张三</span></p>
                <p>收货人姓名：<span>张三</span></p>
              </div>
            </el-timeline-item>
            <el-timeline-item type="primary" color="green">
              <div class="title">发货方</div>
              <div class="timeline">
                <p>收货人姓名：<span>张三</span></p>
                <p>收货人姓名：<span>张三</span></p>
                <p>收货人姓名：<span>张三</span></p>
                <p>收货人姓名：<span>张三</span></p>
              </div>
            </el-timeline-item>
          </el-timeline>
        </el-collapse-item>
        <el-collapse-item title="费用信息" name="2">
          <div class="feeinfo">
            <p>运费： <span>20</span>元</p>
            <p>支付方式： <span>预结</span></p>
            <p>付款状态： <span>未付</span></p>
          </div>
        </el-collapse-item>
        <el-collapse-item title="货品信息" name="3">
          <el-table :data="tableData" style="width: 100%" border>
            <el-table-column prop="index" label="序号" width="180" />
            <el-table-column prop="name" label="货品名称" width="180" />
            <el-table-column prop="num" label="货品数量" width="180"/>
            <el-table-column prop="type" label="货品类型" />
            <el-table-column prop="kg" label="重量（千克）" />
            <el-table-column prop="volume" label="体积（方）" />
            <el-table-column prop="code" label="条形编码" />
            <el-table-column prop="remarks" label="备注" />
          </el-table>
        </el-collapse-item>
        <el-collapse-item title="取件信息" name="4">
          <div class="top" style="padding: 0">
            <div class="item">
              <h5>所在网点：</h5>
              <p>建材城网点</p>
            </div>
            <div class="item">
              <h5>取件类型：</h5>
              <p>圣门取件</p>
            </div>
            <div class="item">
              <h5>作业状态：</h5>
              <p>待确认</p>
            </div>
            <div class="item">
              <h5>取件快递员：</h5>
              <p>快递员001</p>
            </div>
            <div class="item">
              <h5>快递员电话：</h5>
              <p>18457457858</p>
            </div>
            <div class="item">
              <h5>预计取件时间：</h5>
              <p>2021-3-3 18：00：00</p>
            </div>
            <div class="item">
              <h5>取件完成时间：</h5>
              <p>2021-3-3 19：00：00</p>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="bottom">
      <el-button @click="router.push('/orderList')">返回</el-button>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.detail{
  width: 100%;
  height: 100%;

  .top{
    padding: 25px 45px;
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    border-radius: 4px;

    .item{
      width: 25%;
      height: 40px;
      display: flex;
      align-items: center;

      h5{
        color: #20232a;
        font-size: 14px;
        margin: 0;
        width: 100px;
      }
      p{
        color: #818693;
        font-size: 14px;
        margin: 0;
      }
    }
  }
  .collapse{
    // padd
    :deep(.el-collapse-item){
      margin-top: 16px;
      .el-collapse-item__header{
        background-color: #f8faff !important;
        padding-left: 45px;
        height: 60px;
      }
      .el-collapse-item__wrap{
        padding: 25px 45px;

        .el-collapse-item__content{
          padding: 0;
        }
      }
      .el-collapse-item__header{
        font-size: 16px;
        font-weight: 700;
        color: #20232a;
      }

      .title{
        font-size: 16px;
        margin-bottom: 20px;
      }

      .timeline{
        width: 600px;
        display: flex;
        flex-wrap: wrap;
      }
    }

    .feeinfo{
      display: flex;
      justify-content: space-between;
    
      p{
        margin: 0;

        &:first-child{

          span{
            color: #ffb302;
            font-size: 18px;
            margin-right: 10px;
          }
        }
      }
    }

    .title{
      font-size: 16px;
      color: #20232a;
    }
  }

  .bottom{
    text-align: center;
    padding: 30px 0;
  }
}
</style>