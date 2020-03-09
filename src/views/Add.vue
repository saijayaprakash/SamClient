<template>
  <div class="about">
    <center>
      <form @submit="addTicket" class="form-style">
        <input type="text" placeholder="Your Issue" v-model="data" class="input-box"/>
        <input type="text" placeholder="Assignee" v-model="guy" class="input-box"/>
        <select v-model="status" class="select-menu">
          <option v-for="val in statuses" v-bind:key="val.id" :value="val.id">{{val.value}}</option>
        </select>
        <input type="submit" />
      </form>
      <router-link to="/">Back</router-link>
    </center>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name : "Add",
  props : ["id"],
  data() {
    return {
      data : "",
      guy : "",
      status : 0,
      statuses : [
        {"id":0, "value": "Open"},
        {"id":1, "value": "In Progress"},
        {"id":2, "value": "Closed"}
      ]
    }
  },
  methods : {
    addTicket(e){
      e.preventDefault();
      if(this.id){
        axios.put("http://localhost:3000/ticket",{"data":this.data, "id": this.id, "assignee" : this.guy, "status": this.status}).then( (res) => {
          console.log(res);
          this.$router.push('/');
        });
      }
      else{
        axios.post("http://localhost:3000/ticket",{"data":this.data,"assignee" : this.guy, "status": this.status}).then((res) => {
          this.data = "";
          this.guy = "";
          console.log(res);
          this.$router.push('/');
        });
      }
    }
  },
  created(){
    if(this.id){
      axios.get("http://localhost:3000/tickets/"+this.id).then((res) => {
        let x = JSON.parse(res.data[0].data);
        this.data = x.data;
        this.guy = x.assignee;
        this.status = x.status;
      });
    }
  }
}
</script>

<style scoped>
  .input-box{
    height: 30px;
    border: 0px;
    border-bottom: 2px solid grey;
    margin-bottom: 10px;
    width: 322px;
    font-size: 23px;
  }

  .form-style{
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 50px;
  }
  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
      outline: none;
  }
  .select-menu{
    font-size: 20px;
    margin-bottom: 20px;
  }
</style>