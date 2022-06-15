<template>
  <div>
    <v-dialog v-model="show" content-class="modal-review review" max-width="530">
      <div class="v-application v-application--is-ltr">
        <div class="modal-close" @click.stop="show = false"></div>
        <!-- Шапка попапа -->
        <div class="modal-review__header">
          <div class="h2">Оцените домашнего задания</div>
        </div>
        <div class="modal-review__content">
          <div class="review__user user">
            <div class="user__media media">
              <div class="media__avatar">

              </div>
              <div class="media__value value">
                <span class="value__text">37</span>
              </div>
            </div>
            <div class="user__content">
              <span class="user__title">Герасимов Юрий</span>
              <span class="user__subtitle">8 лет, защитник</span>
            </div>
          </div>

          <div class="review__balls balls">
            <div class="balls__title title">
              <span class="title__text">Приседания 20 х 4</span>
            </div>
            <div class="balls__content">
              <div class="balls__content-progress">
                <custom-progress
                    :progressValue="progressValue"
                    v-model="progressValue"/>
              </div>
              <div class="balls__result">
                <div class="result__content">
                  <div class="result__value">{{ progressValue }}</div>
                  <div class="result__text">баллов</div>
                </div>
              </div>
            </div>
          </div>
          <div class="review__prompt prompt">
            <svg class="prompt__ico" width="40" height="40" viewBox="0 0 40 40" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <rect width="40" height="40" fill="#E5E5E5"/>
              <rect x="-9269" y="-2003" width="15762" height="6036" fill="#9B6262"/>
              <g filter="url(#filter0_d_0_1)">
                <rect x="-47" y="-261" width="541" height="270" rx="28" fill="#36427D"/>
              </g>
              <path d="M-47 -194H494V99C494 114.464 481.464 127 466 127H-19C-34.464 127 -47 114.464 -47 99V-194Z"
                    fill="#464EA3"/>
              <rect x="-17" y="-9" width="482" height="58" rx="16" fill="white"/>
              <circle cx="20" cy="20" r="19.5" transform="rotate(90 20 20)" fill="#2ABAF3"
                      fill-opacity="0.2" stroke="#2ABAF3"/>
              <path
                  d="M19.7877 30.1294H19.7877C25.4456 30.1416 30.1211 25.4911 30.1265 19.8528C30.1319 14.401 25.6379 9.88226 20.2073 9.87014M19.7877 30.1294L9.8672 20.1485C9.87805 14.5082 14.554 9.85799 20.2073 9.87014M19.7877 30.1294C14.3569 30.1186 9.85782 25.5942 9.8672 20.1486L19.7877 30.1294ZM20.2073 9.87014L20.2084 9.37014M20.2073 9.87014L20.2084 9.37014M20.2084 9.37014C25.9163 9.38288 30.6321 14.127 30.6265 19.8533C30.6208 25.7693 25.7196 30.6421 19.7867 30.6294L20.2084 9.37014ZM18.1928 18.718C18.2159 19.7646 19.0264 20.5015 20.008 20.4976C21.0014 20.4937 21.7634 19.7423 21.8104 18.7185L21.8104 18.7181C21.8316 18.2489 21.8262 17.7691 21.8211 17.3064C21.8207 17.2765 21.8204 17.2467 21.8201 17.217H21.8223V16.717V16.7131V16.7093V16.7054V16.7015V16.6977V16.6938V16.6899V16.6861V16.6822V16.6783V16.6745V16.6706V16.6667V16.6629V16.659V16.6551V16.6513V16.6474V16.6436V16.6397V16.6358V16.632V16.6281V16.6242V16.6204V16.6165V16.6126V16.6088V16.6049V16.601V16.5972V16.5933V16.5895V16.5856V16.5817V16.5779V16.574V16.5701V16.5663V16.5624V16.5585V16.5547V16.5508V16.5469V16.5431V16.5392V16.5353V16.5315V16.5276V16.5238V16.5199V16.516V16.5122V16.5083V16.5044V16.5006V16.4967V16.4928V16.489V16.4851V16.4812V16.4774V16.4735V16.4697V16.4658V16.4619V16.4581V16.4542V16.4503V16.4465V16.4426V16.4387V16.4349V16.431V16.4271V16.4233V16.4194V16.4155V16.4117V16.4078V16.404V16.4001V16.3962V16.3924V16.3885V16.3846V16.3808V16.3769V16.373V16.3692V16.3653V16.3614V16.3576V16.3537V16.3498V16.346V16.3421V16.3383V16.3344V16.3305V16.3267V16.3228V16.3189V16.3151V16.3112V16.3073V16.3035V16.2996V16.2957V16.2919V16.288V16.2841V16.2803V16.2764V16.2726V16.2687V16.2648V16.261V16.2571V16.2532V16.2494V16.2455V16.2416V16.2378V16.2339V16.23V16.2262V16.2223V16.2184V16.2146V16.2107V16.2068V16.203V16.1991V16.1953V16.1914V16.1875V16.1837V16.1798V16.1759V16.1721V16.1682V16.1643V16.1605V16.1566V16.1527V16.1489V16.145V16.1411V16.1373V16.1334V16.1295V16.1257V16.1218V16.118V16.1141V16.1102V16.1064V16.1025V16.0986V16.0948V16.0909V16.087V16.0832V16.0793V16.0754V16.0716V16.0677V16.0638V16.06V16.0561V16.0522V16.0484V16.0445V16.0406V16.0368V16.0329V16.029V16.0252V16.0213V16.0175V16.0136V16.0097V16.0059V16.002V15.9981V15.9943V15.9904V15.9865V15.9827V15.9788V15.9749V15.9711V15.9672V15.9633V15.9595V15.9556V15.9517V15.9479V15.944V15.9401V15.9363V15.9324V15.9285V15.9247V15.9208V15.9169V15.9131V15.9092V15.9053V15.9015V15.8976V15.8938V15.8899V15.886V15.8822V15.8783V15.8744V15.8706V15.8667V15.8628V15.859V15.8551V15.8512V15.8474V15.8435V15.8396V15.8358V15.8319V15.828V15.8242V15.8203V15.8164V15.8126V15.8087V15.8048V15.801V15.7971V15.7932V15.7894V15.7855V15.7816V15.7778V15.7739V15.77V15.7662V15.7623V15.7584V15.7546V15.7507V15.7468V15.743V15.7391V15.7352V15.7314V15.7275V15.7236V15.7198V15.7159V15.712V15.7082V15.7043V15.7004V15.6966V15.6927V15.6888V15.685V15.6811V15.6772V15.6734V15.6695V15.6656V15.6618V15.6579V15.654V15.6502V15.6463V15.6424V15.6386V15.6347V15.6308V15.627V15.6231V15.6192V15.6154V15.6115V15.6076V15.6038V15.5999V15.596V15.5922V15.5883V15.5844V15.5806V15.5767V15.5728V15.569V15.5651V15.5612V15.5574V15.5535V15.5496V15.5458V15.5419V15.538V15.5342V15.5303V15.5264V15.5226V15.5187V15.5148V15.511V15.5071V15.5032V15.4994V15.4955V15.4916V15.4877V15.4839V15.48V15.4761V15.4723V15.4684V15.4645V15.4607V15.4568V15.4529V15.4491V15.4452V15.4413V15.4375V15.4336V15.4297V15.4259V15.422V15.4181V15.4143V15.4104V15.4065V15.4027V15.3988V15.3949V15.3911V15.3872V15.3833V15.3794V15.3756V15.3717V15.3678V15.364V15.3601V15.3562V15.3524V15.3485V15.3446V15.3408V15.3369V15.333V15.3292V15.3253V15.3214V15.3176V15.3137V15.3098V15.3059V15.3021V15.2982V15.2943V15.2905V15.2866V15.2827V15.2789V15.275V15.2711V15.2673V15.2634V15.2595V15.2557V15.2518V15.2479V15.244V15.2402V15.2363V15.2324V15.2286V15.2247V15.2208V15.217V15.2131V15.2092V15.2054V15.2015V15.1976V15.1937V15.1899V15.186V15.1821V15.1783V15.1744V15.1705V15.1667V15.1628V15.1589V15.155V15.1512V15.1473V15.1434V15.1396V15.1357V15.1318V15.128V15.1241V15.1202V15.1164V15.1125V15.1086V15.1047V15.1009V15.097V15.0931V15.0893V15.0854V15.0815V15.0777V15.0738V15.0699V15.066V15.0622V15.0583V15.0544V15.0506V15.0467V15.0428V15.0389V15.0351V15.0312V15.0273V15.0235V15.0196V15.0157V15.0119V15.008V15.0041V15.0002V14.9964V14.9925V14.9886V14.9848V14.9809V14.977V14.9731V14.9693V14.9654V14.9615V14.9577V14.9538V14.9499V14.9461V14.9422V14.9383V14.9344V14.9306V14.9267V14.9228V14.919V14.9151V14.9112V14.9073V14.9035V14.8996V14.8957V14.8919V14.888V14.8841V14.8802V14.8764V14.8725V14.8686V14.8648V14.8609V14.857V14.8531V14.8493V14.8454V14.8415V14.8377V14.8338V14.8299V14.826V14.8222V14.8183V14.8144V14.8105V14.8067V14.8028V14.7989V14.7951V14.7912V14.7873V14.7834V14.7796V14.7757V14.7718V14.768V14.7641V14.7602V14.7563V14.7525V14.7486V14.7447V14.7408V14.737C21.8223 14.6725 21.8185 14.6063 21.8108 14.541C21.714 13.5818 21.0107 12.8657 20.0405 12.8458M18.1928 18.718L18.6919 18.7069L18.1928 18.7183C18.1928 18.7182 18.1928 18.7181 18.1928 18.718ZM18.1928 18.718C18.1615 17.3451 18.16 15.9686 18.1942 14.5943L18.1942 14.5938C18.2216 13.5395 19.0574 12.8249 20.0405 12.8458M20.0405 12.8458C20.0406 12.8458 20.0407 12.8458 20.0408 12.8458L20.0301 13.3457L20.0403 12.8458C20.0403 12.8458 20.0404 12.8458 20.0405 12.8458ZM21.8137 23.9709L21.8137 23.9707C21.8001 22.9688 21.0171 22.1894 20.0166 22.1797L20.0164 22.1797C18.9757 22.1699 18.1673 22.992 18.1828 24.0302L18.1828 24.0306C18.1983 25.0159 18.9906 25.8249 19.9813 25.8347L19.9814 25.8347C21.0112 25.8446 21.8272 24.9953 21.8137 23.9709Z"
                  fill="#2ABAF3" stroke="#2ABAF3"/>
              <path
                  d="M7.22834 11.232L7.22854 11.2317C7.38099 11.0074 7.53201 10.8717 7.67683 10.8007C7.81152 10.7346 7.97479 10.7073 8.19803 10.7605L8.19905 10.7607C8.58442 10.8516 8.77673 11.0765 8.79719 11.3805L8.79726 11.3815C8.81399 11.6225 8.73715 11.9304 8.60801 12.1367C6.96881 14.7411 6.13339 17.3678 6.13671 20.0123C6.14003 22.6571 6.98223 25.2806 8.63502 27.8785C8.8198 28.1691 8.86789 28.4261 8.84084 28.6238C8.81471 28.8147 8.71326 28.9949 8.50689 29.1405L8.50674 29.1406C8.29883 29.2873 8.08305 29.3224 7.8828 29.2757C7.67779 29.2278 7.44889 29.0836 7.2539 28.8001L7.25388 28.8001C5.42975 26.1482 4.5326 23.2076 4.50003 19.9666C4.53946 16.7921 5.42939 13.8742 7.22834 11.232ZM4 19.9661C4.03963 16.6939 4.95816 13.6779 6.81504 10.9506C7.1816 10.4113 7.65997 10.1184 8.31384 10.2741C8.86581 10.4043 9.25785 10.7793 9.29606 11.3469C9.32012 11.6936 9.21681 12.1069 9.0314 12.4027C5.83423 17.4822 5.83423 22.5447 9.05688 27.6101C9.52676 28.3489 9.4192 29.1089 8.79505 29.5491C8.15533 30.0006 7.35002 29.8222 6.84193 29.0834C4.95816 26.3448 4.03255 23.3048 4 19.9661Z"
                  fill="#2ABAF3" stroke="#2ABAF3"/>
              <path
                  d="M32.8567 28.6393L32.8567 28.6394C32.61 29.0086 32.3648 29.1797 32.1671 29.237C31.9859 29.2895 31.7782 29.2666 31.5348 29.0978L31.5348 29.0978C31.3117 28.9433 31.2178 28.7655 31.199 28.574C31.1785 28.3655 31.2422 28.0772 31.4637 27.7206C33.0554 25.161 33.8636 22.5759 33.8588 19.9737C33.854 17.3715 33.0363 14.7894 31.4359 12.2356L31.4359 12.2356C31.175 11.8193 31.1561 11.4426 31.2467 11.1942C31.3309 10.9632 31.5312 10.7761 31.893 10.7398L31.8934 10.7397C32.1057 10.7182 32.2582 10.763 32.3886 10.8444C32.5306 10.933 32.6713 11.0813 32.8205 11.3036L32.8206 11.3037C34.5882 13.9353 35.463 16.8343 35.4983 19.9769C35.4644 23.1451 34.6028 26.0271 32.8567 28.6393ZM31.0124 12.501L31.0122 12.5011L31.0124 12.501Z"
                  fill="#2ABAF3" stroke="#2ABAF3"/>
              <defs>
                <filter id="filter0_d_0_1" x="-55" y="-263" width="557" height="286"
                        filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix"
                                 values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                 result="hardAlpha"/>
                  <feOffset dy="6"/>
                  <feGaussianBlur stdDeviation="4"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix"
                                 values="0 0 0 0 0.537255 0 0 0 0 0.607843 0 0 0 0 0.788235 0 0 0 0.15 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1"
                           result="shape"/>
                </filter>
              </defs>
            </svg>
            <span class="prompt__text">Вы не сможете изменить оценку позже</span>
          </div>
        </div>
        <div class="modal-review__footer">
          <div class="d-flex justify-center">
            <base-button class="mr-3" label="Сохранить" type="submit" backgroundColor="#6E65AE"
                         :lightborder="true"
                         @click="addProgressValue"></base-button>
            <base-button label="Отменить" type="submit" backgroundColor="rgba(255,75,107,.2)"
                         :noborder="true"
                         @click="show = false"></base-button>
          </div>
        </div>
      </div>
    </v-dialog>
  </div>
