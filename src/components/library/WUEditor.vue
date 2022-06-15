<template>
  <vue-editor v-model="inputVal" class="wu-editor" :editorToolbar="customToolbar" />
</template>

<script>
import { VueEditor, Quill } from 'vue2-editor'

export default {
  props: {
    value: [String],
  },
  data() {
    return {
      customToolbar: [
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['image'],
        [{ color: ['#2ABAF3', '#64C048', '#FFA217', '#FF4B6B', '#36427D', '#000'] }],
        [{ size: ['14px', '16px', '18px', '20px', '22px'] }],
      ],
    }
  },
  components: {
    VueEditor,
  },
  computed: {
    inputVal: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
  created() {
    var icons = Quill.import('ui/icons')
    icons['bold'] =
      '<svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.449.684v6.093c.482-.039.846-.218 1.094-.537.247-.319.589-1.048 1.025-2.187.573-1.491 1.159-2.442 1.758-2.852.592-.403 1.579-.605 2.959-.605.065 0 .205-.004.42-.01v2.139l-.42-.01c-.586 0-1.016.075-1.29.224a1.63 1.63 0 0 0-.663.665c-.17.299-.42.914-.752 1.845a6.336 6.336 0 0 1-.577 1.24c-.201.332-.563.645-1.084.938a3.01 3.01 0 0 1 1.592 1.113c.423.547.886 1.325 1.387 2.334L17.85 15h-3.398l-1.72-3.701a2.34 2.34 0 0 0-.165-.303c-.052-.098-.17-.322-.352-.674-.364-.683-.664-1.12-.898-1.308-.234-.19-.524-.284-.87-.284V15H7.627V8.73c-.332 0-.618.092-.859.274-.24.182-.54.622-.898 1.318-.202.39-.323.616-.362.674a4.524 4.524 0 0 0-.166.303L3.623 15H.224l1.953-3.926c.482-.97.934-1.738 1.358-2.304.43-.573.973-.954 1.63-1.143-.52-.293-.885-.602-1.093-.928a7.1 7.1 0 0 1-.576-1.25c-.326-.911-.573-1.52-.743-1.826a1.605 1.605 0 0 0-.664-.684c-.273-.15-.722-.224-1.347-.224a10.8 10.8 0 0 0-.371.01V.585c.214.007.354.01.42.01 1.4 0 2.395.206 2.988.616.586.417 1.162 1.364 1.728 2.842.443 1.146.785 1.878 1.026 2.197.247.313.612.488 1.093.527V.684h2.823Z" fill="currentColor"/></svg>'
    icons['italic'] =
      '<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.906.684H5.83L4.492 6.992c.586 0 1.064-.078 1.435-.234.371-.163.762-.482 1.172-.957.41-.475.833-1.094 1.27-1.856.696-1.23 1.2-2.018 1.513-2.363A2.753 2.753 0 0 1 11.035.82c.449-.162.892-.244 1.328-.244.058 0 .433.026 1.123.078l-.332 1.592c-.065 0-.186-.01-.361-.03a5.516 5.516 0 0 0-.538-.048 1.25 1.25 0 0 0-.898.38c-.267.255-.602.723-1.006 1.407-.788 1.341-1.422 2.26-1.904 2.754a3.435 3.435 0 0 1-1.7.967c.97.37 1.83 1.474 2.579 3.31L10.946 15H8.848L7.49 11.65c-.54-1.328-1.026-2.213-1.455-2.656-.43-.45-1.039-.69-1.827-.723L2.773 15H.849L3.906.684Z" fill="currentColor"/></svg>'
    icons['underline'] =
      '<svg width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.757 18H9.863v-5.771c-1.7.631-3.187.947-4.463.947-.996 0-1.875-.231-2.637-.694-.762-.468-1.273-1.06-1.533-1.777C.976 9.99.85 9.051.85 7.893v-4.21h1.894v4.034c0 1.562.283 2.59.85 3.086.572.488 1.259.732 2.06.732 1.334 0 2.737-.296 4.209-.889V3.684h1.894V18Z" fill="currentColor"/><path stroke="currentColor" stroke-width="1.5" stroke-linecap="round" d="M.75 21.25h12.499"/></svg>'

    icons['image'] =
      '<svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.559 6.962v12.755a.284.284 0 0 1-.284.283H.284A.284.284 0 0 1 0 19.716V6.963c0-.156.127-.283.284-.283h14.991c.156 0 .284.127.284.283Zm-9.553 4.545 3.434 3.34c.11.107.289.106.399-.004l1.675-1.686a.283.283 0 0 1 .405.003l1.664 1.735c.176.185.488.06.488-.195V8.45a.284.284 0 0 0-.284-.284H1.772a.284.284 0 0 0-.284.284v6.494c0 .252.306.378.484.2l3.636-3.636c.11-.11.287-.11.398-.002Zm-4.258 7.001h12.054c.158 0 .285-.13.283-.287a5.52 5.52 0 0 1 .007-.438c.013-.192-.053-.325-.19-.459-.662-.65-1.317-1.307-1.97-1.967a.883.883 0 0 1-.058-.067.281.281 0 0 0-.416-.024L9.73 16.944a.284.284 0 0 1-.398-.003L6.04 13.645a.287.287 0 0 0-.41.008l-.001.002c-1.255 1.259-2.5 2.527-3.776 3.763-.26.251-.398.503-.387.824.006.149.133.266.283.266Z" fill="currentColor"/><path d="M5.933 4.812V.35A.35.35 0 0 1 6.283 0H21.14a.35.35 0 0 1 .35.35v11.132a.35.35 0 0 1-.35.35H17.42a.35.35 0 0 1-.349-.35v-1.479a.35.35 0 0 1 .35-.349h.753a.35.35 0 0 1 .35.35v.002c0 .192.156.349.348.349h.784a.35.35 0 0 0 .35-.35V1.848a.35.35 0 0 0-.35-.35h-.767a.35.35 0 0 0-.349.35.35.35 0 0 1-.35.35h-.791a.35.35 0 0 1-.35-.35v-.007a.35.35 0 0 0-.349-.35h-5.97a.35.35 0 0 0-.35.35v.006a.35.35 0 0 1-.349.35h-.78a.35.35 0 0 1-.349-.35.35.35 0 0 0-.349-.35h-.79a.35.35 0 0 0-.349.35v2.965a.35.35 0 0 1-.349.35h-.78a.349.349 0 0 1-.35-.35Z" fill="currentColor"/></svg>'
    icons['list']['bullet'] =
      '<svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.679.488c2.07 0 4.14-.004 6.21.002.722.002 1.155.427 1.107 1.062-.043.553-.456.888-1.125.89-1.863.005-3.725.003-5.59.003-2.259 0-4.52.002-6.779-.001-.603-.001-1-.268-1.114-.73-.168-.67.308-1.221 1.08-1.223 2.07-.008 4.14-.003 6.21-.003ZM12.69 12.193h6.107c.769.002 1.199.353 1.202.972.003.621-.429.983-1.191.984-4.088.002-8.178.002-12.266 0-.756 0-1.187-.373-1.177-.997.01-.602.435-.956 1.165-.957 2.054-.003 4.107-.002 6.16-.002ZM12.694 8.285c-2.07 0-4.14.004-6.208-.002-.722-.002-1.135-.381-1.12-.993a.938.938 0 0 1 .815-.922.96.96 0 0 1 .154-.013c4.225-.001 8.45-.006 12.675.003.648.001 1.04.458.984 1.066-.05.538-.438.856-1.093.858-1.827.006-3.655.002-5.484.003h-.723ZM2.917 1.453A1.456 1.456 0 0 1 1.452 2.93 1.485 1.485 0 0 1 0 1.477 1.487 1.487 0 0 1 1.48 0a1.458 1.458 0 0 1 1.438 1.453ZM2.917 13.161a1.455 1.455 0 0 1-1.468 1.474A1.486 1.486 0 0 1 0 13.18a1.487 1.487 0 0 1 1.48-1.475c.795.01 1.433.658 1.437 1.456ZM2.916 7.326a1.434 1.434 0 0 1-1.432 1.447A1.468 1.468 0 0 1 0 7.31a1.468 1.468 0 0 1 1.498-1.447c.803.015 1.421.653 1.418 1.463Z" fill="currentColor"/></svg>'

    icons['list']['ordered'] =
      '<svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.066 1.914c0-.52.422-.944.944-.944h13.037a.944.944 0 1 1 0 1.888H6.009a.944.944 0 0 1-.943-.944ZM5.072 7.913v-.02c0-.52.422-.943.944-.943h13.039c.52 0 .944.422.944.944v.02c0 .52-.422.943-.944.943H6.015a.944.944 0 0 1-.943-.944ZM20 13.877v.03c0 .52-.422.943-.944.943H6.02a.944.944 0 0 1-.944-.944v-.029c0-.52.422-.944.944-.944h13.037a.945.945 0 0 1 .944.944ZM.059 15.83v-.94c.513 0 .994.024 1.47-.012.18-.014.348-.165.522-.255-.162-.08-.318-.18-.487-.235-.126-.04-.27-.024-.464-.036v-.828l1-.339-.069-.27H.073v-.935h2.91v3.853c-.967-.002-1.908-.002-2.924-.002ZM.063 6.918v-.939h2.9c.5 1.503-1.051 1.87-1.582 2.911h1.617v.939H.096c-.493-1.498 1.04-1.877 1.598-2.911H.063ZM1.086.956.074.88V0h1.934v3.848h-.922V.956Z" fill="currentColor"/></svg>'
  },
}
</script>

<style lang="scss" scoped>
$fontSizes: '14px', '16px', '18px', '20px', '22px';

.wu-editor {
  &::v-deep {
    @each $size in $fontSizes {
      @include fontSizeEditor($size);
    }

    .ql-toolbar {
      border: none;
      color: #95b0da;
      display: flex;
      padding: 0px 22px 12px !important;
      button,
      button svg {
        width: auto !important;
        height: auto !important;
      }
      button:hover {
        color: $blue02 !important;
      }
      .ql-color-picker {
        &.ql-expanded {
          .ql-picker-label {
            &::after {
              transform: rotate(180deg) translateY(50%);
            }
          }
        }
        .ql-picker-label {
          position: relative;
          width: 20px;
          height: 20px;
          background: #464ea3;
          border: 2px solid rgba(255, 255, 255, 0.5);
          border-radius: 4px;
          &::after {
            content: '';
            position: absolute;
            top: 50%;
            right: -14px;
            width: 8px;
            height: 6px;
            background-image: url("data:image/svg+xml,%3Csvg width='8' height='6' viewBox='0 0 8 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M.272.826a.926.926 0 0 0 0 1.31L3.326 5.19a.923.923 0 0 0 .672.27.923.923 0 0 0 .668-.27l3.055-3.055A.926.926 0 1 0 6.41.826L3.997 3.242 1.581.826a.926.926 0 0 0-1.31 0Z' fill='%2395B0DA'/%3E%3C/svg%3E");
            transform: translateY(-50%);
          }
          svg {
            display: none;
          }
        }
      }
    }

    .ql-formats {
      display: flex;
      align-items: center;
      margin: 0px 25px 0px 0px !important;
    }

    .ql-color .ql-picker-options {
      padding: 12px;
      border: none;
      box-shadow: 0px 6px 8px rgba(128, 133, 187, 0.15);
      border-radius: 16px;

      .ql-picker-item {
        width: 20px;
        height: 20px;
        border: 2px solid #95b0da;
        border-radius: 4px;
        &:hover {
          border-color: $blue02;
        }
      }
    }

    .ql-size {
      width: auto !important;
      &.ql-expanded {
        .ql-picker-label {
          color: $blue02 !important;

          border: 1px solid #dce5f2 !important;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
          &::after {
            transform: rotate(180deg) translateY(50%);
          }
        }
        .ql-picker-options {
          padding: 0px;
          font-weight: 400;
          font-size: 14px;
          line-height: 19px;
          color: $blue04;

          border: 1px solid #dce5f2 !important;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          box-shadow: none;
          .ql-picker-item {
            padding: 5px 8px;
            &:hover {
              color: $blue02;
              background-color: #ecf6ff;
            }
            &.ql-selected {
              color: $blue02;
            }
          }
        }
      }
      .ql-picker-label {
        position: relative;
        padding: 0px 21px 0px 5px;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        display: inline-flex;

        color: $blue02;
        &:hover {
          color: $blue02 !important;
        }
        svg {
          display: none;
        }
        &::after {
          content: '';
          position: absolute;
          top: 50%;
          right: 5px;
          width: 10px;
          height: 6px;
          background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m.703 1.707 3.585 3.586a1 1 0 0 0 1.415 0l3.586-3.586C9.919 1.077 9.472 0 8.58 0H1.41C.519 0 .073 1.077.703 1.707Z' fill='%2395B0DA'/%3E%3C/svg%3E");
          transform: translateY(-50%);
        }
      }
    }

    .ql-active {
      color: $blue02 !important;
    }

    .ql-container {
      border: 2px solid #dce5f2 !important;
      border-radius: 8px;
    }
  }
}
</style>
