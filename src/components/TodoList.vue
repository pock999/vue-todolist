<template>
    <ul>
        {{inputStr}}
        <li>
            <div class="li-title">事情</div>
            <div class="li-title no-import">功能</div>
        </li>
        <li v-for="item in todoList" :key="item.id">
            <!-- 若是isEdit為false，表示目前該項目狀態為不可編輯，所以用div顯示 -->
            <div v-show="item.isEdit == false">
                <div class="things" @click="toggleFinish(item.id)" :class="{isFinished:item.finished}">{{item.thing}}</div>
            </div>
            <!-- 若是isEdit為true，表示目前該項目狀態為可編輯，所以用input顯示 -->
            <div v-show="item.isEdit == true">
                <input type="text" v-model="modifyText" class="input-box" 
                v-on:keyup.13="modifyItem(item.id)">
            </div>

            <div class="function-btn">
                <button class="btn delete" @click="deleteItem(item.id)">刪除</button>
                <button class="btn finish" @click="toggleFinish(item.id)">完成</button>
                <button class="btn modify" @click="modifyToInput(item.id)">更改</button>
            </div>
        </li>
    </ul>
</template>
<script>

export default {
    name:'TodoList',
    props:['todoList','inputStr'],
    data () {
        return{
            // 表示有無更改之狀態，
            // ->若有，按下更改就是更改該項目
            // ->若無，按下更改就是呼叫更改框出來
            haveAnyModify:false,
            modifyText:"",
        }
    },
    methods:{
      toggleFinish(itemId){
          this.todoList.forEach((item) => {
              /** 更改目前完成狀態 **/
              if(item.id == itemId){
                  item.finished = !item.finished;
              }
          });
      },
      deleteItem(itemId){
          let newList = this.todoList;
          this.todoList.forEach((item,index) => {
              /** 刪除選定之項目 **/
              if(item.id == itemId){
                  let id = index;
                  newList.splice(id, 1);
              }
          });
          this.todoList = newList;
      },
      modifyToInput(itemId){
        if(this.haveAnyModify == false){
            //若現在沒有更改狀態，就呼叫更改框出來
            this.todoList.forEach((item) => {
            if(item.id == itemId){
                item.isEdit = !item.isEdit;
                this.haveAnyModify = !this.haveAnyModify;
                if(item.isEdit == true){
                    this.modifyText = item.thing;
                }
            }
        });
        }else{
            //表示目前有更改框，所以呼叫更改項目的方法(modifyItem)
            this.modifyItem(itemId);
        }
          
      },
      modifyItem(itemId){
        this.todoList.forEach((item) => {
              if(item.id == itemId){
                  item.thing = this.modifyText;
                  this.modifyText = '';
                  item.isEdit = !item.isEdit;
                  this.haveAnyModify = !this.haveAnyModify;
              }
          });
      }
  }
}
</script>

<style>
    
</style>