</template>
<script>
import CustomProgress from "@/components/CustomProgress"

export default {
  name: 'ModalReview',
  components: {
    CustomProgress
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    points: {
      type: Number
    }
  },
  data() {
    return {
      progressValue: 0
    }
  },
  computed: {
    show: {
      get() {
        return this.visible
      },
      set(value) {
        if (!value) {
          this.$emit('close')
        }
      },
    },
  },
  mounted() {
    this.progressValue = this.points
  },
  methods: {
    addProgressValue() {
      this.$emit('evaluatePlayer', this.progressValue)
      this.progressValue = this.points
      this.show = false
    }
  }
}
</script>
<style lang="scss">
.v-dialog {
  &.modal-review {
    color: #ffffff;
    border-radius: 28px;
    box-shadow: 0 6px 8px rgba(137, 155, 201, 0.15);
    background: #464EA3;
  }
}
</style>
<style lang="scss" scoped>
.v-dialog {
  &.modal-review {
    color: #ffffff;
    background: #36427D;
    box-shadow: 0 6px 8px rgba(137, 155, 201, 0.15);
    border-radius: 28px;

    .modal-close {
      top: 1.25rem !important;
      right: 1.75rem !important;
      background-image: url('~@/assets/images/svg/icon-close-white.svg') !important;
    }

    .modal-review__header {
      padding: 1.25rem 2rem 1rem;
      border-radius: 28px 28px 0 0;
      background: #36427D;
    }

    .modal-review__content {
      padding: 1.5rem 2rem;
      background: #464EA3;
      border-radius: 0 0 28px 28px;
    }

    .review__user {
      display: flex;
      align-items: center;
      margin-bottom: 1.25rem;
      padding: 0 .25rem;

      .user__media {
        margin-right: .5rem;
        position: relative;

        .media__avatar {
          width: 56px;
          min-width: 56px;
          height: 56px;
          border-radius: 50%;
          border: 2px solid #95B0DA;
          background: #525BBA;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }

        .media__value {
          font-size: 14px;
          line-height: 14px;
          font-weight: 700;
          background: #525BBA;
          padding: 2px 4px;
          border: 1px solid #95B0DA;
          box-sizing: border-box;
          border-radius: 4px;
          position: absolute;
          top: 100%;
          left: 0;
          transform: translate(-15%, -70%);
        }
      }

      .user__content {
        display: flex;
        align-items: center;

        .user__title {
          font-size: 16px;
          line-height: 20px;
          font-weight: 500;
          margin-right: .5rem;
        }

        .user__subtitle {
          font-size: 12px;
          line-height: 20px;
        }
      }
    }

    .review__balls {
      margin-bottom: 1.75rem;

      .balls__title {
        font-size: 14px !important;
        line-height: 20px !important;

        .title__text {
          color: #ffffff;
          font-size: inherit;
          line-height: inherit;
          padding-left: 2.25rem;
        }
      }

      .balls__content {
        margin-top: 11px;
        display: flex;
        align-items: center;


        .balls__content-progress {
          width: 290px;
        }

        .balls__numbers {
          display: flex;
          align-items: center;
          margin-right: .5rem;

          .numbers__arrow {
            color: #B9CBE5;
            font-size: 1.5rem;
            line-height: 1.5rem;
            font-weight: 700;
            cursor: pointer;
            width: 1.5rem;
            display: flex;
            justify-content: center;
          }

          .numbers__content {
            position: relative;
            top: .25rem;
          }
        }

        .balls__result {
          margin-left: 10px;
          padding: 1px;
          border-radius: 8px;
          position: relative;

          &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 8px;
            /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#36427d+0,36427d+100&1+0,0+100 */
            background: -moz-linear-gradient(left, rgba(54, 66, 125, 1) 0%, rgba(54, 66, 125, 0) 100%); /* FF3.6-15 */
            background: -webkit-linear-gradient(left, rgba(54, 66, 125, 1) 0%, rgba(54, 66, 125, 0) 100%); /* Chrome10-25,Safari5.1-6 */
            background: linear-gradient(to right, rgba(54, 66, 125, 1) 0%, rgba(54, 66, 125, 0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#36427d', endColorstr='#0036427d', GradientType=1); /* IE6-9 */
          }

          .result__content {
            background: linear-gradient(263.56deg, #333876 -4.31%, #464EA3 100%);
            padding: .5rem;
            border-radius: 8px;
            display: flex;
            align-items: flex-end;
            position: relative;
            z-index: 2;
          }

          .result__value {
            font-size: 24px;
            line-height: .9;
            margin-right: .5rem;
            font-family: 'FolksBold', serif
          }

          .result__text {
            font-size: 10px;
            line-height: 16px;
          }
        }
      }
    }

    .review__prompt {
      padding: .5rem 1rem;
      background: #FFFFFF;
      border-radius: 16px;
      display: flex;
      align-items: center;

      .prompt__ico {
        width: 2.5rem;
        min-width: 2.5rem;
        height: 2.5rem;
        margin-right: 1rem;
      }

      .prompt__text {
        color: #464EA3;
        font-size: 14px;
        line-height: 20px;
      }
    }

    .modal-review__footer {
      padding: 0 1.5rem 1.5rem;
    }
  }
}
</style>
