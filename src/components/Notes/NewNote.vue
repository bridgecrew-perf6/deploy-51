<template>
  <div class="create-note" :style="`background-color: ${currentColor}`">
    <div v-if="typeNote === 'media'" class="create-note__media-wrapper">
      <div class="create-note__preview"></div>
      <vue-dropzone id="create-note__media" class="create-note__media" :options="dropzoneOptions" />
    </div>

    <div class="create-note__body">
      <v-text-field class="create-note__title" hide-details single-line label="Название"></v-text-field>
      <v-textarea
        v-if="typeNote !== 'toDo'"
        auto-grow
        class="create-note__text"
        hide-details
        single-line
        rows="1"
        label="Введите текст ..."
      ></v-textarea>

      <div v-if="typeNote === 'toDo'">
        <draggable>
          <v-list-item v-for="(item, index) in toDo" :key="index" class="create-note__todo-item">
            <v-list-item-action>
              <button class="create-note__todo-drag">
                <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.135 3.642c1.03 0 1.865-.815 1.865-1.82C10 .814 9.165 0 8.135 0S6.269.815 6.269 1.821s.835 1.821 1.866 1.821ZM8.135 9.817c1.03 0 1.865-.815 1.865-1.821s-.835-1.821-1.865-1.821-1.866.815-1.866 1.821.835 1.821 1.866 1.821ZM8.135 16C9.165 16 10 15.186 10 14.18c0-1.006-.835-1.822-1.865-1.822s-1.866.816-1.866 1.822c0 1.005.835 1.82 1.866 1.82ZM1.865 3.642c1.03 0 1.866-.815 1.866-1.82C3.73.814 2.896 0 1.865 0 .835 0 0 .815 0 1.821s.835 1.821 1.865 1.821ZM1.865 9.817c1.03 0 1.866-.815 1.866-1.821s-.835-1.821-1.866-1.821C.835 6.175 0 6.99 0 7.996s.835 1.821 1.865 1.821ZM1.865 16c1.03 0 1.866-.815 1.866-1.82 0-1.006-.835-1.822-1.866-1.822-1.03 0-1.865.816-1.865 1.822C0 15.185.835 16 1.865 16Z"
                    fill="#95B0DA"
                  />
                </svg>
              </button>
            </v-list-item-action>

            <v-list-item-content>
              <base-checkbox
                readonly
                class="create-note__todo-checkbox"
                white
                small
                :value="item.status"
              ></base-checkbox>
              <v-text-field
                class="create-note__todo-input"
                hide-details
                single-line
                label="Введите текст ..."
                v-model="item.text"
              ></v-text-field>
            </v-list-item-content>
          </v-list-item>
        </draggable>
        <button @click="addToDo()" class="create-note__todo-add">+ Новый пункт</button>
      </div>
    </div>

    <div class="create-note__footer">
      <div class="create-note__footer-left">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <button
              class="create-note__footer-btn"
              :class="{ 'create-note__footer-btn--active': typeNote === 'toDo' }"
              v-bind="attrs"
              v-on="on"
              @click="typeNote = 'toDo'"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8.02 15.995c-1.982 0-3.963.004-5.946 0-1.38-.003-2.062-.661-2.066-2.045-.01-4.005-.01-8.011 0-12.016C.011.67.716.014 2.065.007 4.542-.006 7.021.003 9.498.003c1.487 0 2.973-.005 4.46.001 1.34.005 2.03.664 2.033 2.014.014 4.026.012 8.052 0 12.078-.004 1.225-.716 1.885-2.025 1.896-1.981.015-3.964.003-5.945.003Zm-1.792-5.669c-.772-.774-1.48-1.494-2.199-2.202-.474-.466-.977-.495-1.358-.105-.371.382-.327.89.134 1.354a451.71 451.71 0 0 0 2.67 2.67c.538.534.942.544 1.485.003 2.077-2.065 4.147-4.137 6.214-6.213.48-.482.53-.981.173-1.36-.372-.392-.947-.365-1.425.107a622.391 622.391 0 0 0-3.94 3.937c-.58.584-1.147 1.181-1.754 1.81Z"
                />
              </svg>
            </button>
          </template>
          <span>ToDo</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <button
              class="create-note__footer-btn"
              :class="{ 'create-note__footer-btn--active': typeNote === 'simple' }"
              v-bind="attrs"
              v-on="on"
              @click="typeNote = 'simple'"
            >
              <svg width="20" height="14" viewBox="0 0 20 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.002.001c2.828 0 5.655-.003 8.482.002.986.003 1.577.429 1.512 1.064-.057.554-.622.89-1.536.892-2.544.004-5.088.002-7.633.002-3.087 0-6.173.002-9.26-.001C.745 1.959.203 1.692.046 1.23-.183.56.467.007 1.52.003 4.348-.003 7.175.001 10.002.001ZM10.018 11.72l8.34.001c1.05.001 1.638.353 1.642.973.004.622-.585.984-1.627.985-5.584.002-11.167.002-16.75 0-1.033 0-1.623-.374-1.608-.999.015-.602.594-.957 1.592-.958 2.803-.004 5.607-.002 8.411-.002ZM10.022 7.808c-2.826 0-5.652.004-8.478-.002-.985-.002-1.55-.382-1.529-.994.017-.476.467-.85 1.113-.923.07-.008.14-.014.21-.014 5.77 0 11.54-.006 17.31.004.885 0 1.42.458 1.344 1.066-.069.54-.599.858-1.492.86-2.497.006-4.993.002-7.49.003h-.988Z"
                />
              </svg>
            </button>
          </template>
          <span>Простая заметка</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <button
              class="create-note__footer-btn"
              :class="{ 'create-note__footer-btn--active': typeNote === 'media' }"
              v-bind="attrs"
              v-on="on"
              @click="typeNote = 'media'"
            >
              <svg width="21" height="16" viewBox="0 0 21 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.062.001c2.583 0 5.168-.003 7.752.002 1.454.002 2.253.772 2.258 2.224.012 3.795-.013 7.59.012 11.384.01 1.502-.942 2.406-2.42 2.387-5.075-.058-10.15-.022-15.224-.023-1.688 0-2.436-.732-2.437-2.4C0 9.874.007 6.172 0 2.471-.001 1.48.218.608 1.227.18c.288-.121.626-.17.942-.172C4.799-.004 7.43.001 10.062.001ZM9.04 11.511c-.682-.823-1.32-1.585-1.946-2.356-.366-.452-.703-.48-1.068 0-.69.902-1.404 1.787-2.076 2.702-.172.235-.22.558-.327.84.288.099.576.285.865.286 3.725.02 7.449.02 11.174 0 .267-.001.668-.119.76-.304.092-.185-.063-.57-.22-.789-.97-1.334-1.97-2.647-2.964-3.962-.596-.785-.846-.781-1.46.015C10.889 9.1 10 10.26 9.04 11.511Zm-.978-5.556c.527-.015.968-.465.968-.985 0-.49-.494-.984-.983-.985-.544 0-1.002.485-.982 1.038a.94.94 0 0 0 .997.932Z"
                />
              </svg>
            </button>
          </template>
          <span>Заметка с вложением</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <button
              @click="colorPicker = !colorPicker"
              v-bind="attrs"
              v-on="on"
              class="create-note__footer-btn create-note__footer-btn--color"
              :class="{ 'create-note__footer-btn--active': colorPicker }"
            >
              <svg width="17" height="16" viewBox="0 0 17 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#a)">
                  <path
                    d="M8.107 15.986a8.256 8.256 0 0 1-5.333-2.036C.757 12.218-.182 10.015.029 7.39c.43-5.336 5.673-8.743 10.69-6.872 3.292 1.228 4.947 3.806 5.26 7.266.037.404.041.819-.008 1.222-.095.77-.63 1.292-1.403 1.345-.76.051-1.525.032-2.287.043-1.291.02-1.877.603-1.881 1.88-.002.576 0 1.153 0 1.729-.005 1.46-.703 2.103-2.293 1.983Zm.673-3.149a1.561 1.561 0 0 0-1.484-1.624c-.896-.042-1.648.612-1.697 1.479-.05.87.636 1.638 1.498 1.68.94.042 1.649-.605 1.683-1.535Zm2.028-8.065a1.196 1.196 0 0 0 1.183-1.218c-.019-.623-.568-1.144-1.203-1.14a1.169 1.169 0 0 0-1.168 1.16 1.166 1.166 0 0 0 1.188 1.198Zm-6.039.44c.01-.663-.53-1.211-1.192-1.21-.619.001-1.157.542-1.168 1.175a1.169 1.169 0 0 0 1.135 1.192A1.167 1.167 0 0 0 4.769 5.21Zm9.61 2.377c.002-.67-.528-1.182-1.213-1.173-.624.008-1.166.56-1.161 1.185.003.608.56 1.17 1.172 1.183.654.014 1.2-.529 1.201-1.195ZM7.986 2.811c.01-.643-.543-1.19-1.207-1.194A1.18 1.18 0 0 0 5.606 2.78c-.002.67.52 1.199 1.196 1.206.594.008 1.175-.567 1.185-1.174ZM1.611 9.214c0 .633.538 1.17 1.17 1.166a1.196 1.196 0 0 0 1.202-1.203c.002-.594-.58-1.173-1.186-1.177-.643-.005-1.186.55-1.186 1.214Z"
                  />
                </g>
                <defs>
                  <clipPath id="a"><path fill="#fff" d="M0 0h16.007v16H0z" /></clipPath>
                </defs>
              </svg>
              <v-radio-group v-if="colorPicker" hide-details v-model="currentColor" row class="create-note__colors">
                <v-radio
                  class="create-note__color-radio"
                  v-for="(color, index) in colors"
                  :key="index"
                  :color="color"
                  :value="color"
                  :ripple="false"
                >
                  <template v-slot:label>
                    <span class="create-note__color-radio-label" :style="`background-color: ${color}`"></span>
                  </template>
                </v-radio>
              </v-radio-group>
            </button>
          </template>
          <span>Cменить цвет</span>
        </v-tooltip>
      </div>
      <div class="create-note__footer-right">
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <button v-bind="attrs" v-on="on" class="create-note__footer-btn">
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.655.087c.957-.232 1.628 0 2.211.696.648.774 1.666 1.351 2.03 2.221.355.847.09 1.954.092 2.947.003 2.749.003 5.496 0 8.244-.001 1.274-.531 1.803-1.816 1.804-4.143.003-8.285.004-12.429 0-1.19 0-1.738-.55-1.74-1.75C-.002 10.083 0 5.92.003 1.756.006.564.556.024 1.757.013c.591-.005 1.181 0 1.863 0v1.404c.002.93-.006 1.86.01 2.79.01.496.206.876.777.877 2.156.006 4.312.01 6.468-.003.66-.003.77-.497.777-1.016.013-1.098.004-2.197.004-3.297l-.001-.681Zm-8.73 14.405H13.07c0-1.5.037-2.953-.014-4.404-.028-.809-.58-1.314-1.415-1.322a324.51 324.51 0 0 0-7.286 0c-.839.008-1.38.494-1.414 1.324-.059 1.45-.016 2.902-.016 4.402Z"
                  fill="#B9CBE5"
                />
                <path d="M8.77 3.593V.043h1.366v3.55H8.771Z" fill="#B9CBE5" />
              </svg>
            </button>
          </template>
          <span>Сохранить</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <button @click="handleDeleteNewNote($event)" v-bind="attrs" v-on="on" class="create-note__footer-btn">
              <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#a)" fill="#B9CBE5">
                  <path
                    d="M6.22 4.764h5.359c.77 0 .926.178.826.926l-1.273 9.57c-.123.937-.737 1.529-1.675 1.54-2.155.011-4.32.022-6.476 0-.949-.011-1.552-.58-1.675-1.53C.871 12.032.446 8.806.011 5.58c-.078-.592.112-.815.737-.815H6.22ZM10.841 3.155H1.284c1.128-.837 2.121-1.607 3.16-2.3.167-.111.58-.01.804.134.502.302.949.704 1.451 1.039.156.1.458.167.592.089 1.038-.636 1.932-.424 2.747.413.19.201.457.357.803.625Z"
                  />
                </g>
                <defs>
                  <clipPath id="a"><path fill="#fff" transform="translate(0 .8)" d="M0 0h12.438v16H0z" /></clipPath>
                </defs>
              </svg>
            </button>
          </template>
          <span>Удалить</span>
        </v-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

