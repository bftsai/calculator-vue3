<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/about" class="nav-link">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script>
// import { RouterLink, RouterView } from 'vue-router'
</script>

<style lang="css">
header{
  padding-top: 32px;
}
nav{
  width: 500px;
}
.nav-link{
  text-decoration: none;
  color: #000;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
}
.nav-link:hover{
  color: #706d6d;
}
.nav-link.active{
  color: #7a7878;
}
.container{
  max-width: 1360px;
  padding-left: 32px;
  padding-right: 32px;
}
</style>
