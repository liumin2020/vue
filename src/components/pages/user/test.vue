<template>
    <el-card>
        <!-- breadcrumb -->
        <el-breadcrumb separator-class="el-icon-more">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- search -->
        <el-row class="search">
            <el-col :span=8>
                <el-input placeholder="请输入内容" v-model="search">
                    <el-button slot="append" icon="el-icon-search" @click="searchData()"></el-button>
                </el-input>
            </el-col>
            <el-col :span=16>
                &nbsp;&nbsp;
                <el-button type="success" plain @click="addDialog=true">添加用户</el-button>
            </el-col>
        </el-row>
            <!-- table -->
            <el-table :data="dataList" style="width: 100%">
                <el-table-column type='index'></el-table-column>
                <el-table-column prop="username" label="姓名" >
                </el-table-column>
                <el-table-column prop="email" label="邮箱" >
                </el-table-column>
                <el-table-column prop="mobile" label="电话">
                </el-table-column>
                <el-table-column label="用户状态">
                    <template slot-scope="scope">
                              <el-switch v-model="scope.mg_state">
                              </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="200">
                    <template>
                         <el-button type="primary" plain size="mini" icon="el-icon-edit" ></el-button>
                         <el-button type="danger"  plain size="mini" icon="el-icon-delete" ></el-button>
                         <el-button type="success" plain  size="mini" icon="el-icon-check" ></el-button>
                    </template>
                </el-table-column>
            </el-table>
            <!-- pagination -->
        <el-pagination
                    @size-change="sizeChang"
                    @current-change="currentChange"
                    :current-page="pagenum"
                    :page-sizes="[5,10]"
                    :page-size="pagesize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total">
        </el-pagination>
        
        
    </el-card>
</template>

<script>
export default {
    data() {
        return {
            search: '',
            pagesize:5,
            pagenum:1,
            total:0,
            dataList:[],
            addDialog:false,
            addObj:{
                username:'',
                password:'',
                email:'',
                mobile:''

            }
        }
    },
    methods:{
        async getAllList(){
             var res=await this.$http.get(`/users?pagenum=${this.pagenum}&pagesize=${this.pagesize}&query=${this.search}`,{
                 headers:{
                      'Authorization':window.localStorage.getItem('token')
                 }
             });
               console.log(res);
                     
             
         },
         sizeChang(size){
              this.pagesize=size;
              this.getAllList(); 
         },
         currentChange(num){
             this.pagenum=num;
             this.getAllList();
         },
         searchData(){
              this.getAllList();
         },
         clearData(obj){
             for(var item in obj){
                  obj[item]='';
             }
         },
         cancel(){
               this.clearData(this.addObj);
               this.addDialog=false;
         }
        
    },
    mounted(){
         this.getAllList();
    }

}
</script>

<style>
.search {
    margin: 15px 0;
}
</style>
