<script setup>
import { ref, onMounted } from 'vue'
// import axios from 'axios'
// import echartMap from './echartMap'
import * as echarts from 'echarts'
import chinaMap from './map.json'

const data = [
    {name:"北京",value:199},
    {name:"天津",value:42},
    {name:"河北",value:102},
    {name:"山西",value:81},
    {name:"内蒙古",value:47},
    {name:"辽宁",value:67},
    {name:"吉林",value:82},
    {name:"黑龙江",value:123},
    {name:"上海",value:24},
    {name:"江苏",value:92},
    {name:"浙江",value:114},
    {name:"安徽",value:109},
    {name:"福建",value:116},
    {name:"江西",value:91},
    {name:"山东",value:119},
    {name:"河南",value:137},
    {name:"湖北",value:116},
    {name:"湖南",value:114},
    {name:"重庆",value:91},
    {name:"四川",value:125},
    {name:"贵州",value:62},
    {name:"云南",value:83},
    {name:"西藏",value:9},
    {name:"陕西",value:80},
    {name:"甘肃",value:56},
    {name:"青海",value:10},
    {name:"宁夏",value:18},
    {name:"新疆",value:180},
    {name:"广东",value:123},
    {name:"广西",value:59},
    {name:"海南",value:14},
];
var geoCoordMap = {};

    var convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),
            });
        }
    }
    return res;
};

// 获取dom
const mapRef = ref()

onMounted(() => {
  // 初始化画布
  const myChart = echarts.init(mapRef.value)
  echarts.registerMap('china', chinaMap)

  myChart.setOption({
    tooltip: {

    },
    visualMap: {
        show: false,
        calculable: true,
        seriesIndex: [1],
        inRange: {
            color: ['rgb(254, 174, 161)', 'rgb(253, 116, 114)'] // 蓝绿
        }
    },
    series: [
        {
            name: '散点',
            type: 'scatter',
            coordinateSystem: 'geo',
            itemStyle: {
                normal: {
                    color: '#fff'
                }
            }
        },
      {
          name: '中国',
            map: 'china',
            type: 'map',
            geoIndex: 0,
            roam: false,
            itemStyle: {
                normal: {
                    areaColor: 'rgba(253, 116, 114)',
                    borderColor: '#fff',
                },
                emphasis: {
                    areaColor: 'rgba(253, 116, 114)'
                }
            },
            animation: false,
            data: data
        },
        {
            name: 'Top 5',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function(a, b) {
                return b.value - a.value;
            }).slice(0, 10)),
            symbolSize: function(val) {
                return val[2] / 10;
            },
            hoverAnimation: true,
            itemStyle: {
                normal: {
                    color: '#fff',
                    shadowBlur: 10,
                    shadowColor: '#fff'
                }
            },
            zlevel: 1
        },

    ]
  })
})

</script>

<template>
  <div ref="mapRef" style="width: 100%; height: 280px; z-index: 999;"></div>
</template>

<style lang='scss' scoped>

</style>