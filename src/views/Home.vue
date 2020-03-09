<template>
  <div class="home">
    <ListView v-bind:tickets="tickets" v-on:del="deleteTicket" v-on:close="closeTicket"/>
  </div>
</template>

<script>
import ListView from '../components/ListView';
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    ListView
  },
  data() {
    return {
      tickets : [],
    }
  },
  methods : {
    deleteTicket(id){
      axios.delete("http://localhost:3000/ticket",
          {
            "data" : {"id":id}
          }
        ).then(() => {
          this.tickets = this.tickets.filter(function(ticket){
            return ticket.id != id;
          });
      });
    },
    closeTicket(id){

      axios.put("http://localhost:3000/close_ticket",{"id":id}).then(() => {
        for(let i=0;i<this.tickets.length;i++){
          if(id == this.tickets[i].id){
            this.tickets[i].data.status = 2;
          }
        }
      });
    }
  },
  created(){
    axios.get("http://localhost:3000/tickets").then((res) => {
      this.tickets = res.data;
      for(let i=0;i < this.tickets.length; i++){
        this.tickets[i].data = JSON.parse(this.tickets[i].data);
        this.tickets[i].created_date = new Date(this.tickets[i].created_date).toLocaleString();
        this.tickets[i].modified_date = new Date(this.tickets[i].modified_date).toLocaleString();
      }
    });
  }
}
</script>