import draggable from 'vuedraggable'

export default {
  data() {
    return {
      colors: ['#2ABAF326', '#64C04826', '#FFA21726', '#FF4B6B26', '#F0F1FD'],
      colorPicker: false,
      currentColor: '#2ABAF326',
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        dictDefaultMessage: '+ Добавить изображение',
        dictRemoveFile: '',
        dictCancelUpload: '',
        thumbnailMethod: 'contain',
        addRemoveLinks: true,
        previewsContainer: '.create-note__preview',
      },
      toDo: [{ text: '', status: false }],
      typeNote: 'simple', //simple, toDo, media
    }
  },
  components: {
    vueDropzone: vue2Dropzone,
    draggable,
  },
  methods: {
    handleDeleteNewNote() {
      this.$emit('delete')
    },
    addToDo() {
      this.toDo.push({ text: '', status: false })
    },
  },
}
</script>

<style lang="sass" scoped>
.create-note
    width: 100%
    border-radius: 8px

.create-note__body
    padding: 15px 15px 0

.create-note__title
    margin-top: 0px
    margin-bottom: 20px
    padding-top: 0px
    &::v-deep
        .v-input__slot
            height: auto
            &::before,
            &::after
                display: none
        .v-text-field__slot
            label
                top: 0px
                height: auto
                font-size: 20px
                line-height: 27px
                color: #B9CBE5
            input
                padding: 0px
                font-size: 20px
                line-height: 27px
                max-height: none
                color: $blue02

