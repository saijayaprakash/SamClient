<template>
    <div>
        <form @submit="formSubmit">
            <input type="text" class="search-box" v-model="search_text"/>
            <button type="submit" class="sub"> Submit</button>
            <div class="rad-con">
                <label class="radio-inline">
                    <input type="radio" name="optradio" v-model="option" value="0">Data
                </label>
                <label class="radio-inline">
                    <input type="radio" name="optradio" v-model="option" value="1">Assignee
                </label>
                <label class="radio-inline">
                    <input type="radio" name="optradio" v-model="option" value="2">Status
                </label>            
            </div>
        </form>

        <ListView v-bind:tickets="results"/>
    </div>
</template>

<script>
import axios from 'axios';
import ListView from '../components/ListView';

export default {
    name : "Search",
    data(){
        return {
            search_text : "",
            option : 0,
            results : []
        }
    },
    components : {
        ListView
    },
    methods : {
        formSubmit(e){
            e.preventDefault();
            axios.put("http://localhost:3000/search",{"search_text":this.search_text, "option": this.option}).then( (res) => {
                this.results = [];
                for(let i=0;i<res.data.length;i++){
                    let obj = res.data[i]._source;
                    obj.created_date = new Date(obj.created_date).toLocaleString();
                    obj.modified_date = new Date(obj.modified_date).toLocaleString();
                    obj.data = JSON.parse(obj.data);
                    this.results.push(obj);
                }
            });
        }
    }
}
</script>

<style scoped>
    .rad-con{
        margin-left: 42%;
        margin-top: 20px;
    }
    .rad-con label{
        margin-right: 20px;
    }
    .search-box{
        width: 90%;
        margin-right: 20px;
        height: 30px;
        font-size: 20px;
    }
    .sub{
        height: 35px;
    }
</style>