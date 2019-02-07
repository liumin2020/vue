<template>
    <div class="home">
      <el-container>
            <el-header>
              <!-- header -->
              <Top/>
            </el-header>
        <!-- sideBar -->
             <sideBar/>
        </el-container>
    </div>
</template>
 
<script>
 import Top from '@/layout/top.vue';
 import SideBar from '@/layout/sideBar.vue';
export default {
   components:{
        Top,
        SideBar
   },
   beforeCreate(){
        var token=window.localStorage.getItem('token');
        if(!token){
             this.$router.push('/login');
             this.$message.error('您还没有登录，请现登录');
             return;
        }
   }

}
</script>

<style>
    .home,.el-container{
     height:100%;
}
.el-header{
    background-color: #B3C0D1;
    color: #333;
    line-height:60px;
    padding:0
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
  }
 
 
</style>
