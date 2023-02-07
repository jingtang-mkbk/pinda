<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible width="235">
      <div class="logo">
        <img src="@/assets/img/layout-logo.png" alt="" v-if="!collapsed">
        <img src="@/assets/img/layout-logo-mini.png" alt="" style="width: 80px;" v-else>
      </div>
      <a-menu
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      :open-keys="openKeys"
      @openChange="onOpenChange"
      @select="selectClick"
    >
      <a-sub-menu v-for="it,index in RouterList" :key="it.key" @click="breadcrumbOne = it.name">
        <template #icon>
          <CarOutlined v-if="it.icon === 'CarOutlined'" />
          <VideoCameraOutlined v-else-if="it.icon === 'VideoCameraOutlined'" />
          <SettingOutlined v-else />
        </template>
        <template #title>{{ it.name }}</template>
        <div v-if="index===0">
          <a-sub-menu v-for="item in it.children" :key="item.key" @click="breadcrumbTwo = item.name">
            <template #title>{{ item.name }}</template>
            <div v-if="it.children">
              <a-menu-item 
              v-for="item3 in item.children" 
                :key="item3.key" 
                @click="breadcrumbThree = item3.name"
              >{{ item3.name }}</a-menu-item>
            </div>
          </a-sub-menu>
        </div>
        <div v-else>
          <a-menu-item 
            v-for="item in it.children" 
            :key="item.key" 
            @click="breadcrumbTwo = item.name; breadcrumbThree = ''"
          >{{ item.name }}</a-menu-item>    
        </div>
      </a-sub-menu>

    </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0; display: flex; justify-content: space-between;" >
        <div class="header-left">
          <menu-unfold-outlined
            v-if="collapsed"
            class="trigger"
            @click="() => (collapsed = !collapsed)"
          />
          <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
          <a-breadcrumb>
            <a-breadcrumb-item @click="backToIndex">系统首页</a-breadcrumb-item>
            <a-breadcrumb-item v-if="breadcrumbOne">{{breadcrumbOne}}</a-breadcrumb-item>
            <a-breadcrumb-item v-if="breadcrumbTwo">{{breadcrumbTwo}}</a-breadcrumb-item>
            <a-breadcrumb-item v-if="breadcrumbThree">{{breadcrumbThree}}</a-breadcrumb-item>
          </a-breadcrumb>
        </div>
        <div class="header-right">
          <a-dropdown>
            <div class="right-inner" @click.prevent>
              <img src="" alt="">
              <p>平台管理员&nbsp;<DownOutlined /></p>
            </div>
            <template #overlay>
              <a-menu style="text-align: center;">
                <a-menu-item>
                  <div @click="userCenter">个人中心</div>
                </a-menu-item>
                <a-menu-item>
                  <div @click="logout">退出登录</div>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import { CarOutlined, VideoCameraOutlined, SettingOutlined, MenuUnfoldOutlined, MenuFoldOutlined, DownOutlined } from '@ant-design/icons-vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import RouterList from './config'

const collapsed = ref(false)
const rootSubmenuKeys = ref(['sub1', 'sub2', 'sub3'])
const openKeys = ref([])
const selectedKeys = ref(['1'])
const router = useRouter()
const breadcrumbOne = ref('')
const breadcrumbTwo = ref('')
const breadcrumbThree = ref('')

// 点击收起分栏
const onOpenChange = val => {
  const latestOpenKey = val.find(key => openKeys.value.indexOf(key) === -1)
  if (rootSubmenuKeys.value.indexOf(latestOpenKey) === -1) {
    openKeys.value[1] = latestOpenKey;
  } else {
    openKeys.value = latestOpenKey ? [latestOpenKey] : [];
  }
}

// 路由跳转
const selectClick = () => {
  router.push(selectedKeys.value[0])
}

// 个人中心
const userCenter = () => {
  console.log('个人中心')
}

// 退出登录
const logout = () => {
  console.log('退出登录')
}
// 点击面包屑返货首页
const backToIndex = () => {
  router.push('/')
  breadcrumbOne.value = ''
  breadcrumbTwo.value = ''
  breadcrumbThree.value = ''
}

</script>

<style lang="scss" scoped>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}

.logo {
  height: 64px;
  background: #fff;
  text-align: center;
  line-height: 64px;
  background-image: linear-gradient(90deg,#d92e2c,#f86e2b);

  img{
    width: 160px;
    height: 42px;
  }
}

.site-layout .site-layout-background {
  background: #fff;
}

.ant-layout{
  height: 100%;
  min-width: 1100px;

  .ant-layout-sider{
    background-color: #fff;
  }

  .header-left{
    display: flex;
    align-items: center;
  }
  .header-right{
    margin: 0 24px;
    display: flex;
    align-items: center;

    .right-inner{
      display: flex;
      align-items: center;
      cursor: pointer;

      img{
        display: block;
        width: 32px;
        height: 32px;
        margin-right: 10px;
        background-color: pink;
        border-radius: 16px;
      }

      p{
        margin: 0;
      }
    }
  }
}
.ant-dropdown-menu-item, .ant-dropdown-menu-submenu-title{
  text-align: center;
}

.ant-layout-content{
  margin: 16px !important;
  background-color: #f3f4f7 !important;
  padding: 0 !important;
  overflow-y: auto;

  
}
.ant-breadcrumb{
  cursor: pointer;
}
::-webkit-scrollbar {
  width: 0;
  height: 0;
}
</style>