<template>
    <div>
       <input type="text" value="inputtext" @change="handleChange">
        <button @click="handleAdd">Add</button>
    </div>
</template>
<script>
export default {
    name:"CreateForm",
    data:function(){
        return{
            inputtext:""
        }
    },
    methods:{
        handleAdd:function(){
            this.$emit("newinputtext",this.inputtext);
        },
        handleChange:function(){
            this.inputtext=event.target.value
        }
    }
}
</script>