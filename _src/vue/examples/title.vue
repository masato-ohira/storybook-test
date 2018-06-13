<template lang='pug'>
.title-examples
  section(v-if="story == 'default'")
    p.title Title Default

  section(v-if="story == 'size'")
    p(v-for="size in arrs(6)"
      :class="'title is-' + size"
    ) {{ 'Title' + size }}

</template>
<script>
export default {
  props: {
    story: String,
  },
  methods: {
    arrs(n) {
      let array = [];
      for (let i = 0; i < n; i++) {
        array.push(i+1);
      }
      return array;
    },
  },
};
</script>
<style lang='sass'>
.title-examples

</style>
