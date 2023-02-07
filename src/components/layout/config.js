const RouterList = [
  {
    name: '物流管理',
    key: 'sub1',
    icon: 'CarOutlined',
    children: [
      {
        name: '机构作业范围',
        key: 'sub1-1',
        children: [
          {
            name: '机构作业范围列表',
            key: '/workList'
          }
        ]
      },
      {
        name: '订单管理',
        key: 'sub1-2',
        children: [
          {
            name: '订单列表',
            key: '/orderList'
          }
        ]
      },
      {
        name: '运单管理',
        key: 'sub1-3',
        children: [
          {
            name: '运单列表',
            key: '/waybillList'
          }
        ]
      },
      {
        name: '网点管理',
        key: 'sub1-4',
        children: [
          {
            name: '快递作业管理',
            key: '/express'
          },
          {
            name: '快递员作业范围管理',
            key: '/expressman'
          },
          {
            name: '货品类型',
            key: '/goods'
          }
        ]
      },
      {
        name: '运转中心',
        key: 'sub1-5',
        children: [
          {
            name: '车型管理',
            key: '/carsType'
          },
          {
            name: '车队',
            key: '/cars'
          },
          {
            name: '车辆管理',
            key: '/carsManage'
          },
          {
            name: '司机管理',
            key: '/driverManage'
          },
          {
            name: '路线管理',
            key: '/routeManage'
          },
          {
            name: '路线类型管理',
            key: '/routeTypeManage'
          },
        ]
      },
      {
        name: '运输管理',
        key: 'sub1-6',
        children: [
          {
            name: '运输任务管理',
            key: '/task'
          },
          {
            name: '司机作业单管理',
            key: '/driverManage'
          },
          {
            name: '机构数据看板',
            key: '/organizationData'
          }
        ]
      },
      {
        name: '调度管理',
        key: 'sub1-7',
        children: [
          {
            name: '调度信息',
            key: '/depolyInfo'
          },
          {
            name: '智能调度',
            key: '/intelDepoly'
          }
        ]
      }
    ]
  },
  {
    name: '系统管理',
    key: 'sub2',
    icon: 'SettingOutlined',
    children: [
      {
        name: '组织管理',
        key: '/orgnization'
      },
      {
        name: '岗位管理',
        key: '/station'
      },
      {
        name: '用户管理',
        key: '/user'
      },
      {
        name: '菜单管理',
        key: '/menu'
      },
      {
        name: '角色管理',
        key: '/role'
      },
      {
        name: '文件管理',
        key: '/files'
      }
    ]
  },
  {
    name: '监控管理',
    key: 'sub3',
    icon: 'VideoCameraOutlined',
    children: [
      { 
        name: '登录日志',
        key: '/loginRecord'
      },
      { 
        name: '操作日志',
        key: '/operation'
      }
    ]
  },
]
export default RouterList