<template>
<div className="timeline-container">
    <timeline-item
    v-for="i in items"
    :key="i.id"
    :data="i"/>
</div>
</template>

<script>
import TimelineItem from './TimelineItem'

export default {
  components: { TimelineItem },
  props: { data: Object },
  data () {
    return {
      items: [
        {
          text: 'Wrote my first blog post ever on Medium',
          date: 'March 03 2017',
          category: {
            tag: 'medium',
            color: '#018f69'
          },
          link: {
            url: 'https://medium.com/@popflorin1705/javascript-coding-challenge-1-6d9c712963d2',
            text: 'Read more'
          }
        }
      ]
    }
  }
}
</script>

<style scoped>
.timeline-container {
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 40px 0;
}
.timeline-container::after {
    background-color: #e17b77;
    content: '';
    position: absolute;
    left: calc(50% - 2px);
    width: 4px;
    height: 100%;
}
</style>
