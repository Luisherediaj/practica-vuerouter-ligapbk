<template>
<body>
<div class="reglas">
  <img alt="imagen reglamento" src="../assets/reglamento.png" class="reglamentoimg">
  <p class="articulo">Artículo 1.</p>
  <p>La administración de la PBK League 2.0. estará compuesta por :
  Kasy (Mánager "RB Gijón Rangers") , Karba (Mánager "Vikings") y AdriFB12 (Mánager "La Cabañina SAD").
  El % de administración se repartirá equitativamente, no pudiendo ningún administrador tomar decisión sin ser consultada y debatida ante el resto de la administración, siendo aprobadas todas las decisiones por mayoría absoluta.
  La administración podrá decidir resolver cualquier conflicto mediante encuesta y votación de todos los miembros de la PBK League 2.0.</p>
  <p class="articulo">Artículo 2.</p>
  <p>Cualquier decisión tomada por la Administración, así como actualizacion de estadísticas, goleadores, resultados y demás, podrán ser recurridas en un plazo de 5 días  por cualquier mánager, sea éste interesado o no. Pasados los 5 días sin que se haya hecho mención a la decisión publicada o resultado actualizado no habrá lugar para ninguna queja o reclamación, ni incluso cuando se evidencie el error mediante aporte alguno.</p>
  <p class="articulo">Artículo 3.</p>
  <p>La Administración podrá agregar en cualquier momento normas adicionales cuando sean necesarias para la resolución de cualquier incidente, conflicto o vacío legal.</p>
  <p class="articulo">Artículo 4.</p>
  <p>Los resultados de los partidos de la PBK League 2.0. irán en función de las jornadas de las ligas reales.</p>
  <p class="articulo">Artículo 5.</p>
  <p>El resultado de cada partido será el siguiente:
      a) Un gol por cada futbolista que haya marcado esa jornada con su equipo real.
      b) Un gol si el portero no recibe ningún gol en contra. (Ha de jugar un mínimo de una parte para que el gol sea válido).
      c) Un gol para el adversario por cada 2 goles en contra que reciba el portero. (No hay necesidad de tiempo mínimo para este gol).
      d) Cada futbolista que su equipo gane sumará 1 punto, en el caso de los defensas que su equipo no encajen recibirán otro.
      e) Un gol por cada 5 puntos. (Los puntos solo serán validos para cada jornada).
      f) Un jugador expulsado recibirá -3 puntos. Si al final del partido el equipo PBK acaba en puntos negativos recibirá un gol en contra.</p>
  <p class="articulo">Artículo 6.</p>
  <p>En caso de que haya duda con la autoría de algún gol, se consultará el acta arbitral, en caso de no ser posible dicha consulta se comprobará en lo establecido en la WEB oficial del club del futbolista, si tampoco fuera posible la Administración decidirá por los medios oportunos la autoría del gol. Únicamente el acta arbitral no tendrá valor si el interesado o cualquier otro mánager muestra prueba de que existe error en el acta.</p>
  <slot name="reglastest"></slot>

</div>
</body>
</template>

<script>
export default {
    Name: 'Reglas'
}
</script>

<style>
  body{
    padding-top: 2rem;
    text-align: justify;
  }
.reglamentoimg{
  padding-left:18rem;
  padding-top: 2rem;
}

p{
  padding-bottom: 0.5rem;
  padding-left: 15rem;
  color: aliceblue;
}

.articulo{
  color: red;
  font-weight: bold;
}
</style>