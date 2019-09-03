<template>
    <div id="app">
        <h2>
            Vue To Do List
            Simple Todo List with adding and filter by diff status.
        </h2>
        <div>
            <createForm @newinputtext="handleNewInputText"/>
        </div>
        <div id="list">
            <ul>
                <li v-for="(item,index) in fliterTodoList" :key="index" >
                    <input type="checkbox" @change="changeStatus(item)" v-model="item.selected"/>
                    <span :class="{isSelected:item.selected}">{{item.content}}</span></li>
            </ul>
        </div>
        <div>
            <span>当前状态为{{this.$store.state.currentFilter}}</span>  
            <button @click="getStatus('all')" >All</button>
            <button @click="getStatus('active')">Active</button>
            <button @click="getStatus('completed')">completed</button>   
        </div>
        

    </div>
</template>

<script>
import createForm from "./components/CreateForm"
    export default {
        name: 'app',
        components: {
           createForm
        },
        data: function () {
            return {
                inputtext:""
            }
        },
        methods:{
            handleAdd:function(){
                console.log(this.inputtext);
                this.$store.state.todoList.push({
                    content:this.inputtext,
                    status:'active'
                }),
                this.inputtext=""
            },
            getStatus:function(status){
                this.$store.commit("getStatus",status);
            },
            handleNewInputText:function(newinputtext){
                console.log(arguments)
                this.$store.state.todoList.push({
                    content:newinputtext,
                    status:'active'
                })
            },
            changeStatus:function(item){
                if(item.selected){  
                    item.status="completed"  
                }else{
                    item.status="active"
                     console.log("71",item)
                }
            }
        },
        computed:{
            fliterTodoList:function(){
             
                return this.$store.state.todoList.filter(element => element.status == this.$store.state.currentFilter || this.$store.state.currentFilter=='all')
                
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    .items {
        list-style: none;
        text-align: left;
        line-height: 30px;
    }

    .items li.completed {
        text-decoration: line-through;
    }

    .filter a {
        margin: 0 10px;
        line-height: 30px;
    }

    .filter a.active {
        color: #f60;
        border: 1px solid #ccc;
        border-radius: 2px;
        padding: 3px;
        cursor: pointer;
    }

    .isSelected{
        text-decoration:line-through
    }
</style>
