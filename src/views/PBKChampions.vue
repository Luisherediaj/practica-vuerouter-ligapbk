<template>
  <div class="pbkchampions">
    <Champions/>
  </div>
</template>

<script>
// @ is an alias to /src
import Champions from '@/components/Champions.vue'

export default {
  name: 'PBK Champions',
  components: {
    Champions
  }
}
</script>