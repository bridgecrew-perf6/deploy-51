<template lang="pug">
  <div v-if="type=='file'" class="dropzone-field" :class=type>
  vue-dropzone#dropzone(ref='myVueDropzone' :options='dropzoneOptions' @vdropzone-file-added="added")
  </div>
  <div v-else-if="type=='video'" class="dropzone-field" :class=type>
  vue-dropzone#dropzone(ref='myVueDropzone' :options='dropzoneOptions')
  </div>
  <div v-else-if="type=='image'" class="dropzone-field" :class=type>
  vue-dropzone#dropzone(ref='myVueDropzone' :options='dropzoneOptions')
  </div>


</template>

<script>
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

export default {
  name: 'DropzoneBlock',
  props: {
    type: {
      type: String,
      default: 'file',
    },
    title: {
      type: String,
    }
  },
  components: {
    vueDropzone: vue2Dropzone,
  },
  data: () => ({
    dropzoneOptions: {
      url: 'https://httpbin.org/post',
      thumbnailWidth: 196,
      // maxFilesize: 0.5,
      headers: {'My-Awesome-Header': 'header value'},
      dictDefaultMessage: '',
    },
  }),
  created() {
    console.log(this.title)
    this.dropzoneOptions.dictDefaultMessage = this.title
  },
  methods: {
    added(file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = () => setTimeout(() => {
        this.$emit('addUrl', {
          url: reader.result,
          file: file
        })
      }, 4000)
    },
  }
}
</script>

