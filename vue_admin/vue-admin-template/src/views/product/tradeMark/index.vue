<template>
  <div>
    <!-- 按钮 -->
    <el-button type="primary" icon="el-icon-plus" style="margin: 10px 0px" @click="showDialog">添加
    </el-button>
    <!-- 
         表格组件 
         data:表格组件将来需要展示的数据------数组类型
         border：是给表格添加边框
         column属性
         label：显示标题
         width：对应列的宽度
         align：标题的对齐方式
         prop:对应列内容的字段名
         注意1：elmentUI当中的table组件，展示的数据是以一列一列进行展示数据
       -->
    <el-table style="width: 100%" border :data="list">
      <el-table-column type="index" label="序号" width="80px" align="center"></el-table-column>
      <el-table-column prop="tmName" label="品牌名称" width=""></el-table-column>
      <el-table-column prop="logoUrl" label="品牌log" width="">
        <template slot-scope="{ row, $index }">
          <img :src="row.logoUrl" style="width: 100px; height: 100px" />
        </template>
      </el-table-column>
      <el-table-column prop="" label="操作" width="">
        <template slot-scope="{ row, $index }">
          <el-button type="warning" icon="el-icon-edit" size="mini" @click="updateTradeMark(row)">修改</el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini" @click="deleteTradeMark(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 
      分页器 
      当前第几页、数据总条数、每一页展示条数、连续页码数
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      current-page:代表的是当前第几页
      total：代表分页器一共需要展示数据条数
      page-size：代表的是每一页需要展示多少条数据
      page-sizes：代表可以设置每一页展示多少条数据
      layout：可以实现分页器布局
      pager-count:按钮的数量  如果 9  连续页码是7
    -->
    <el-pagination style="margin-top: 20px; text-align: center" :total="total" :current-page="page" :page-size="limit"
      :pager-count="7" :page-sizes="[3, 5, 10]" @current-change="handleCurrentChange" @size-change="handleSizeChange"
      layout="prev, pager, next, jumper,->,sizes,total">
    </el-pagination>

    <!-- 对话框 
    Form 组件提供了表单验证的功能，只需要通过 rules 属性传入约定的验证规则，并将 Form-Item 的 prop 属性设置为需校验的字段名即可。
    -->
    <el-dialog :title="tmForm.id?'修改品牌':'添加品牌'" :visible.sync="dialogFormVisible">
      <!-- form表单：model属性，这个属性的作用是，把表单的数据收集到指定对象身上，将来表单验证也需要 -->
      <el-form style="width:80%" :model="tmForm" :rules="rules" ref="ruleForm">
        <el-form-item label="品牌名称" label-width="100px" prop="tmName">
          <el-input autocomplete="off" v-model="tmForm.tmName"></el-input>
        </el-form-item>
        <el-form-item label="品牌Logo" label-width="100px" prop="logoUrl">
          <el-upload
            class="avatar-uploader"
            action="/dev-api/admin/product/fileUpload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="tmForm.logoUrl" :src="tmForm.logoUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addOrUpdateTradeMark">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "tradeMark",
  data() {
    return {
      //代表的分页器第几页
      page: 1,
      //当前页数展示数据条数
      limit: 3,
      // 总共数据的条数
      total: 0,
      // 列表展示的数据
      list: [],
      // 对话框显示或隐藏的控制
      dialogFormVisible: false,
      // 收集品牌信息
      tmForm:{
        tmName:'',
        logoUrl:''
      },
      // 表单验证的规则
      rules:{
        tmName: [
          // required 必须要校验的字段
            { required: true, message: '请输入品牌名称', trigger: 'blur' },
            { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'change' }
          ],
        logoUrl: [
            { required: true, message: '请选择品牌图片'}
          ],
      }

    };
  },
  mounted() {
    this.getPageList();
  },
  methods: {
    // 获取品牌列表的数据
    async getPageList() {
      const { page, limit } = this;
      //获取品牌列表的接口
      //当你向服务器发请求的时候，这个函数需要带参数，因此老师在data当中初始化两个字段，代表给服务器传递参数
      let result = await this.$API.trademark.reqTradeMarkList(page, limit);
      if (result.code == 200) {
        this.total = result.data.total;
        this.list = result.data.records;
      }
    },
    // 获取页数
    handleCurrentChange(page) {
      this.page = page;
      this.getPageList();
    },
    // 分页器需要展示的数据发生了改变
    handleSizeChange(limit) {
      this.limit = limit;
      this.getPageList();
    },
    // 点击添加品牌的按钮,显示对话框，先清理数据
    showDialog() {
      this.dialogFormVisible = true;
      this.tmForm = {tmName:'', logoUrl:''}
    },
    // 修改某一个品牌
    updateTradeMark(row) {
      // row:当前用户选中的信息
      this.dialogFormVisible = true;
      // 浅拷贝
      this.tmForm = {...row};
    },
    // 图片上传成功
    handleAvatarSuccess(res, file) {
        this.tmForm.logoUrl = res.data
      },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
    },
    // 添加按钮 添加或者修改品牌
    addOrUpdateTradeMark(){
      // 全部字段验证通过，再去处理业务逻辑
      this.$refs.ruleForm.validate(async (success)=>{
        // 如果全部字段符合条件
        if(success){
          this.dialogFormVisible = false;
          // 添加品牌
          let result = await this.$API.trademark.reqAddOrUpdateTradeMark(this.tmForm);
          if(result.code === 200){
            // 弹出信息提示
            this.$message({
              type:'success',
              message:this.tmForm.id?"修改品牌成功":"添加品牌成功"
            });
            // 重新加载
            this.getPageList()
          }
        }else{
          console.log('error submit!!');
          return false;
        }
      })
    },
    // 删除品牌
    deleteTradeMark(row){
      // 弹窗
      this.$confirm(`是否删除${row.tmName}`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async () => {
          // 发送删除请求
          let result = await this.$API.trademark.reqDeleteTradeMark(row.id)
          // 如果删除成功
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          // 再次获取品牌数据
          this.getPageList(this.list.length>1?this.page:this.page-1)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    }
  }
};
</script>



<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