.create-note__text
    margin-top: 0px
    padding-top: 0px
    &::v-deep
        .v-input__slot
            &::before,
            &::after
                display: none
        .v-text-field__slot
            label
                height: auto
                font-size: 16px
                line-height: 22px
                color: $blue05
            textarea
                color: $blue02

.create-note__footer
    padding: 20px 15px 15px
    display: flex
    justify-content: space-between
    align-items: center

    font-weight: 500
    font-size: 14px
    line-height: 19px

    color: $blue05

.create-note__footer-left
    display: inline-flex
    flex: 0 0 85%


.create-note__footer-btn
    margin-right: 20px
    color: $blue06
    &:last-child
        margin-right: 0px

.create-note__footer-btn--active
    color: $blue02

.create-note__footer-btn--color
    display: flex
    align-items: center
    svg
        margin-right: 5px

.create-note__colors
    margin-top: 0px
    padding-top: 0px

.create-note__color-radio
    &::v-deep
        margin-right: 14px !important
        &:last-child
            margin-right: 0px !important
        .v-input--selection-controls__input
            margin-right: 0px
            display: none
        .create-note__color-radio-label
            display: inline-block
            width: 20px
            height: 20px

            border: 2px solid #95B0DA
            border-radius: 4px
            overflow: hidden
            .v-icon
                display: none
        &.v-item--active
            .create-note__color-radio-label
                background-image: url("data:image/svg+xml,%3Csvg width='9' height='7' viewBox='0 0 9 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.75 1.05c-.05.275-.221.48-.393.687L4.598 6.474A1.34 1.34 0 0 1 3.493 7a1.21 1.21 0 0 1-.934-.412c-.762-.8-1.548-1.579-2.31-2.38-.49-.549-.22-1.35.492-1.533.393-.092.737 0 1.007.297.344.367.713.733 1.057 1.099l.516.55c.098.114.172.114.27-.024L6.907.41C7.325-.117 8.111-.14 8.53.364c.098.114.147.251.196.389 0 .023 0 .023.025.045v.252Z' fill='%23464EA3'/%3E%3C/svg%3E")
                background-position: center
                background-repeat: no-repeat
                border-color: $blue03


