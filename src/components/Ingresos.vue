<template>
<div class="cooa">
    <img alt="ingresos" src="../assets/gratificaciones.png" class="gratificacionesImg">
    <h3 class="patrocinadores">Patrocinadores</h3>
    <img alt="patrocindores" src="../assets/patrocinadores.png" class="patrocinadoresImg">
    <h3 class="patrocinadores">Bonificaciones</h3>
    <img alt="patrocindores" src="../assets/bonificaciones.png" class="patrocinadoresImg">
    <slot name="ingresostest"></slot>
</div>
</template>

<script>
export default {
    Name: 'Ingresos'
}
</script>

<style>
.gratificacionesImg{
  padding-left:18rem;
  padding-top:5rem;
}

.patrocinadoresImg{
  padding-left:18rem;
  padding-top:1rem;
}

.patrocinadores{
    padding-left:27rem;
    padding-top: 1rem;
    color: rgb(221, 159, 26)
}
</style>