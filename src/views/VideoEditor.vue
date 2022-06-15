<template>
  <div class="d-flex video-editor">
    <left-menu>
      <div class="video-editor__left-content">
        <default-left-menu v-show="tabActive === 0" />
        <comments-left-menu v-show="tabActive === 1" />
        <game-moments-left-menu v-show="tabActive === 2" />
        <neural-analysis-left-menu v-show="tabActive === 3" />
        <pencil-left-menu v-show="tabActive === 4" />
        <cut-vdeo-left-menu v-show="tabActive === 5" />
        <music-left-menu v-show="tabActive === 6" />
      </div>
    </left-menu>
    <div class="container video-editor__container">
      <Header/>
      <bottom-header
          style="margin-top: 15px"
          btnText="Добавить событие"
          title="Медиафайлы*">
        <template #btns>
          <div class="create-event__header-btns">
            <base-button class="create-event__header-btn" label="Загрузить видео"/>
          </div>
        </template>
      </bottom-header>
      <text-header
          leftText="Название видеофайла"
          rightText="20 августа 2021 / 21:20"
          style="
          margin-top: 10px;
          margin-left: 10px;
          max-width: calc(100% - 10px)"/>

      <match-video
          class="video-editor__video"
          menu
          :tabActive="tabActive"
          @selectTab="tabActive = $event"/>
    </div>
  </div>
</template>

<script>
import LeftMenu from '@/components/LeftMenu.vue';
import Header from '@/components/Header.vue';
import BottomHeader from '@/components/BottomHeader.vue';
import TextHeader from '@/components/TextHeader.vue';
import MatchVideo from "@/components/Broadcast/MatchVideo";
import DefaultLeftMenu from "@/components/Broadcast/DefaultLeftMenu";
import CommentsLeftMenu from "@/components/Broadcast/CommentsLeftMenu";
import GameMomentsLeftMenu from "@/components/Broadcast/GameMomentsLeftMenu";
import NeuralAnalysisLeftMenu from "@/components/Broadcast/NeuralAnalysisLeftMenu";
import PencilLeftMenu from "@/components/Broadcast/PencilLeftMenu";
import CutVdeoLeftMenu from "@/components/Broadcast/CutVdeoLeftMenu";
import MusicLeftMenu from "@/components/Broadcast/MusicLeftMenu";

export default {
  components: {
    LeftMenu,
    Header,
    BottomHeader,
    TextHeader,
    MatchVideo,
    DefaultLeftMenu,
    CommentsLeftMenu,
    GameMomentsLeftMenu,
    NeuralAnalysisLeftMenu,
    PencilLeftMenu,
    CutVdeoLeftMenu,
    MusicLeftMenu
  },
  data() {
    return {
      tabActive: 0,
    }
  }
}
</script>

<style scoped lang="scss">
.video-editor {
  &__container {
    background-color: #F0EFF8;
  }

  &__video {
    margin-top: 40px;
    margin-bottom: 200px;
    border-radius: 12px;
  }
}
</style>
