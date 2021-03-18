<template>
<div class="equipos">
  <p>Equipos</p>
    <img alt="imagen clubs" src="../assets/clubs.png" class="clubsimg">
  <slot name="equipostest"></slot>
</div>
</template>

<script>
export default {
    Name: 'Equipos'
}
</script>

<style>
    p{
  padding-bottom: 0.5rem;
  padding-left: 15rem;
}

.clubsimg{
  padding-left:18rem;

}
</style>