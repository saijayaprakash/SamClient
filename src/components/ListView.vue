<template>
    <div>
        <div class="list-head">
            <div style="width: 20%;float:left;">ID</div>
            <div style="width: 30%;float:left;">Issue</div>
            <div style="width: 15%;float:left;">Created Date</div>
            <div style="width: 15%;float:left;">Updated on</div>
            <div style="width: 20%;float:left;">Quick Actions</div>
        </div>
        <div v-for="ticket in tickets" v-bind:key="ticket.id">
            <Ticket v-bind:ticket="ticket" v-on:del="$emit('del',ticket.id)" v-on:close="$emit('close', ticket.id)"/>
        </div>
    </div>
</template>

<script>
import Ticket from './Ticket';

export default {
    name : "ListView",
    props : ["tickets"],
    components : {
        Ticket
    }
}
</script>

<style scoped>
    .list-head{
        width:100%;
        float: left;
        font-weight: bold;
        border: 1px solid black;
        padding: 10px;
    }
</style>