<template>
  <div id="app">
    <Header/>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/add">+ Add Ticket</router-link>
    </div>
    <div class="search">
      <router-link to="/search">Search</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/layout/Header';

export default {
  name : "App",
  components : {
    Header
  }  
}
</script>

<style>
.search{
    text-align: right;
    padding-right: 20px;
    font-size: 20px;
    cursor: pointer;
    text-decoration: underline;
    color: blue;
    margin-bottom: 20px;
}
#nav a{
  padding: 10px;
    border: 1px solid;
    background-color: green;
    color: white !important;
    text-decoration: none;
  margin-right: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body{
  margin: 0px;
}
</style>
