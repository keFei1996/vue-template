<template>
  <div class="test">test</div>
</template>

<script>
  import Bignumber from "../../utils/bignumber.min"
  export default {
    name: "test",
    created() {
      let num = Bignumber(0.00000)
      console.log(num.isEqualTo(0))
    }
  }
</script>

<style scoped>

</style>