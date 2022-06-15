<template lang="pug">
  v-expansion-panels.accordion-training
    draggable.accordion-group(
      :list='groupt'
      :group={name: 'test', pull: 'clone', put: false}
    )

      v-expansion-panel.accordion-panel(
        v-for='(element, index) in groupt'
        :key='element.id'
      )

        v-expansion-panel-header.accordion-panel__header
          .panel-num {{index + 1 }}
          img.icon-20.more-icon(
            src="@/assets/images/svg/more-icon.svg"
          )
          .img-wrap.img-wrap_left.mr-4
            img(
              src="@/assets/images/img-traning.png"
            )
          .accordion-panel__header-desc
            .accordion-panel__title
              | {{ element.title }}
            .labels.mb-3
              base-badge.mr-2.mb-2(
                v-if="element.duration"
                :label="element.duration + ' мин'"
                background='rgba(241, 243, 249, 1)'
                textColor="#000"
              )
              base-badge.mr-2.mb-2(
                v-if="element.playground[0]"
                :label="element.playground[0].name"
                background='rgba(241, 243, 249, 1)'
                textColor="#000"
              )
              base-badge.mr-2.mb-2(
                :label="element.loadIntensity[0].name"
                :background='getLoadBg(element.loadIntensity[0].id)'
                :textColor="getLoadText(element.loadIntensity[0].id)"
              )
            .training-desc.training-short-decs {{  getShortDesc(element.description) }}
            v-expansion-panel-content.accordion-panel__content
              .training-desc {{  element.description }}
</template>

<script>
import draggable from 'vuedraggable'
import AccordionTabs from '@/components/AccordionTabs'
import DotsMenu from '@/components/DotsMenu'
import AddBlock from '@/components/elements/addBlock'
import TrainingEditBlock from '@/components/elements/TrainingEditBlock'

export default {
  props: {
    groupt: Array,
    groupName: String,
  },
  components: {
    TrainingEditBlock,
    AddBlock,
    DotsMenu,
    AccordionTabs,
    draggable,
  },

  name: 'Accordion',

  methods: {
    editExcercise: function () {
      this.editExercise = !this.editExercise
    },
    getLoadLabel: function (load) {
      let loadLabel = {
        minimal: 'Умеренная',
        normal: 'Большая',
        submax: 'Субмаксимальная',
        maximal: 'Максимальная',
      }
      return loadLabel[load]
    },
    getLoadBg: function (load) {
      let loadLabel = {
        1: 'rgba(61, 197, 13, .2)',
        2: 'rgba(235, 173, 16, .2)',
        3: 'rgba(236, 72, 101, .2)',
        4: 'rgba(112, 42, 142, .2)',
        5: 'rgba(112, 72, 136, .2)',
      }
      return loadLabel[load]
    },
    getLoadText: function (load) {
      let loadLabel = {
        1: 'rgba(31, 120, 0, 1)',
        2: 'rgba(158, 114, 0, 1)',
        3: 'rgba(161, 34, 56, 1)',
        4: 'rgba(161, 34, 56, 1)',
        5: 'rgba(161, 34, 56, 1)',
      }
      return loadLabel[load]
    },
    getShortDesc(desc) {
      return desc.length > 60 ? desc.slice(0, 60) + '... ' : desc
    },
  },
}
</script>

<style lang="scss">
.accordion-group {
  width: 100%;
  min-height: rem(128px);
}

.v-item-group {
  margin-bottom: rem(25px);
}

.v-expansion-panel--active .training-short-decs {
  display: none;
}

.accordion-training {
  .accordion-panel__header {
    min-height: rem(128px);
    padding-left: rem(36px);
    padding-right: rem(24px);
  }
  .accordion-panel__header-desc {
    flex-direction: column;
  }
}

.accordion-panel {
  margin-left: rem(2px);
  margin-right: rem(2px);
}

.accordion-panel__header {
  position: relative;
  align-items: flex-start;
  .img-wrap {
    @include width-flex(rem(100px)) height: rem(100px);
    border-radius: rem(4px);
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.accordion-panel__title {
  font-size: rem(16px);
  font-family: $FiraSansMedium;
  margin-bottom: rem(8px);
  padding-right: 50px;
}

.v-expansion-panel-header {
}
.v-expansion-panel-content__wrap {
  /*padding: rem(10px) rem(24px) rem(24px) rem(36px);*/
  padding: 0 !important;
}

.more-icon {
  position: absolute;
  left: rem(8px);
  top: rem(12px);
}

.v-expansion-panel:before {
  box-shadow: none;
}
.v-expansion-panel:not(:first-child):after {
  border: none;
}

.v-expansion-panel-header > :not(.v-expansion-panel-header__icon) {
  flex: inherit;
}

.accordion-panel__header-desc {
  @include width-flex(70%);
}

.training-desc {
  font-size: rem(14px);
  color: rgba(0, 0, 0, 0.56);
}
.panel-num {
  position: absolute;
  left: rem(-32px);
  top: rem(14px);
  font-size: rem(12px);
  color: rgba(0, 0, 0, 0.5);
}

.v-expansion-panels > :last-child {
  border-radius: rem(12px);
}
</style>