.create-note__media-wrapper
    padding: 12px
    background-color: #FBFBFE
    border-radius: 8px

.create-note__media
    border: 2px dashed rgba(185, 203, 229, 0.5)
    border-radius: 12px
    ::v-deep
        position: relative
        .dz-message
            display: flex
            flex-wrap: wrap
            align-items: center
            justify-content: center
            span
                width: 100%
                font-weight: 500
                font-size: 17px
                line-height: 23px
                color: #B9CBE5
            &:before
                content: ''
                width: 52px
                height: 41px
                margin-bottom: 14px
                background-image: url("data:image/svg+xml,%3Csvg width='52' height='41' viewBox='0 0 52 41' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M25.785.003c6.62 0 13.245-.007 19.866.004 3.728.007 5.776 1.98 5.787 5.7.032 9.726-.033 19.451.032 29.173.025 3.85-2.414 6.166-6.202 6.12-13.005-.151-26.01-.058-39.016-.062-4.326 0-6.241-1.876-6.245-6.151C0 25.305.017 15.819 0 6.334-.004 3.792.559 1.557 3.144.462 3.882.15 4.748.025 5.557.022 12.3-.012 19.043.002 25.785.002Zm-2.617 29.495c-1.748-2.11-3.384-4.06-4.988-6.037-.939-1.157-1.802-1.228-2.736 0-1.77 2.313-3.599 4.58-5.321 6.925-.44.602-.566 1.429-.838 2.152.738.254 1.475.73 2.216.734 9.547.05 19.09.05 28.636 0 .684-.004 1.711-.304 1.948-.78.236-.473-.161-1.461-.566-2.02-2.485-3.42-5.045-6.786-7.595-10.155-1.525-2.013-2.166-2.002-3.738.04-2.285 2.96-4.558 5.933-7.018 9.14ZM20.66 15.26c1.35-.04 2.481-1.193 2.481-2.525-.003-1.257-1.267-2.52-2.52-2.524-1.393 0-2.568 1.242-2.518 2.66.047 1.418 1.135 2.432 2.557 2.389Z' fill='%23DCE5F2'/%3E%3C/svg%3E")
                background-position: center
                background-repeat: no-repeat
                background-size: contain

        .dz-details
            display: none

