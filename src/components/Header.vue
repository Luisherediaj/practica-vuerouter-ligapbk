<template>
  <div>
      <header>
         <h1>PBK LEAGUE 2.0</h1>
         <slot name="title"></slot>
      </header>
  </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style>

header {
  height: 5rem; /* Full-height: remove this if you want "auto" height */
  width: 100%; /* Set the width of the sidebar */
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: rgb(124, 124, 124); /* Black */
  display: flex;
  justify-content: center;
  align-items: center;
}

h1{
  text-align: center;
  font-size: 3rem;
  color: rgb(230, 209, 28);

}
</style>