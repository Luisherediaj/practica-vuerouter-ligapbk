<template>
<div class="liga">
    <h3 class="ligaPBKtitulo">LIGA PBK</h3>
    <img alt="intro clasificacion" src="../assets/clasificacion.png" class="clasificacionImg">
    <img alt="imagen clasificacion" src="../assets/clasificacionfinal.png" class="clasificacionImg">
    <h3 class="jornadas">Jornada 1</h3>
    <h3 class="jornadas">Jornada 2</h3>
    <h3 class="jornadas">Jornada 3</h3>
    <h3 class="jornadas">Jornada 4</h3>
    <h3 class="jornadas">Jornada 5</h3>
    <h3 class="jornadas">Jornada 6</h3>
    <h3 class="jornadas">Jornada 7</h3>
    <h3 class="jornadas">Jornada 8</h3>
    <h3 class="jornadas">Jornada 9</h3>
    <h3 class="jornadas">Jornada 10</h3>
    <h3 class="jornadas">Jornada 11</h3>
    <h3 class="jornadas">Jornada 12</h3>
    <h3 class="jornadas">Jornada 13</h3>
    <h3 class="jornadas">Jornada 14</h3>
    <slot name="ligatest"></slot>
</div>
</template>

<script>
export default {
    Name: 'Liga'
}
</script>

<style>
.clasificacionImg{
  padding-left:18rem;
  padding-top:2rem;
}

.jornadas{
    padding-left:27rem;
    padding-top: 2rem;
    color: rgb(221, 159, 26)
}
</style>