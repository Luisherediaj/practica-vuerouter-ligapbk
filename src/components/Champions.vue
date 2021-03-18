<template>
<div class="champions">
    <h3 class="ligaPBKtitulo">PBK Champions</h3>
    <img alt="intro clasificacion" src="../assets/champions.jpg" class="championsImg">
    <slot name="championstest"></slot>
</div>
</template>

<script>
export default {
    Name: 'Champions'
}
</script>

<style>
.championsImg{
  padding-left:18rem;
  padding-top:2rem;
}

.ligaPBKtitulo{
    padding-left:27rem;
    padding-top: 6rem;
    color: rgb(221, 159, 26)
}
</style>