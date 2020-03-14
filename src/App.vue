<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- item沒有使用組件
    <div>
        <div>
            <input type="text" v-model="inputStr" class="input-box" v-on:keyup.13="addItem()">
            <button class="btn create" @click="addItem()">新增</button>
        </div>
        <ul>
            <li>
                <div class="li-title">事情</div>
                <div class="li-title">功能</div>
            </li>
            <li v-for="item in list" :key="item.id">
                <div class="things" @click="toggleFinish(item.id)" :class="{isFinished:item.finished}">{{item.thing}}</div>
                <div class="function-btn">
                    <button class="btn delete" @click="deleteItem(item.id)">刪除</button>
                    <button class="btn finish" @click="toggleFinish(item.id)">完成</button>
                    <button class="btn modify">更改</button>
                </div>
            </li>
        </ul>
    </div> 
    -->
   <div>
        <div>
            <input type="text" v-model="inputStr" class="input-box" v-on:keyup.13="addItem()">
            <button class="btn create" @click="addItem()">新增</button>
        </div>
        <TodoList
        :todo-list="list"
        :input-str="inputStr"
        >
        </TodoList>
    </div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import TodoList from './components/TodoList.vue'
//import TodoItem from './components/TodoItem.vue'
export default {
  name: 'App',
  components: {
    //HelloWorld,
    TodoList,
    //TodoItem
  },
  data () {
      return{
          inputStr:"",
          list:[
              {id:0, thing:"吃飯", finished:false, isEdit:false},
              {id:1, thing:"睡覺", finished:false, isEdit:false},
              {id:2, thing:"打東東", finished:false, isEdit:false}
          ],
      }
  },
  methods:{
    addItem(){
        let ind = 0;
        this.list.forEach((item) => {
            if(ind < item.id){
                ind = item.id;
            }
        });
        this.list.push({id:ind+1, thing:this.inputStr, finished:false, isEdit:false});
        this.inputStr = "";
    }
  }
  /*
  methods:{
      toggleFinish(itemId){
          this.list.forEach((item) => {
              if(item.id == itemId){
                  item.finished = !item.finished;
              }
          });
      },
      deleteItem(itemId){
          let newList = this.list;
          this.list.forEach((item,index) => {
              if(item.id == itemId){
                  let id = index;
                  newList.splice(id, 1);
              }
          });
          this.list = newList;
      },
      addItem(){
          let ind = 0;
          this.list.forEach((item) => {
              if(ind < item.id){
                  ind = item.id;
              }
          });
          this.list.push({id:ind+1, thing:this.inputStr, finished:false});
          this.inputStr = "";
      }
  }
  */
}
</script>

<style>
    #app {
        font-family: '微軟正黑體', Courier, monospace;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        max-width:960px;
        color: #2c3e50;
        margin: 0 auto;
        margin-top: 60px;
    }
    #main-logo{
        margin: 0 auto;
    }
    .input-box{
        height:25px;
        margin:0 10px;
        font-size: 20px;
        border-radius: 5px;
    }
    .btn{
        width:100px;
        height:30px;
        border-radius:5px;
        color: aliceblue;
        font-size:18px;
        cursor: pointer;
        font-weight: bolder;
        font-family: '微軟正黑體', Courier, monospace;
    }
    .btn:hover{
        background-color: aliceblue;
    }
    .create{
        border:3px solid #FFC107;
        background-color: #FFC107;
    }
    .create:hover{
        color:#FFC107;
    }
    ul{ 
        width:100%;
        margin:20px auto;
        font-size: 20px;
        font-family: '微軟正黑體', Courier, monospace
    }
    li{
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding:15px;
    }
    .li-title{
        font-size: 30px;
        border-bottom:5px solid #35495E;
    }

    .function-btn{
        display: flex;
        flex-direction: row;
        justify-content:space-around;
    }
    
    .delete{
        background-color: #DC3545;
        border:3px solid #DC3545;
    }
    .delete:hover{
        color:#DC3545;
    }
    .finish{
        background-color: #007BFF;
        border:3px solid #007BFF;
    }
    .finish:hover{
        color:#007BFF;
    }
    .modify{
        background-color: #17A2B8;
        border:3px solid #17A2B8;
    }
    .modify:hover{
        color:#17A2B8;
    }
    .isFinished{
        text-decoration:line-through;
        color:gray;
    }
    @media screen and (max-width:700px){
        li{
            grid-template-columns: 1fr;
        }
        .no-import{
            display: none;
        }
        .function-btn{
            margin-top: 10px; 
        }
    }
    @media screen and (max-width:700px){
        .btn{
            width:65px;
        }
        .input-box{
            width:200px;
        }
    }
    @media screen and (max-width:288px){
        .create{
            margin-top:10px;
        }
    }
</style>
