<template>
<div class="copa">
    <h3 class="copatitulo">Jornadas de PBKopa</h3>
    <slot name="copatest"></slot>
</div>
</template>

<script>
export default {
    Name: 'Copa'
}
</script>

<style>

.copatitulo{
    padding-left:27rem;
    padding-top: 6rem;
    color: rgb(221, 159, 26)
}
</style>