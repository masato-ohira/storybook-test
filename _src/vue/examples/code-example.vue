<template lang='pug'>
.code-example
  .code-example__wrap
    .code-example__box(ref="code")
      slot
    .code-example__code
      p code
</template>
<script>
export default {
};
</script>
<style lang='sass'>
.code-example
  padding: 30px

  &__box
    margin-bottom: 30px

  &__code
    background-color: #eee
    padding: 20px
</style>
