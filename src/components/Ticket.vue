<template>
    <div>
        <div class="ticket-row" v-bind:class="{'green': (ticket.data.status == 0), 'red': (ticket.data.status == 2), 'blue': (ticket.data.status == 1)}">
            <div style="width:20%;float:left"><router-link :to="{name : 'Add', params: {id: ticket.id}}">{{ticket.id}}</router-link> </div>
            <div style="width:30%;float:left">
                <p class="title">{{ticket.data.data}}</p>
                <p>Assignee : {{ticket.data.assignee}}</p>
            </div>
            <div style="width:15%;float:left">{{ticket.created_date}}</div>
            <div style="width:15%;float:left">{{ticket.modified_date}} </div>    
            <div style="width:20%;float:left;color:red;">
                <p style="float:left;cursor:pointer;margin-right: 25px;color:blue"><router-link :to="{name : 'TicketView', params: {id: ticket.id}}">View</router-link></p>
                <p @click="$emit('close',ticket.id)" style="float:left;cursor:pointer;margin-right: 25px;color:blue" v-show="ticket.data.status != 2">Close</p>
                <p @click="deleteTicket" style="float:left;cursor:pointer;">Delete</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "Ticket",
    props : ["ticket"],
    methods : {
        deleteTicket(){
            this.$emit('del',this.ticket.id);
        }
    }
}
</script>

<style scoped>
    .title{
        font-size: 21px;
        font-weight: 500;
    }
    p{
        margin: 0px;
    }
    .red{
        background-color: #ffe7e7;
    }
    .green{
        background-color: #f3fff3;
    }
    .blue{
        background-color: #eaeaff;
    }
    .ticket-row{
        float: left;
        width: 100%;
        padding: 10px 10px;
    }
</style>