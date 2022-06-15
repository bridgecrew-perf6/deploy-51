<template>
  <div class="media-note" :style="`background-color: ${note.body.color}; color: ${note.body.color}`">
    <div
      class="media-note__image"
      v-for="image in images"
      :key="image.id"
      :style="{ backgroundImage: `url(${image.image})` }"
    ></div>

    <div class="media-note__inner">
      <p class="media-note__title">{{ note.title }}</p>
      <p class="media-note__text">{{ note.body.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MediaNote',
  props: {
    note: Object,
  },
  data() {
    return {
      images: [],
    }
  },
  mounted() {
    this.getImage()
  },
  methods: {
    async getImage() {
      if (this.note.body.type !== 'media') return

      const response = await this.$notes.getImage(this.note.id)
      this.images = response
    },
  },
}
</script>

<style scoped lang="scss">
.media-note {
  border-radius: 8px;

  &__image {
    width: 100%;
    height: 290px;
    border-radius: 8px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border: 1px solid #dce5f2;
  }

  &__inner {
    padding: 15px;
  }

  &__title {
    font-size: 20px;
    line-height: 27px;
    color: $blue02;
  }

  &__text {
    font-size: 16px;
    line-height: 22px;
    color: $blue02;
  }
}
</style>
