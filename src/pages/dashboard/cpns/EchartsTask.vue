<script setup>
import EchartsPie from './EchartsPie.vue'
// import { ref } from 'vue'

const colorList = [
  ['rgb(38, 83, 170)', 'rgb(96, 205, 160)', 'rgb(254, 119, 118)'],
  ['rgb(38, 83, 170)', 'rgb(96, 205, 160)'],
  [ 'rgb(38, 83, 170)', 'rgb(96, 205, 160)', 'rgb(254, 119, 118)' ]
]

const echartsData = [
  { value: 145, name: '取件任务待派遣' },
  { value: 67, name: '取件任务已派遣' },
  { value: 789, name: '取件任务已完成' },
]

</script>

<template>
  <div class="task">
    <div class="box-left">
      <div class="card">
        <div class="left">
          <ul>
            <li>
              <h5>1247</h5><p>取件任务</p>
            </li>
            <li>
              <h5>1665</h5><p>仓库任务</p>
            </li>
            <li>
              <h5>1194</h5><p>派件任务</p>
            </li>
          </ul>
        </div>
        <div class="right">
          <ul>
            <li>
              <h5>145</h5>
              <p>取件任务派遣</p>
            </li>
            <li>
              <h5>145</h5>
              <p>取件任务派遣</p>
            </li>
            <li>
              <h5>145</h5>
              <p>取件任务派遣</p>
            </li>
            <li>
              <h5>145</h5>
              <p>取件任务派遣</p>
            </li>
            <li>
              <h5>145</h5>
              <p>取件任务派遣</p>
            </li>
            <li>
              <h5>145</h5>
              <p>取件任务派遣</p>
            </li>
            <li>
              <h5>145</h5>
              <p>取件任务派遣</p>
            </li>
            <li>
              <h5>145</h5>
              <p>取件任务派遣</p>
            </li>
            <li>
              <h5>145</h5>
              <p>取件任务派遣</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="box-right">
      <div class="card">
        <div class="left">
          <EchartsPie 
            :colorList="colorList[0]" 
            :echartsData="echartsData"
          />
        </div>
        <div class="right">
          <div class="box">
            <ul>
              <li>
                <h5>145</h5>
                <p><span></span> 取件任务待派遣</p>
              </li>
              <li>
                <h5>67</h5>
                <p><span></span> 取件任务已派遣</p>
              </li>
              <li>
                <h5>789</h5>
                <p><span></span> 取件任务已完成</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.task{
  height: 340px;
  width: 100%;
  padding: 20px;
  display: flex;

  .box-left, .box-right{
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .card{
      width: 560px;
      height: 240px;
    }
  }
  .box-left{
    .card{
      background-color: #f6f7fb;
      border-radius: 10px;
      box-shadow: 0 2px 5px #ccc;
      display: flex;

      .left{
        width: 118px;
        height: 100%;
        background-color: #fff;
        border-radius: 10px;

        ul{
          height: 240px;
          margin: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;

          li{
            display: flex;
            flex-direction: column;
            cursor: pointer;

            h5{
              margin: 0;
              font-size: 16px;
              font-weight: 700;
              color: #f04b30;
              text-indent: 35px;
            }

            p{
              font-size: 14px;
              text-indent: 35px;
            }
          }
        }
      }
      .right{
        flex: 1;

        ul{
          height: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          margin: 0;

          li{
            width: 32%;
            height: 32%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-indent: 35px;

            &:nth-child(6){
              h5{
                font-size: 0;
              }
              p{
                font-size: 0;
              }
            }

            h5{
              font-size: 12px;
              color: #1c77ff;
              margin: 0;
            }

            p{
              font-size: 12px;
              color: #333;
              margin: 0;
            }
          }
        }
      }
    }
  }

  .box-right{
    .card{
      display: flex;
      .left{
        width: 420px;
        height: 100%;
      }
      .right{
        width: 140px;
        height: 100%;
        padding: 20px 0;
        
        .box{
          background-color: #f6f7fb;
          border-radius: 10px;
          height: 100%;

          ul{
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            height: 100%;

            li{
              display: flex;
              flex-direction: column;
              justify-content: center;
              text-indent: 20px;
              height: 33%;

              h5{
                color: #f04b30;
                font-size: 18px;
                font-weight: 700;
                margin: 0;
              }

              p{
                color: #333;
                font-size: 13px;
                margin: 0;

                span{
                  display: inline-block;
                  width: 4px;
                  height: 8px;
                  border-radius: 2px;
                  background-color: rgb(38, 83, 170);
                }
              }

              &:nth-child(2){
                p{
                  span{
                    background-color: rgb(96, 205, 160);
                  }
                }
              }
              &:nth-child(3){
                p{
                  span{
                    background-color: rgb(254, 119, 118);
                  }
                }
              }
            }
          }
        }

      }
    }
  }
}
</style>