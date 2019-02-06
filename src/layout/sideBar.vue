<template>
        <el-container>
                <el-aside width="200px">
                       <el-menu
                       :router="true"
                       :unique-opened="true"
                        default-active="2"
                        class="el-menu-vertical-demo">
                                <el-submenu index="1">
                                    <template slot="title">
                                    <i class="el-icon-location"></i>
                                    <span>用户管理</span>
                                    </template>
                                    <el-menu-item index="/user">
                                        <i class='el-icon-loading'></i>
                                        用户列表
                                        </el-menu-item>
                                </el-submenu>
                                <el-submenu index="2">
                                    <template slot="title">
                                        <i class='el-icon-document'></i>
                                        <span>权限管理</span>
                                    </template>
                                    <el-menu-item index="2-1">
                                        <i class="el-icon-loading"></i>
                                        角色列表
                                        </el-menu-item>
                                       <el-menu-item index="2-2">
                                            <i class="el-icon-loading"></i>
                                           权限列表</el-menu-item>
                                </el-submenu>
                                <el-submenu index="3">
                                    <template slot="title">
                                        <i class='el-icon-time'></i>
                                        <span>商品管理</span>
                                    </template>
                                    <el-menu-item index="3-1">
                                         <i class="el-icon-loading"></i>
                                        商品列表</el-menu-item>
                                    <el-menu-item index="3-2">
                                         <i class="el-icon-loading"></i>
                                        分类参数</el-menu-item>
                                    <el-menu-item index="3-3">
                                         <i class="el-icon-loading"></i>
                                        商品分类</el-menu-item>
                                </el-submenu>
                                <el-submenu index="4">
                                    <template slot="title">
                                        <i class="el-icon-menu"></i>
                                        <span>订单管理</span>
                                    </template>
                                    <el-menu-item index="4-1">
                                         <i class="el-icon-loading"></i>
                                        订单列表</el-menu-item>
                                </el-submenu>
                                <el-submenu index="5">
                                    <template slot="title">
                                        <i class='el-icon-upload'></i>
                                        <span>数据统计</span>
                                    </template>
                                    <el-menu-item index="5-1">
                                         <i class="el-icon-loading"></i>
                                        数据报表</el-menu-item>
                                </el-submenu>
                        </el-menu>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
</template>

<script>
export default {

}
</script>

<style>
      /* aside */
  .el-menu-vertical-demo{
       height:100%;
  }
</style>
