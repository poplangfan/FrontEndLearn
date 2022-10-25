<template>
    <div class="login-box">
        <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules" label-width="120px"
            class="demo-ruleForm">
            <h2>后台管理系统</h2>
            <el-form-item label="账号" prop="username">
                <el-input v-model="ruleForm.username" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item>
                <el-button class="loginBtn" type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
                <el-button class="loginBtn" @click="resetForm(ruleFormRef)">Reset</el-button>
            </el-form-item>
        </el-form>
    </div>
    <RouterView />
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
    setup() {
        const data = reactive({
            ruleForm: {
                username: "",
                password: ""
            },

        });
        // const data = reactive(new loginData());
        const rules={
                username: [
                    { required: true, message: '请输入账号', trigger: 'blur' },
                    { min: 3, max: 10, message: '账号长度3-10', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 10, message: '密码长度6-10', trigger: 'blur' },
                ]
            }
        // data解构
        return { ...toRefs(data), rules }
    }
})
</script>

<style lang="scss" scoped>
.login-box {
    width: 100%;
    height: 100%;
    background: url("../assets/bg.jpg");
    padding: 1px;
    text-align: center;
    // position: fixed;
    .demo-ruleForm{
        width: 500px;
        margin:200px auto;
    }
    .loginBtn{
        width: 48%;
    }
    h2{
        margin-bottom: 10px;
    }
}
</style>