<template lang="pug">

  v-tabs.accordion-tabs(
    background-color='transparent'
    height='30'
    active-class='accordion-tab-active'
    slider-color='#326BFF'
    color='#000'
  )
    v-tab(v-if="embedUrl") Видео и описание
    v-tab Методические указания
    v-tab Инвентарь

    v-tab-item(v-if="embedUrl")
      iframe(
        width="560"
        height="315"
        :src="embedUrl"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen)

    v-tab-item

      .training-desc--inner
        | {{ elem.guidelines }}

    v-tab-item

      .training-desc--inner
        p( v-for="(item, index) in elem.equipment")
          | {{ index + 1 }}. {{ item.name }}


</template>

<script>
export default {
  name: 'AccordionTabs',
  props: {
    elem: Object,
  },
  computed: {
    embedUrl: function () {
      if (this.elem.videoUrl) {
        let watchParams = this.elem.videoUrl.split('watch?v=')
        if (watchParams[1]) {
          let watch = watchParams[1].split('&')
          if (watch[0]) {
            return 'https://www.youtube.com/embed/' + watch[0]
          }
          console.log(watch)
        }
      }
      return false
    },
  },
}
</script>

<style lang="scss">
.accordion-tabs {
  .v-tabs-items.v-item-group {
    padding-bottom: 30px;
  }
  .v-item-group {
    margin-bottom: 12px;
  }

  .v-tab {
    font-size: 14px;
    text-transform: none;
    letter-spacing: normal;
    padding-left: 0;
    padding-right: 0;
    min-width: 60px;
    margin-right: 30px;
  }

  .accordion-tab-active,
  .v-tabs-bar .v-tab:not(.v-tab--active) {
    color: #000 !important;
  }

  .img-trainig_big {
    max-width: 100%;
    width: 512px;
    height: 186px;
    margin-bottom: 20px;
  }

  .training-desc--inner {
    font-size: 14px;

    p {
      margin-bottom: 0;
      line-height: 20px;
    }
  }
}
</style>