<style scoped lang="scss">
.dropzone-field {
  // тип файл
  &.file {
    ::v-deep {
      .vue-dropzone {
        height: auto;
        padding: 0;
        background: none;
        border-radius: 0;

        .dz-preview {
          min-height: 0;
          width: 100%;
          margin: 0;
          display: flex;
          align-items: center;
          position: relative;

          .dz-image {
            border: 0;
            width: 38px;
            height: 45px;
            border-radius: 0;
            background: url('~@/assets/images/svg/pdf-ico.svg');
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            margin-right: 1.5rem;

            img,
            svg {
              display: none;
            }
          }

          .dz-details {
            color: #464EA3;
            font-size: 1rem;
            line-height: 2rem;
            opacity: 1;
            padding: 0;
            background: none !important;
            position: relative;
            min-width: 0;
            width: calc(100% - 100px);

            .dz-size {
              display: none;
            }

            .dz-filename {
            }
          }

          .dz-progress {
            position: absolute;
            top: calc(100% + 2px);
            left: 104px;
            background: #ECF6FF;
            border-radius: 26px;
            height: 4px;
            opacity: 1;
            width: calc(100% - 100px);

            .dz-upload {
              height: 4px;
              background: #95B0DA;
              border-radius: 26px;
            }
          }

          .dz-error-message,
          .dz-success-mark {
            display: none !important;
          }

          .dz-error-mark {
            width: .75rem;
            height: .75rem;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: url("data:image/svg+xml,%3Csvg width='13' height='12' viewBox='0 0 13 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.761 5.961 2.888 4.154C2.046 3.34 1.2 2.53.358 1.716A.972.972 0 0 1 .314.341C.693-.072 1.35-.123 1.762.26c.545.502 1.072 1.022 1.605 1.536.927.892 1.851 1.788 2.778 2.68.026.026.054.048.092.083l.697-.66 3.7-3.52c.415-.393.87-.478 1.317-.245.587.309.726 1.075.253 1.545-.571.568-1.16 1.11-1.744 1.665-.896.852-1.788 1.703-2.684 2.552-.022.022-.044.044-.013.022.3.328.584.672.902.98 1.164 1.14 2.347 2.262 3.51 3.397a.973.973 0 0 1-.369 1.634c-.413.142-.791.063-1.106-.243-1.404-1.35-2.807-2.706-4.21-4.059l-.269-.258L4.985 8.54c-1.063 1.009-2.123 2.021-3.189 3.027-.57.54-1.447.373-1.725-.321-.151-.376-.06-.78.256-1.079.75-.706 1.504-1.416 2.252-2.132C3.3 7.35 4.023 6.661 4.76 5.961Z' fill='%23B9CBE5'/%3E%3C/svg%3E");
            background-size: cover;
            background-repeat: no-repeat;
            opacity: 1;
            position: absolute;
            top: 15px;
            right: 0;
            z-index: 3;
            pointer-events: inherit;

            img,
            svg {
              display: none !important;
            }
          }
        }
      }
    }
  }

  // тип имага
  &.image {
    ::v-deep {
      .vue-dropzone {
        height: auto;
        padding: 0;
        background: none;

        .dz-preview {
          min-height: 0;
          width: 100%;
          margin: 0;
          display: flex;
          align-items: flex-end;
          position: relative;

          .dz-image {
            border: 1px solid #DCE5F2;
            box-sizing: border-box;
            border-radius: 4px;
            width: 268px;
            height: 180px;
            margin-right: 80px;
            opacity: 1 !important;

            img {
              width: 268px;
              height: 180px;
              border-radius: 4px;
              object-fit: cover;
            }
          }

          .dz-details {
            display: none !important;
          }

          .dz-progress {
            display: none !important;
          }

          .dz-error-message,
          .dz-success-mark {
            display: none !important;
          }

          .dz-error-mark {
            width: .75rem;
            height: .75rem;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: url("data:image/svg+xml,%3Csvg width='13' height='12' viewBox='0 0 13 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.761 5.961 2.888 4.154C2.046 3.34 1.2 2.53.358 1.716A.972.972 0 0 1 .314.341C.693-.072 1.35-.123 1.762.26c.545.502 1.072 1.022 1.605 1.536.927.892 1.851 1.788 2.778 2.68.026.026.054.048.092.083l.697-.66 3.7-3.52c.415-.393.87-.478 1.317-.245.587.309.726 1.075.253 1.545-.571.568-1.16 1.11-1.744 1.665-.896.852-1.788 1.703-2.684 2.552-.022.022-.044.044-.013.022.3.328.584.672.902.98 1.164 1.14 2.347 2.262 3.51 3.397a.973.973 0 0 1-.369 1.634c-.413.142-.791.063-1.106-.243-1.404-1.35-2.807-2.706-4.21-4.059l-.269-.258L4.985 8.54c-1.063 1.009-2.123 2.021-3.189 3.027-.57.54-1.447.373-1.725-.321-.151-.376-.06-.78.256-1.079.75-.706 1.504-1.416 2.252-2.132C3.3 7.35 4.023 6.661 4.76 5.961Z' fill='%23B9CBE5'/%3E%3C/svg%3E");
            background-size: cover;
            background-repeat: no-repeat;
            opacity: 1;
            margin: 0;
            position: relative;
            pointer-events: inherit;
            margin-bottom: 12px;

            &:before {
              content: "удалить";
              position: absolute;
              top: -5px;
              right: calc(100% + 4px);
              font-size: 14px;
              line-height: 20px;
              color: #95B0DA;

            }

            img,
            svg {
              display: none !important;
            }
          }
        }
      }
    }
  }
}

.dropzone {
  height: 220px;
  min-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed #DCE5F2;
  overflow: hidden;
  border-radius: 4px;

  ::v-deep {
    .dz-message {
      color: #95B0DA;
      font-size: 1.25rem;
      line-height: 1.75;
      display: flex;
      flex-direction: column;
      align-items: center;

      &:before {
        content: '';
        background-image: url('~@/assets/images/svg/icon-video-big.svg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
        width: 84px;
        height: 84px;
        margin-bottom: 1.25rem;
      }
    }
  }

  .dz-preview:hover .dz-image img {
    filter: none;
  }
}

.dz-started {
  border: none;

  ::v-deep {
    .dz-message {
      display: none !important;
    }
  }
}
</style>
