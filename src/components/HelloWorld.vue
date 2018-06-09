<template>
  <div class="wrap">
    <li class="header">大数据平台</li>
    <ul class="left">
      <li id="barDouble" style="height:39%" ref="myTask"></li>
      <li class="middle"  style="height:28%">
        <p id="placeName" ref="placeName"></p>
        <p id="placeName_1" ref="placeName_1"></p>
        <p id="placeName_2" ref="placeName_2"></p>
        <p id="placeName_3" ref="placeName_3"></p>
      </li>
      <li id="overall" ref="overall" style="height:30%"></li>
    </ul>
    <ul class="right">
      <li class="right_top">
        <iframe src="./WebContent/index.html" frameborder="0" width="500px" height="500px"></iframe>
        <div id="map" class="map_div" style="height: 100%; width: 100%"></div>
        <p id="mapData" style="width: 350px;height: 300px;" ref="mapData"></p>
      </li>
      <li class="right_bottom">
        <p id="placeName_4" ref="placeName_4" style="height:100%;width:33%"></p>
        <p id="placeName_5" ref="placeName_5" style="height:100%;width:33%"></p>
        <p id="placeName_6" ref="placeName_6" style="height:110%;width:33%"></p>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
import echarts from 'echarts'
import ol from 'openlayers'
export default {
  name: 'HellWorld',
  data () {
    return {
      myTask: {
        // backgroundColor: '#F0FFF0',
        title: {
          text: '我的任务',
          x: 'center',
          textStyle: {
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['收件箱', '在办箱', '已办箱'],
          textStyle: {
            color: '#fff'
          }
        },
        color: ['#FFD700', '#90EE90', '#F5FFFA'],
        series: [{
          name: '我的任务',
          type: 'pie',
          radius: '50%',
          center: ['50%', '60%'],
          data: [{
            value: 100,
            name: '收件箱'
          },
          {
            value: 200,
            name: '在办箱'
          },
          {
            value: 300,
            name: '已办箱'
          }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }]
      },
      // 环形图  反应地名状态的
      placeName: {
        // backgroundColor: #ff3341,
        title: {
          text: '地名管理',
          x: 'left',
          textStyle: {
            fontSize: 15,
            color: '#fff'
          }
        },
        tooltip: {
          show: true,
          trigger: 'item'
          // formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          x: 'center',
          data: []
        },
        color: ['#8B6508', '#8968CD', '#A2CD5A'],
        series: [{
          name: '数据展示',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '10',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{
            value: 335,
            name: '待办箱'
          },
          {
            value: 310,
            name: '已办箱'
          },
          {
            value: 234,
            name: '已归档'
          }
          ]
        }]
      },
      // 第二个环形图
      placeName_1: {
        // backgroundColor: '#ADD8E6',
        title: {
          text: '门牌管理',
          x: 'left',
          textStyle: {
            fontSize: 15,
            color: '#fff'
          }
        },
        tooltip: {
          show: true,
          trigger: 'item'
          // formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          x: 'center',
          data: []
        },
        color: ['#1E90FF', '#20B2AA', '#00CED1'],
        series: [{
          name: '数据展示',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '10',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{
            value: 335,
            name: '待办箱'
          },
          {
            value: 310,
            name: '已办箱'
          },
          {
            value: 234,
            name: '已归档'
          }
          ]
        }]
      },
      // 第三个环形图
      placeName_2: {
        // backgroundColor: '#ADD8E6',
        title: {
          text: '地址管理',
          x: 'left',
          textStyle: {
            fontSize: 15,
            color: '#fff'
          }
        },
        tooltip: {
          show: true,
          trigger: 'item'
          // formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          x: 'center',
          data: []
        },
        color: ['#00EE00', '#006400', '#4169E1'],
        series: [{
          name: '数据展示',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '10',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{
            value: 335,
            name: '待办箱'
          },
          {
            value: 310,
            name: '已办箱'
          },
          {
            value: 234,
            name: '已归档'
          }
          ]
        }]
      },
      // 第四个环形图
      placeName_3: {
        // backgroundColor: '#ADD8E6',
        title: {
          text: '地址发布',
          x: 'left',
          textStyle: {
            fontSize: 15,
            color: '#fff'
          }
        },
        tooltip: {
          show: true,
          trigger: 'item'
          // formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          x: 'center',
          data: []
        },
        series: [{
          name: '数据展示',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '10',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{
            value: 335,
            name: '待办箱'
          },
          {
            value: 310,
            name: '已办箱'
          },
          {
            value: 234,
            name: '已归档'
          }
          ]
        }]
      },
      // 左侧最底部的图
      overall: {
        title: {
          text: '总数分析',
          x: 'left',
          textStyle: {
            fontSize: 20,
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        toolbox: {
          // show: true,
          feature: {
            // mark: { show: true },
            dataView: { show: false, readOnly: false },
            magicType: {
              // show: true,
              type: ['pie']
            }
            // restore: { show: true },
            // saveAsImage: { show: true }
          }
        },
        calculable: false,
        series: [
          {
            name: '总数统计',
            type: 'pie',
            radius: [20, 110],
            center: ['50%', '50%'],
            roseType: 'radius',
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            lableLine: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            data: [
              { value: 10, name: 'rose1' },
              { value: 5, name: 'rose2' },
              { value: 15, name: 'rose3' },
              { value: 25, name: 'rose4' },
              { value: 20, name: 'rose5' },
              { value: 35, name: 'rose6' },
              { value: 30, name: 'rose7' },
              { value: 40, name: 'rose8' }
            ]
          }
        ]
      },
      // 地图的统计
      mapData: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'line'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          top: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'value',
          axisTick: {
            alignWithLabel: true
          },
          // 修改x轴上值的颜色
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff'
            }
          },
          // 修改x轴颜色
          axisLine: {
            lineStyle: {
              color: '#1A3C7F'
              // width: 8
            }
          }
        }],
        yAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff'
            }
          },
          // 修改y轴颜色
          axisLine: {
            lineStyle: {
              color: '#1A3C7F'
              // width: 8
            }
          },
          // 修改网格线的颜色
          splitLine: {
            lineStyle: {
              // 使用深浅的间隔色
              color: ['#fff']
            }
          }
        },
        series: [
          {
            name: '地名',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: false,
                position: 'insideRight'
              }
            },
            data: [320, 302, 301, 334, 390, 330, 320, 320]
          },
          {
            name: '地址',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: false,
                position: 'insideRight'
              }
            },
            data: [120, 132, 101, 134, 90, 230, 210, 310]
          },
          {
            name: '门牌',
            type: 'bar',
            stack: '总量',
            label: {
              normal: {
                show: false,
                position: 'insideRight'
              }
            },
            data: [220, 182, 191, 234, 290, 330, 310, 210]
          }
        ]
      },
      placeName_4: {
        title: {
          text: '地名分类',
          x: 'center',
          textStyle: {
            fontSize: 15,
            color: '#fff'
          }
        },
        color: ['#00EEEE'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          },
          // 修改x轴上值的颜色
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff'
            }
          },
          // 修改x轴颜色
          axisLine: {
            lineStyle: {
              color: '#1A3C7F'
              // width: 8
            }
          }
        }],
        yAxis: [{
          type: 'value',
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff'
            }
          },
          // 修改y轴颜色
          axisLine: {
            lineStyle: {
              color: '#1A3C7F'
              // width: 8
            }
          },
          // 修改网格线的颜色
          splitLine: {
            lineStyle: {
              // 使用深浅的间隔色
              color: ['#0D112C']
            }
          }
        }],
        series: [{
          name: '数值',
          type: 'bar',
          barWidth: '60%',
          data: [10, 52, 200, 334, 390, 330, 220]
        }]
      },
      placeName_5: {
        color: ['#3398DB'],
        title: {
          text: '地址分类',
          x: 'center',
          textStyle: {
            fontSize: 15,
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          },
          // 修改x轴上值的颜色
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff'
            }
          },
          // 修改x轴颜色
          axisLine: {
            lineStyle: {
              color: '#1A3C7F'
              // width: 8
            }
          }
        }],
        yAxis: [{
          type: 'value',
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff'
            }
          },
          // 修改y轴颜色
          axisLine: {
            lineStyle: {
              color: '#1A3C7F'
              // width: 8
            }
          },
          // 修改网格线的颜色
          splitLine: {
            lineStyle: {
              // 使用深浅的间隔色
              color: ['#0D112C']
            }
          }
        }],
        series: [{
          name: '数值',
          type: 'bar',
          barWidth: '60%',
          data: [10, 52, 200, 334, 390, 330, 220]
        }]
      },
      // 折线图部分
      placeName_6: {
        title: {
          text: '时间统计',
          x: 'center',
          textStyle: {
            fontSize: 15,
            color: '#fff'
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'line' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '12%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          },
          // 修改x轴上值的颜色
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff'
            }
          },
          // 修改x轴颜色
          axisLine: {
            lineStyle: {
              color: '#1A3C7F'
              // width: 8
            }
          }
        }],
        yAxis: [{
          type: 'value',
          axisLabel: {
            show: true,
            textStyle: {
              color: '#fff'
            }
          },
          // 修改y轴颜色
          axisLine: {
            lineStyle: {
              color: '#1A3C7F'
              // width: 8
            }
          },
          // 修改网格线的颜色
          splitLine: {
            lineStyle: {
              // 使用深浅的间隔色
              color: ['#0D112C']
            }
          }
        }],
        color: ['#00BFFF'],
        series: [{
          name: '数值',
          data: [100, 932, 901, 500, 1290, 1330, 200],
          type: 'line',
          barWidth: '60%',
          smooth: true,
          itemStyle: {
            normal: {
              label: {
                show: true
              }
            }
          }
        }]
      }
    }
  },
  mounted () {
    this.test()
    this.one()
    this.two()
    this.three()
    this.four()
    this.map()
  },
  methods: {
    map () {
      let layers = [
        new ol.layer.Image({
          source: new ol.source.ImageArcGISRest({
            ratio: 1,
            params: { 'LAYERS': 'show:0,1' },
            url: 'http://121.201.28.15:6080/arcgis/rest/services/JZDMDZ/XZQH/MapServer'
          })
        })
      ]
      let map = new ol.Map({
        layers: layers,
        target: 'map',
        view: new ol.View({
          center: [12581840.603853151, 4166934.0221550693],
          zoom: 10
        })
      })
    },
    // 饼图的请求接口
    test () {
      let myCharts = echarts.init(this.$refs.myTask)
      this.ajax.get('/api/DataCenter/GetData', {
        params: {
          'TYPE': 'info'
        }
      }).then((resopens) => {
        this.myTask.series[0].data = resopens.data.data
        myCharts.setOption(this.myTask)
      })
    },
    // 环形图的请求的接口
    one () {
      let one = echarts.init(this.$refs.placeName)
      let two = echarts.init(this.$refs.placeName_1)
      let placeNameTwo = echarts.init(this.$refs.placeName_2)
      let placeNameThree = echarts.init(this.$refs.placeName_3)
      this.ajax.get('/api/DataCenter/GetData', {
        params: {
          'TYPE': 'state'
        }
      }).then((resopens) => {
        console.log(resopens)
        this.placeName.series[0].data = resopens.data[0].data
        this.placeName_1.series[0].data = resopens.data[1].data
        this.placeName_2.series[0].data = resopens.data[2].data
        this.placeName_3.series[0].data = resopens.data[3].data
        one.setOption(this.placeName)
        two.setOption(this.placeName_1)
        placeNameTwo.setOption(this.placeName_2)
        placeNameThree.setOption(this.placeName_3)
      })
    },
    // 柱状图的请求接口
    two () {
      let overalls = echarts.init(this.$refs.overall)
      let placeNameFour = echarts.init(this.$refs.placeName_4)
      let placeNamesix = echarts.init(this.$refs.placeName_5)
      this.ajax.get('/api/DataCenter/GetData', {
        params: {
          'TYPE': 'category'
        }
      }).then((resopens) => {
        console.log(resopens)
        for (let i = 0; i < resopens.data[0].data.length; i++) {
          this.overall.series[0].data[i].value = resopens.data[0].data[i].value
          this.overall.series[0].data[i].name = resopens.data[0].data[i].name
        }
        this.placeName_4.xAxis[0].data = resopens.data[1].name
        this.placeName_4.series[0].data = resopens.data[1].data
        this.placeName_5.xAxis[0].data = resopens.data[1].name
        this.placeName_5.series[0].data = resopens.data[1].data
        overalls.setOption(this.overall)
        placeNameFour.setOption(this.placeName_4)
        placeNamesix.setOption(this.placeName_5)
      })
    },
    // 折线图的请求接口
    three () {
      let placeNameten = echarts.init(this.$refs.placeName_6)
      this.ajax.get('/api/DataCenter/GetData', {
        params: {
          'TYPE': 'time'
        }
      }).then((resopens) => {
        console.log(resopens)
        this.placeName_6.xAxis[0].data = resopens.data.name
        this.placeName_6.series[0].data = resopens.data.data
        placeNameten.setOption(this.placeName_6)
      })
    },
    four () {
      let mapData = echarts.init(this.$refs.mapData)
      this.ajax.get('/api/DataCenter/GetData', {
        params: {
          'TYPE': 'area'
        }
      }).then((resopens) => {
        console.log(resopens)
        this.mapData.yAxis.data = resopens.data.names
        this.mapData.series[0].data = resopens.data.data1
        this.mapData.series[1].data = resopens.data.data2
        this.mapData.series[2].data = resopens.data.data3
        console.log(this.mapData.series[0].data)
        mapData.setOption(this.mapData)
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
html, body
  height 100%
  .wrap
    width 100%
    height 100%
    display flex
    background url('../assets/bg.jpg') no-repeat
    // background-size 100% 100%
    overflow hidden
    .header
      position absolute
      width 100%
      color white
      height 50px
      line-height 50px
      text-align center
      background url('../assets/bghead.png') no-repeat
      background-size 100% 100%
      z-index 100
    .left
      width 25%
      height 100%
      display flex
      flex-direction column
      justify-content space-between
      #barDouble
        background url('../assets/bg1.png') no-repeat
        background-size 100% 100%
        margin-top 28px
      #overall
        background url('../assets/bg1.png') no-repeat
        background-size 100% 100%
      .middle
        display flex
        justify-content space-around
        flex-wrap wrap
        height 300px
        text-align center
        background url('../assets/bg1.png') no-repeat
        background-size 100% 100%
        p
          width 50%
          height 100px
    .right
      width 75%
      position relative
      .right_top
        height 100%
        #mapData
          position absolute
          top 50px
          right 20px
          background url('../assets/bg1.png') no-repeat
          background-size 100% 100%
      .right_bottom
        display flex
        justify-content space-between
        height 30%
        width 100%
        position absolute
        left 0
        bottom 0
        #placeName_4
          background url('../assets/bg1.png') no-repeat
          background-size 100% 100%
          margin-left 3px
        #placeName_5
          background url('../assets/bg1.png') no-repeat
          background-size 100% 100%
        #placeName_6
          background url('../assets/bg1.png') no-repeat
          background-size 100% 95%
          height 105.5% !important
</style>
