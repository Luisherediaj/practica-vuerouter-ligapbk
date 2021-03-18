<template>
  <div class="oficinaCentral">
    <Oficina/>
  </div>
</template>

<script>
// @ is an alias to /src
import Oficina from '@/components/Oficina.vue'

export default {
  name: 'OficinaCentral',
  components: {
    Oficina
  }
}
</script>