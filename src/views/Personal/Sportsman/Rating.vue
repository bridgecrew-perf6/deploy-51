<template lang="pug">
    v-row
        v-col(
            md="10"
        )
            .exercises__block.mb-8
              Progress

        v-col(
            md="2"
        )
            MarksBlock
</template>

<script>
import MarksBlock from '@/components/elements/MarksBlock'
import Progress from '@/components/Progress/Progress'

export default {
  name: 'Rating',
  components: {
    MarksBlock,
    Progress,
  },
}
</script>

<style scoped lang="scss"></style>
