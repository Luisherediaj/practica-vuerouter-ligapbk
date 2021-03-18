<template>
<footer class="footer">
  <p>Footer</p>
  <slot name="title"></slot>
</footer>
</template>

<script>
export default {
    Name: 'Footer'
}

</script>

<style>

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgb(49, 48, 48);
  color: white;
  text-align: center;
}


</style>