<template>
    <div class='box'>
        <div class="content">
            <h2>用户登录</h2>
            <el-form label-position="top" :rules="rules" :model="loginObj" status-icon ref="loginRule" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="username">
                    <el-input type="text" v-model="loginObj.username" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="loginObj.password" autocomplete="off"></el-input>
                </el-form-item>
    
                <el-form-item>
                    <el-button type="primary" @click.prevent='login()' class="mybtn">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loginObj: {
                username: '',
                password: ''
            },
            rules:{
                username:[
                    { required: true, message: '请输入用户名', trigger: 'blur' }
                ],
                password:[
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        login(){
             this.$refs.loginRule.validate(async(valid)=>{
                  if(valid){
                      var res=await this.$http.post('/login',this.loginObj);
                      var {meta,data}=res.data;
                      if(meta.status===200){
                               this.$router.push('/home');
                           this.$message({
                                message:meta.msg,
                                type:'success'
                           });
                           window.localStorage.setItem('token',data.token);
                      
                      }else{
                         this.$message.error(meta.msg);
                      }
                  }else{
                       this.$message.error(meta.msg);
                  }
             })
        }
        // login(){
            //     this.$refs.loginRule.validate((valid) => {
            //             if (valid) {
            //                 this.$http.post('/login', this.loginObj)
            //                     .then(data => {
            //                         var { meta, data } = data.data;
            //                         if (meta.status === 200) {
            //                             alert('ok');
            //                         } else {
            //                             alert("no");
            //                         }
            //                     })
            //             }else{
            //                  alert('fail');
            //             }         
                    
            //      })
            
        // }
    }
    
}
</script>

<style>
.box {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #2c3742;
}

.content {
    position: absolute;
    width: 500px;
    padding: 40px;
    background-color: #fff;
    border-radius: 11px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

h2 {
    padding-bottom: 11px;
}

.mybtn {
    width: 100%;
}
</style>
