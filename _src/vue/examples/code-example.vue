<template lang='pug'>
.code-example
  .code-example__wrap
    .code-example__box(ref="view")
      slot
    .code-example__code(v-if="code")
      pre
        code.html(ref="source") {{ code }}

      .code-example__btn
        a.button.is-small(
          @click="execCopy"
        ) Copy
</template>
<script>
import $ from 'jquery';
import 'highlight.js';
const htmlBeautify = require('js-beautify').html;

export default {
  data() {
    return {
      code: null,
      prettify: {
        indent_size: 2,
        html: {
          end_with_newline: true,
          unformatted: [
            'a', 'abbr', 'area', 'audio', 'b', 'bdi', 'bdo', 'br', 'button', 'cite',
            'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'iframe',
            'input', 'ins', 'kbd', 'keygen', 'label', 'map', 'mark', 'math', 'meter', 'noscript',
            'object', 'output', 'progress', 'q', 'ruby', 's', 'samp', 'small',
            'span', 'strong', 'sub', 'sup', 'time', 'u', 'var',
            'video', 'wbr', 'text',
            'acronym', 'address', 'big', 'ins', 'strike', 'tt',
          ],
        },
      },
    };
  },
  methods: {
    execCopy() {
      const self = this;
      let temp = document.createElement('div');
      temp.appendChild(document.createElement('pre')).textContent = self.code;

      let s = temp.style;
      s.position = 'fixed';
      s.left = '-100%';

      document.body.appendChild(temp);
      document.getSelection().selectAllChildren(temp);

      let result = document.execCommand('copy');

      document.body.removeChild(temp);
      // true なら実行できている falseなら失敗か対応していないか

      if (result) {
        alert('コピーできました');
      } else {
        alert('このブラウザでは対応していません');
      }
    },
  },
  mounted() {
    this.code = $('> *', this.$refs.view).html();
    this.code = this.code.replace(/<!---->/g, '');
    this.code = htmlBeautify(this.code, this.prettify);
  },
  updated() {
    if ( this.$refs.source ) {
      hljs.highlightBlock(this.$refs.source);
    }
  },
};
</script>
<style lang='sass'>
.code-example
  padding: 30px

  &__box
    margin-bottom: 30px

  &__code
    position: relative
    pre
      padding: 0
      margin: 0
      // max-height: 300px
      // overflow-x: hidden
      // overflow-y: scroll

  &__btn
    position: absolute
    right: 10px
    top: 10px
</style>
