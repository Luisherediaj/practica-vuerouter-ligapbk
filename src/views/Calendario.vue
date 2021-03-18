<template>
  <div class="calendario">
    <Fechas/>
  </div>
</template>

<script>
// @ is an alias to /src
import Fechas from '@/components/Fechas.vue'

export default {
  name: 'Calendario',
  components: {
    Fechas
  }
}
</script>