.create-note__preview
    display: flex
    flex-wrap: wrap
    ::v-deep
        .dz-preview
            position: relative
            width: calc(50% - 5px)
            margin-right: 10px
            margin-bottom: 10px
            overflow: hidden

            &:nth-child(even)
                margin-right: 0px
            .dz-image
                line-height: 0px
                font-size: 0px
                border: 1px solid #DCE5F2
                border-radius: 8px
                overflow: hidden
            .dz-details,
            .dz-success-mark,
            .dz-error-mark
                display: none
            .dz-remove
                position: absolute
                top: 12px
                right: 12px
                display: inline-block
                transform: translate(100%, -100%)
                width: 28px
                height: 28px
                background-color: rgba(0, 0, 0, 0.2)
                border-radius: 8px
                background-image: url("data:image/svg+xml,%3Csvg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m8.37 7.268 4.948 4.947a.878.878 0 0 1 0 1.24.878.878 0 0 1-1.24 0L7.143 8.521 2.19 13.474a.878.878 0 0 1-1.24 0l-.006-.006a.878.878 0 0 1 0-1.24l4.934-4.935L.925 2.34a.878.878 0 0 1 0-1.24l.006-.006a.878.878 0 0 1 1.24 0l4.934 4.934 4.954-4.953a.878.878 0 0 1 1.24 0l.013.012a.878.878 0 0 1 0 1.24L8.37 7.268Z' fill='%23fff'/%3E%3C/svg%3E")
                background-repeat: no-repeat
                background-position: center
                transition: all 0.5s
                opacity: 0
            &:hover
                .dz-remove
                    transform: translate(0%, 0%)
                    opacity: 1

.create-note__todo-item
    &::v-deep
        min-height: auto
        margin-bottom: 20px
        padding: 0px
        .v-list-item__action
            margin: 0px
            margin-right: 12px
            min-width: auto
        .v-list-item__content
            flex-wrap: nowrap
            padding: 0px

.create-note__todo-checkbox
    &::v-deep
        margin-bottom: 0px
        margin-right: 12px
        .v-input--selection-controls__input
            margin-right: 0px


.create-note__todo-input
    margin-top: 0px
    padding-top: 0px
    &::v-deep
        width: 100%
        .v-input__slot
            height: auto
            &::before,
            &::after
                display: none
        .v-text-field__slot
            label
                top: 0px
                height: auto
                font-size: 16px
                line-height: 22px
                color: $blue05

            input
                padding: 0
                font-size: 16px
                line-height: 22px
                max-height: none
                color: $blue02

.create-note__todo-add
    margin-left: 22px
    font-size: 16px
    line-height: 22px
    color: $blue02

.create-note__todo-drag
    line-height: 0px
</style>
