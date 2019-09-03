export default{
    strict:true,
    state: {
      // 应用的数据
      test: 'hello vuex',
      todoList: [
            {content:"吃饭",status:'active',selected:false},
            {content:"做作业",status:'active',selected:false}
        ],
        currentFilter: 'all'
    },
    getters:{

    },
    mutations:{
        getStatus(state,status){
            state.currentFilter=status;
        }
    }
  }