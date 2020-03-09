<template>
    <div>
        <div class="box">
            <div class="row" v-if="data.length > 0">
                <div class="first"> Ticket ID :</div>
                <div class="sec">{{data[0].id}}</div>
            </div>
            <div class="row">
                <div class="first"> Issue :</div>
                <div class="sec">{{data[0].data.data}}</div>
            </div>
            <div class="row">
                <div class="first"> Assigned to :</div>
                <div class="sec">{{data[0].data.assignee}}</div>
            </div>
            <div class="row">
                <div class="first"> Status :</div>
                <div class="sec">
                    <div v-if="data[0].data.status == 0" class="tag green">Open</div>
                    <div v-if="data[0].data.status == 1" class="tag blue">In Progress</div>
                    <div v-if="data[0].data.status == 2" class="tag red">Closed</div>
                </div>
            </div>
            <div class="row">
                <div class="first"> Created Date :</div>
                <div class="sec">{{new Date(data[0].created_date).toLocaleString()}}</div>
            </div>
            <div class="row">
                <div class="first"> Modified Date :</div>
                <div class="sec">{{new Date(data[0].modified_date).toLocaleString()}}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .tag{
        float: left;
        padding: 4px;
        border-radius: 4px;
        color: white;
        font-weight: bold;
    }
    .red{
        background-color: red;
    }
    .blue{
        background-color: blue;
    }
    .green{
        background-color: green;
    }
    .box{
        width: 830px;
        margin: 0px auto;
        padding: 20px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .row{
        display: flex;
        margin-bottom: 14px;
    }
    .first{
        flex: 1;
        text-align: right;
        padding-right: 60px;
    }
    .sec{
        flex : 1
    }
</style>
<script>
import axios from 'axios';

export default {
    name : "TicketView",
    props : ["id"],
    data(){
        return {
            data : [],
        }
    },
    created(){
        if(this.id){
            axios.get("http://localhost:3000/ticket/"+this.id).then((res) => {
                res.data[0].data = JSON.parse(res.data[0].data);
                this.data = res.data;
            });
        }
    }
}
</script>