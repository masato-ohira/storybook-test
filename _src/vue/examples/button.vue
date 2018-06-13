<template lang='pug'>
.button-examples
  section(v-if="story == 'default'")
    ul
      li
        a.button(
          :class="setClass([])"
        ) Default

  section(v-if="story == 'color'")
    ul
      li(v-for="i in colors")
        a.button(:class="setClass([i])") {{ i }}

  section(v-if="story == 'size'")
    ul(v-for="size in sizes")
      li(v-for="color in colors")
        a.button(
          :class="setClass([size, color])"
        ) {{ color }}

  section(v-if="story == 'style'")
    ul(v-for="style in styles")
      li(v-for="color in colors")
        a.button(
          :class="setClass([style, color])"
        ) {{ color }}

</template>
<script>
export default {
  props: {
    story: String,
    mod: String,
  },
  methods: {
    setClass(classes) {
      if ( classes == ['Normal'] ) {
        return false;
      } else {
        let set = [];
        classes.map( (cls) => {
          set.push(`is-${cls.toLowerCase()}`);
        });

        if ( this.mod ) {
          let modifier = this.mod.split(',');
          modifier.map( (cls) => {
            set.push(cls);
          });
        }

        return set.join(' ');
      }
    },
  },
  data() {
    return {
      colors: [
        'Normal',
        'Primary',
        'Link',
        'Info',
        'Success',
        'Warning',
        'Danger',
      ],
      sizes: [
        'Small',
        'Normal',
        'Medium',
        'Large',
      ],
      styles: [
        'Rounded',
        'Outlined',
        'Focused',
        'Loading',
      ],
    };
  },
};
</script>
<style lang='sass'>
.button-examples
  // padding: 30px

  ul
    display: flex
    flex-wrap: wrap
    align-items: center

    margin-bottom: 20px
    &:last-child
      margin-bottom: 0

    li
      margin-right: 10px
</style>
