<template lang='pug'>
.my-pager(v-if="pager.length > 3")
  .my-pager__count
    p.has-text-centered
      span.is-number {{counts.all}}
      span 件中
      span.is-size-5.is-number {{ counts.start }}-{{ counts.end }}
      span 件目を表示

  nav.pagination.is-centered(
    role='navigation'
    aria-label='pagination'
    v-if="pager"
  )
    ul.pagination-list
      li
        a.pagination-link.is-prev(
          @click="gotoPage(page-1)"
          v-if="showPrev()"
        )
          i.ion-chevron-left

      li(
        v-for="i in pager"
        v-if="i.show"
      )
        a.pagination-link(
          v-if="i.disable == false"
          :class="setCurrent(i.content)"
          @click="gotoPage(i.content)"
        ) {{ i.content }}

        span.pagination-ellipsis(
          v-if="i.disable && range < total"
        ) {{ i.content }}

      li
        a.pagination-link.is-next(
          @click="gotoPage(page+1)"
          v-if="showNext()"
        )
          i.ion-chevron-right
</template>

<style lang='sass'>
.my-pager
  &__count
    margin-bottom: 10px
</style>

<script>
import Sugar from 'sugar';
export default {
  props: {
    page: Number,
    limit: Number,
    results: Number,
  },
  data() {
    return {
      pager: [],
      selected: null,
      range: 10,
      total: 0,
      counts: {
        all: 0,
        start: 0,
        end: 0,
      },
    };
  },
  mounted() {
    this.page = Number(this.page);
    this.limit = Number(this.limit);
    this.results = Number(this.results);
    this.total = this.setPagination();
    this.pageCount();
    this.setPagerObj();
    console.log(this);
  },
  methods: {
    setPagination() {
      let count = Number(this.results) / this.limit;
      count = Sugar.Number(count).ceil();
      return Number(count);
    },
    pageCount() {
      let start = ((this.page - 1) * this.limit) + 1;
      let end = start + this.limit - 1;
      if (end > this.results) {
        end = this.results;
      }
      this.counts.all = this.results;
      this.counts.start = start;
      this.counts.end = end;
    },
    gotoPage(n) {
      console.log(`goto ${n}`);
    },
    setCurrent(page) {
      if ( page == this.page ) {
        return 'is-current';
      }
    },
    showNext() {
      if ( this.page + 1 > this.setPagination() ) {
        return false;
      } else {
        return true;
      }
    },
    showPrev() {
      if ( this.page - 1 < 1 ) {
        return false;
      } else {
        return true;
      }
    },
    showPager() {
      if ( Number(this.counts.all) !== Number(this.counts.start) ) {
        return true;
      } else {
        return false;
      }
    },
    setPagerObj() {
      let items = [];
      const self = this;

      for (let i = 0; i < self.total; i++) {
        let page = {
          content: i + 1,
          disable: false,
          show: false,
        };
        items[i] = page;
      }
      let page1 = {
        content: '...',
        disable: 'disabled',
        show: false,
      };
      let page2 = {
        content: '...',
        disable: 'disabled',
        show: false,
      };
      items.splice(1, 0, page1);
      items.splice(items.length - 1, 0, page2);
      for (let i = 0; i < items.length; i++) {
        if (i == 0 || i == items.length - 1) items[i].show = true;
        if (self.page <= self.range) {
          if (self.page == self.range) {
            if (i >= 2 && i <= self.range + 1) items[i].show = true;
          } else {
            if (i >= 2 && i <= self.range) items[i].show = true;
          }
          items[items.length - 2].show = true;
        } else if (self.page > self.range) {
          if (i >= self.page - 1 && (self.page + 2) < items.length - 2 && i <= self.page + 1) {
            items[1].show = true;
            items[items.length - 2].show = true;
            items[i].show = true;
          } else if (i >= items.length - 2 - self.range && (self.page + 2) >= items.length - 2) {
            items[1].show = true;
            items[items.length - 2].show = false;
            items[i].show = true;
          }
        }
      }
      this.pager = items;
    },
  },
}
</script>
