import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/components/layout/layout.vue'
import Dashboard from '@/pages/dashboard/dashboard.vue'
import { getIsLogin } from '@/utils/storage'

const routes = [
  {
    path: '/login',
    component: () => import('@/pages/login/login.vue')
  },
  {
    path: '/',
    component: Layout,   
    children: [
      // 首页
      {
        path: '',
        component: Dashboard, 
      },
      // 机构作业范围列表
      {
        path: 'workList',
        component: () => import('@/pages/logistics/work/workList.vue')
      },
      // 订单列表
      {
        path: 'orderList',
        component: () => import('@/pages/logistics/order/orderList.vue'),
      },
      // 订单详情
      {
        path: 'detail',
        component: () => import('@/pages/logistics/order/detail.vue')
      },
      // 运单列表
      {
        path: 'waybillList',
        component: () => import('@/pages/logistics/waybill/waybillList.vue')
      },
      // 快递作业管理
      {
        path: 'express',
        component: () => import('@/pages/logistics/outlet/express/express.vue'),
        children: [
          {
            path: 'pickuptask',
            component: () => import('@/pages/logistics/outlet/express/cpns/pickuptask.vue'),
          },
          {
            path: 'dispatchtask',
            component: () => import('@/pages/logistics/outlet/express/cpns/dispatctask.vue'),
          },
          {
            path: 'cancel',
            component: () => import('@/pages/logistics/outlet/express/cpns/cancel.vue'),
          }
        ]
      },
      // 快递员作业范围管理
      {
        path: 'expressman',
        component: () => import('@/pages/logistics/outlet/expressman.vue')
      },
      // 货品类型
      {
        path: 'goods',
        component: () => import('@/pages/logistics/outlet/goods.vue')
      },
      // 车型管理
      {
        path: 'carsType',
        component: () => import('@/pages/logistics/transportCenter/carsType.vue')
      },
      // 车队
      {
        path: 'cars',
        component: () => import('@/pages/logistics/transportCenter/cars.vue')
      },
      // 车辆管理
      {
        path: 'carsManage',
        component: () => import('@/pages/logistics/transportCenter/carsManage.vue')
      },
      // 司机管理
      {
        path: 'driverManage',
        component: () => import('@/pages/logistics/transportCenter/driverManage.vue')
      },
      // 路线管理
      {
        path: 'routeManage',
        component: () => import('@/pages/logistics/transportCenter/routeManage.vue')
      },
      // 路线类型管理
      {
        path: 'routeTypeManage',
        component: () => import('@/pages/logistics/transportCenter/routeTypeManage.vue')
      },
      // 运输任务管理
      {
        path: 'task',
        component: () => import('@/pages/logistics/transportManage/task.vue')
      },
      // 司机作业单管理
      {
        path: 'driverManage',
        component: () => import('@/pages/logistics/transportManage/driverManage.vue')
      },
      // 机构数据看板
      {
        path: 'organizationData',
        component: () => import('@/pages/logistics/transportManage/organizationData.vue')
      },
      // 调度信息
      {
        path: 'depolyInfo',
        component: () => import('@/pages/logistics/deploy/depolyInfo.vue')
      },
      // 智能调度
      {
        path: 'intelDepoly',
        component: () => import('@/pages/logistics/deploy/intelDepoly.vue')
      },
      // 组织管理
      {
        path: 'orgnization',
        component: () => import('@/pages/system/orgnization.vue')
      },
      // 岗位管理
      {
        path: 'station',
        component: () => import('@/pages/system/station.vue')
      },
      // 用户管理
      {
        path: 'user',
        component: () => import('@/pages/system/user.vue')
      },
      // 菜单管理
      {
        path: 'menu',
        component: () => import('@/pages/system/menu.vue')
      },
      // 角色管理
      {
        path: 'role',
        component: () => import('@/pages/system/role.vue')
      },
      // 文件管理
      {
        path: 'files',
        component: () => import('@/pages/system/files.vue')
      },
      // 登录日志
      {
        path: 'loginRecord',
        component: () => import('@/pages/monitor/loginRecord.vue')
      },
      // 操作日志
      {
        path: 'operation',
        component: () => import('@/pages/monitor/operation.vue')
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    const isLogin = getIsLogin()
    if (isLogin) {
      next()
    } else {
      next('/login')
    }
  }
})

export default router