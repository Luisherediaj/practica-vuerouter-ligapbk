<template>
<div class="fechas">
    <h3 class="calendarioGlobal">Calendario de competiciones. Temporada 2020/2021</h3>
    <img alt="imagen clubs" src="../assets/calendario1.png" class="calendarioCompeticionesImg">
    <img alt="imagen clubs" src="../assets/calendario2.png" class="calendarioCompeticionesImg">
    <h3 class="calendarioLiga">Calendario de Liga</h3>
    <img alt="imagen clubs" src="../assets/calendarioliga.png" class="calendarioCompeticionesImg">
    <h3 class="calendarioCopa">Calendario de Copa</h3>
    <img alt="imagen clubs" src="../assets/calendariocopa.png" class="calendarioCompeticionesImg">
    <slot name="fechastest"></slot>
</div>
</template>

<script>
export default {
    Name: 'Fechas'
}
</script>

<style>
    p{
  padding-bottom: 0.5rem;
  padding-left: 15rem;
}

.calendarioGlobal{
    padding-left:27rem;
    padding-top: 5rem;
    color: rgb(184, 38, 38)
}

.calendarioLiga{
    padding-left:27rem;
    padding-top: 2rem;
    color: rgb(221, 159, 26)
}

.calendarioCopa{
    padding-left:27rem;
    padding-top: 2rem;
    color: rgb(26, 150, 221)
}

.calendarioCompeticionesImg{
  padding-left:18rem;
  padding-top:2rem;

}
</style>