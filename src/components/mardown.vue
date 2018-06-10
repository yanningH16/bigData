<template>
  <div>
    <div>
      <Switch v-model="switch1" @on-change="change"></Switch>
      <Button type="primary">Primary</Button>
      <Slider v-model="value1"></Slider>
      <Table :columns="columns1" :data="data1" aline='center'></Table>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'mardown',
  data () {
    return {
      switch1: false,
      value1: 25,
      columns1: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Age',
          key: 'age'
        },
        {
          title: 'Address',
          key: 'address'
        },
        {
          title: '无所谓',
          key: 'date'
        }
      ],
      data1: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ]
    }
  },
  methods: {
    change (status) {
      this.$Message.info('开关状态：' + status)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
