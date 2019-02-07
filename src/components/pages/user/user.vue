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
                <el-button type="success" plain>添加用户</el-button>
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
                              <el-switch v-model="scope.row.mg_state">
                              </el-switch>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="200">
                    <template slot-scope="scope">
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
        <!-- 新增用户 -->
           <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                    <el-form-item label="活动名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="活动区域" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
          </el-dialog>
        
    </el-card>
</template>

<script>
export default {
    data() {
        return {
            search: '',
            pagesize:5,
            pagenum:1,
            total:'',
            dataList:[]
        }
    },
    methods:{
        async getAllList(){
             var res=await this.$http.get(`/users?pagenum=${this.pagenum}&pagesize=${this.pagesize}&query=${this.search}`,{
                 headers:{
                      Authorization:window.localStorage.getItem('token')
                 }
             });
                var {meta,data}=res.data;
                this.dataList=data.users;
                this.total=data.total;
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
