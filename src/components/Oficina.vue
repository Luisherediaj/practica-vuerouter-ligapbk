<template>
<div class="oficina">
  <p>Oficina central</p>
    <img alt="imagen clubs" src="../assets/oficina.png" class="oficinaimg">
  <slot name="oficinatest"></slot>
</div>
</template>

<script>
export default {
    Name: 'Oficina'
}
</script>

<style>
    p{
  padding-bottom: 0.5rem;
  padding-left: 15rem;
}

.oficinaimg{
  padding-left:18rem;
  padding-top:2rem;

}
</style>