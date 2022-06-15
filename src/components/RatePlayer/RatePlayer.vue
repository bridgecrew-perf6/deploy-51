<template>
  <div class="rate-player">
    <h3 class="rate-player__title title-blue-20">Оценить игрока</h3>
    <div class="rate-player__wrapper">
      <div class="rate-player__header">
        <div class="rate-player__header-person">
          <div class="rate-player__header-logo">
            <div class="rate-player__header-logo-icon">
              <svg width="34" height="48" viewBox="0 0 34 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M31.1383 12.475C31.1383 12.475 20.6338 14.9152 17.1157 14.9152C13.6473 14.9152 3.29142 12.475 3.29142 12.475C1.85448 12.475 0.714844 13.6172 0.714844 15.071V18.5496C0.714844 20.0033 1.85448 21.1455 3.29142 21.1455H31.1383C32.5752 21.1455 33.7148 20.0033 33.7148 18.5496V15.071C33.7148 13.6172 32.5752 12.475 31.1383 12.475ZM8.64277 18.8092C8.64277 18.9649 8.49412 19.0688 8.34547 19.0688H4.97611C4.13376 19.0688 3.24187 18.7053 3.24187 18.29V15.694C3.24187 15.2786 4.08421 15.3306 4.97611 15.7459L8.34547 17.4073C8.54367 17.5112 8.64277 17.6669 8.64277 17.8227V18.8092ZM31.5842 18.29C31.5842 18.7053 30.7419 19.0688 29.85 19.0688H26.4806C26.2824 19.0688 26.1833 18.9649 26.1833 18.8092V17.8746C26.1833 17.7189 26.332 17.5112 26.4806 17.4593L29.85 15.7978C30.6923 15.3825 31.5842 15.2786 31.5842 15.7459V18.29ZM4.03466 11.4366H4.08421C4.18331 11.4366 13.9446 13.8768 17.1653 13.8768C20.4356 13.8768 30.2959 11.4885 30.395 11.4366H30.4446H30.4941C30.6428 11.4366 30.7914 11.4366 30.9401 11.4885C29.3049 6.45234 26.3815 2.45455 22.7644 0.429688C22.5166 0.741204 22.1698 0.948882 21.7239 0.948882H12.7058C12.3094 0.948882 11.9626 0.793124 11.7148 0.481607C8.09773 2.50647 5.1743 6.45234 3.58872 11.4885C3.68782 11.4885 3.83647 11.4366 3.98511 11.4366H4.03466ZM20.9806 5.62163C20.9806 5.20628 21.3275 4.89476 21.6743 4.89476H24.0527C24.1518 4.89476 24.2013 5.05052 24.2013 5.20628V6.45234C24.2013 6.6081 24.1518 6.81578 24.0527 6.8677L21.6743 8.7368C21.3275 8.9964 20.9806 8.94448 20.9806 8.52912V5.62163ZM10.4266 5.20628C10.4266 5.05052 10.4761 4.89476 10.5752 4.89476H12.9536C13.3004 4.89476 13.6473 5.20628 13.6473 5.62163V8.52912C13.6473 8.94448 13.3004 8.9964 12.9536 8.7368L10.5752 6.91962C10.4761 6.8677 10.4266 6.66002 10.4266 6.50426V5.20628ZM20.9806 2.29879C20.9806 2.14303 21.3275 2.09111 21.6743 2.19495L24.0527 2.97374C24.1518 3.02566 24.2013 3.07758 24.2013 3.18142V3.75253C24.2013 3.80445 24.1518 3.90829 24.0527 3.90829H21.6743C21.3275 3.90829 20.9806 3.75253 20.9806 3.59677V2.29879ZM10.4266 3.18142C10.4266 3.1295 10.4761 3.02566 10.5752 2.97374L12.9536 2.19495C13.3004 2.09111 13.6473 2.09111 13.6473 2.29879V3.54485C13.6473 3.70061 13.3004 3.85637 12.9536 3.85637H10.5752C10.4761 3.85637 10.4266 3.80445 10.4266 3.70061V3.18142ZM32.377 21.7167H29.6518C29.3545 21.7167 29.1563 22.4435 29.1563 23.2223V28.9335H28.9085C28.6112 28.9335 28.413 29.6603 28.4626 30.4391L28.8094 38.1751C28.8094 38.279 28.859 38.3828 28.9085 38.4347C27.0257 43.0555 22.6653 46.2746 17.6112 46.2746C12.5572 46.2746 8.19683 43.0555 6.31394 38.4866C6.41304 38.4347 6.46259 38.3309 6.46259 38.1751L6.80944 30.4391C6.85899 29.6603 6.66079 28.9335 6.36349 28.9335H6.16529V23.2223C6.16529 22.4435 5.91755 21.7167 5.6698 21.7167H2.89502C2.59773 21.7167 2.54818 22.4435 2.69683 23.2223L3.98511 28.9335H3.58872C3.29142 28.9335 3.19232 29.6603 3.34097 30.4391L4.72836 38.1751C4.77791 38.3309 4.82746 38.4347 4.92656 38.4866C6.85899 43.7824 11.7644 47.5725 17.5617 47.5725C23.3094 47.5725 28.2148 43.7824 30.1968 38.4866C30.2959 38.4866 30.4446 38.3309 30.4446 38.1751L31.832 30.4391C31.9806 29.6603 31.8815 28.9335 31.5842 28.9335H31.2374L32.5257 23.2223C32.7239 22.4435 32.6743 21.7167 32.377 21.7167ZM3.78692 29.4007H4.13376L4.48061 30.9583C4.53016 31.1141 4.62926 31.2698 4.77791 31.2698H5.9671C6.0662 31.2698 6.16529 31.1141 6.16529 30.9583V29.4007H6.21484C6.26439 29.5565 6.36349 29.9199 6.36349 30.3872L6.01665 37.8117H5.1743L3.78692 30.3353C3.73737 29.9199 3.73737 29.6084 3.78692 29.4007ZM31.4851 29.4007C31.5347 29.5565 31.5347 29.9199 31.4356 30.3353L30.0977 37.8117H29.2554L28.9581 30.4391C28.9581 29.9718 29.0076 29.6084 29.1067 29.4527H29.2058V31.0102C29.2058 31.166 29.3049 31.3218 29.404 31.3218H30.5932C30.6923 31.3218 30.841 31.166 30.8905 31.0102L31.2374 29.4527H31.4851V29.4007ZM7.55268 28.5181C7.15629 28.5181 6.85899 28.3104 6.85899 28.0508V22.4954C6.85899 22.2359 7.15629 22.0282 7.55268 22.0282H27.6202C28.0166 22.0282 28.3139 22.2359 28.3139 22.4954V28.1027C28.3139 28.3623 28.0166 28.57 27.6202 28.57H27.3725C25.4896 27.4797 21.823 26.7009 17.6112 26.7009C13.3995 26.7009 9.68331 27.4797 7.84998 28.57H7.55268V28.5181Z"
                    fill="white"/>
              </svg>
            </div>
            <span>18</span>
          </div>
          <div class="rate-player__header-info">
            <div class="rate-player__header-title">Иванов Кирилл</div>
            <p class="rate-player__header-subtitle">8 лет, защитник</p>
          </div>
        </div>
        <div class="rate-player__bars" v-if="type !== 'goalkeeper'">
          <progress-block
              class="rate-player__bar"
              bg="#2ABAF3"
              title="Передачи"
              num="47"/>
          <progress-block
              class="rate-player__bar"
              bg="#FFA217"
              title="Голы"
              num="32"/>
          <progress-block
              class="rate-player__bar"
              bg="#64C048"
              title="Штраф. время"
              num="12"
              text="мин"/>
          <progress-block
              class="rate-player__bar"
              bg="#64C048"
              title="Очки"
              num="79"/>
          <progress-block
              class="rate-player__bar"
              bg="#2ABAF3"
              title="+ / -"
              num="+13"/>
        </div>
        <div class="rate-player__bars" v-if="type === 'goalkeeper'">
          <progress-block
              class="rate-player__bar"
              bg="#464EA3"
              title="Броски в створ"
              num="407"
              style="min-width: 137px">
            <div class="progress__num-content">407</div>
            <div class="rate-player__bar-progress">
              <span></span>
            </div>
          </progress-block>
          <progress-block
              class="rate-player__bar"
              bg="#FFA217"
              title="Отбито бросков"
              num="78"
              text="%"
              style="min-width: 163px"/>
          <progress-block
              class="rate-player__bar"
              bg="#2ABAF3"
              title="Время на площадке"
              num="102 : 34"
              style="min-width: 190px">
            <div class="rate-player__bar-timer">
              <div class="rate-player__bar-time">102<span>мин</span></div>
              <div class="rate-player__bar-time-dots">:</div>
              <div class="rate-player__bar-time"> 34 <span>сек</span></div>
            </div>
          </progress-block>
          <progress-block
              class="rate-player__bar"
              bg="#FF4B6B"
              title="КНН"
              style="min-width: 140px">
            <div class="rate-player__bar-bg">
              <svg width="116" height="80" viewBox="0 0 116 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0_1046_37556" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="2" width="108" height="78">
                  <path d="M0.771484 30.3985C0.771484 14.9345 13.3075 2.39844 28.7715 2.39844H107.817V68.0005C107.817 74.628 102.444 80.0005 95.8166 80.0005H12.7715C6.14407 80.0005 0.771484 74.628 0.771484 68.0005V30.3985Z" fill="#FF4E78"/>
                </mask>
                <g mask="url(#mask0_1046_37556)">
                  <ellipse cx="90.5012" cy="20.9558" rx="47.2258" ry="50.6101" fill="white" fill-opacity="0.2"/>
                  <ellipse cx="90.5006" cy="20.9545" rx="20.4645" ry="21.931" fill="white" fill-opacity="0.2"/>
                  <ellipse cx="90.4998" cy="20.9552" rx="11.8065" ry="12.6525" fill="white" fill-opacity="0.2"/>
                  <ellipse cx="90.5009" cy="20.956" rx="3.14839" ry="3.374" fill="#FF4B6B"/>
                </g>
              </svg>
            </div>
            <div class="progress__num-content">3.4</div>
          </progress-block>
        </div>
      </div>
      <div class="rate-player__content">
        <custom-drop-down title="Катание"></custom-drop-down>
        <custom-drop-down
            title="Техника владения клюшкой"
            v-if="type !== 'goalkeeper'">
          <template #open-content>
            <div class="rate-player__drop">
              <div class="rate-player__drop-content">
                <div class="rate-player__drop-progress-wrapper">
                  <p class="rate-player__drop-progress-label">Ведение шайбы </p>
                  <div class="rate-player__drop-progress">
                    <custom-progress
                        class="rate-player__progress-bar"
                        :progressValue="form.stickHandlingTechnique.dribblingPuck"
                        v-model="form.stickHandlingTechnique.dribblingPuck"/>
                    <div class="rate-player__drop-progress-num">{{ form.stickHandlingTechnique.dribblingPuck }} <span>баллов</span>
                    </div>
                  </div>
                </div>
                <div class="rate-player__drop-progress-wrapper">
                  <p class="rate-player__drop-progress-label">Укрывание шайбы </p>
                  <div class="rate-player__drop-progress">
                    <custom-progress
                        class="rate-player__progress-bar"
                        :progressValue="form.stickHandlingTechnique.coveringPuck"
                        v-model="form.stickHandlingTechnique.coveringPuck"/>
                    <div class="rate-player__drop-progress-num">{{ form.stickHandlingTechnique.coveringPuck }} <span>баллов</span>
                    </div>
                  </div>
                </div>
                <div class="rate-player__drop-progress-wrapper">
                  <p class="rate-player__drop-progress-label">Выполнение передач </p>
                  <div class="rate-player__drop-progress">
                    <custom-progress
                        class="rate-player__progress-bar"
                        :progressValue="form.stickHandlingTechnique.makingTransfers"
                        v-model="form.stickHandlingTechnique.makingTransfers"/>
                    <div class="rate-player__drop-progress-num">{{ form.stickHandlingTechnique.makingTransfers }} <span>баллов</span>
                    </div>
                  </div>
                </div>
                <div class="rate-player__drop-progress-wrapper">
                  <p class="rate-player__drop-progress-label">Выполнение передач </p>
                  <div class="rate-player__drop-progress">
                    <custom-progress
                        class="rate-player__progress-bar"
                        :progressValue="form.stickHandlingTechnique.receivingPuck"
                        v-model="form.stickHandlingTechnique.receivingPuck"/>
                    <div class="rate-player__drop-progress-num">{{ form.stickHandlingTechnique.receivingPuck }} <span>баллов</span>
                    </div>
                  </div>
                </div>
                <div class="rate-player__drop-progress-wrapper">
                  <p class="rate-player__drop-progress-label">Выполнение передач </p>
                  <div class="rate-player__drop-progress">
                    <custom-progress
                        class="rate-player__progress-bar"
                        :progressValue="form.stickHandlingTechnique.slapShot"
                        v-model="form.stickHandlingTechnique.slapShot"/>
                    <div class="rate-player__drop-progress-num">{{ form.stickHandlingTechnique.slapShot }}
                      <span>баллов</span></div>
                  </div>
                </div>
              </div>
              <div class="rate-player__drop-content">
                <div class="rate-player__drop-progress-wrapper">
                  <p class="rate-player__drop-progress-label">Ведение шайбы </p>
                  <div class="rate-player__drop-progress">
                    <custom-progress
                        class="rate-player__progress-bar"
                        :progressValue="form.stickHandlingTechnique.wristThrow"
                        v-model="form.stickHandlingTechnique.wristThrow"/>
                    <div class="rate-player__drop-progress-num">{{ form.stickHandlingTechnique.wristThrow }} <span>баллов</span>
                    </div>
                  </div>
                </div>
                <div class="rate-player__drop-progress-wrapper">
                  <p class="rate-player__drop-progress-label">Укрывание шайбы </p>
                  <div class="rate-player__drop-progress">
                    <custom-progress
                        class="rate-player__progress-bar"
                        :progressValue="form.stickHandlingTechnique.snapShot"
                        v-model="form.stickHandlingTechnique.snapShot"/>
                    <div class="rate-player__drop-progress-num">{{ form.stickHandlingTechnique.snapShot }}
                      <span>баллов</span></div>
                  </div>
                </div>
                <div class="rate-player__drop-progress-wrapper">
                  <p class="rate-player__drop-progress-label">Выполнение передач </p>
                  <div class="rate-player__drop-progress">
                    <custom-progress
                        class="rate-player__progress-bar"
                        :progressValue="form.stickHandlingTechnique.oneTouchThrow"
                        v-model="form.stickHandlingTechnique.oneTouchThrow"/>
                    <div class="rate-player__drop-progress-num">{{ form.stickHandlingTechnique.oneTouchThrow }} <span>баллов</span>
                    </div>
                  </div>
                </div>
                <div class="rate-player__drop-progress-wrapper">
                  <p class="rate-player__drop-progress-label">Выполнение передач </p>
                  <div class="rate-player__drop-progress">
                    <custom-progress
                        class="rate-player__progress-bar"
                        :progressValue="form.stickHandlingTechnique.correction"
                        v-model="form.stickHandlingTechnique.correction"/>
                    <div class="rate-player__drop-progress-num">{{ form.stickHandlingTechnique.correction }} <span>баллов</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </custom-drop-down>
        <custom-drop-down
            title="Перемещения"
            v-if="type === 'goalkeeper'">
          <template #open-content>
            <div class="rate-player__drop">
              <div class="rate-player__drop-content">
                <div class="rate-player__drop-progress-wrapper">
                  <p class="rate-player__drop-progress-label">Перемещения на коньках </p>
                  <div class="rate-player__drop-progress">
                    <custom-progress
                        class="rate-player__progress-bar"
                        :progressValue="form.stickHandlingTechnique.dribblingPuck"
                        v-model="form.stickHandlingTechnique.dribblingPuck"/>
                    <div class="rate-player__drop-progress-num">{{ form.stickHandlingTechnique.dribblingPuck }} <span>баллов</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="rate-player__drop-content">
                <div class="rate-player__drop-progress-wrapper">
                  <p class="rate-player__drop-progress-label">Перемещения на щитках </p>
                  <div class="rate-player__drop-progress">
                    <custom-progress
                        class="rate-player__progress-bar"
                        :progressValue="form.stickHandlingTechnique.wristThrow"
                        v-model="form.stickHandlingTechnique.wristThrow"/>
                    <div class="rate-player__drop-progress-num">{{ form.stickHandlingTechnique.wristThrow }} <span>баллов</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </custom-drop-down>
        <custom-drop-down
            title="Техника ловли и отбивания шайбы"
            v-if="type === 'goalkeeper'"></custom-drop-down>
        <custom-drop-down title="Игра в защите"></custom-drop-down>
        <custom-drop-down title="Конкурентоспособность"></custom-drop-down>
        <custom-drop-down
            title="Силовая игра"
            v-if="type !== 'goalkeeper'"></custom-drop-down>
        <custom-drop-down title="Понимание игры"></custom-drop-down>
      </div>
      <div class="rate-player__characteristic">
        <div class="rate-player__characteristic-header">
          <div class="rate-player__characteristic-header-content">
            <div class="rate-player__characteristic-logo">
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="34" height="34" rx="6" fill="#95B0DA"/>
                <rect width="31.7333" height="31.7333" rx="6" fill="#B9CBE5"/>
              </svg>
            </div>
            <div class="rate-player__characteristic-header-title">Итоговая характеристика</div>
          </div>

          <color-rating-block v-if="type === 'goalkeeper'"/>
          <div class="rate-player__characteristic-header-content" v-if="type !== 'goalkeeper'">
            <div class="rate-player__characteristic-header-name">Общее впечатление</div>
            <base-button label="Отлично">
              <template #icon-left>
                <div style="margin-right: 8px">
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M5.48469 8.97585C5.05685 9.39607 4.3632 9.39607 3.93536 8.97585L0.320284 5.42514C0.105467 5.21415 -0.00148904 4.93733 -0.000585411 4.66079C-0.00948126 4.37451 0.0973062 4.08541 0.319777 3.8669L3.93487 0.316187C4.3627 -0.104028 5.05636 -0.104028 5.48419 0.316187C5.91202 0.736401 5.91203 1.4177 5.48419 1.83792L2.62543 4.64577L5.48469 7.45412C5.91252 7.87433 5.91252 8.55564 5.48469 8.97585Z"
                          fill="white" fill-opacity="0.5"/>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M11.679 8.97585C11.2512 9.39607 10.5575 9.39607 10.1297 8.97585L6.5146 5.42514C6.29242 5.20691 6.18562 4.91827 6.1942 4.63235C6.19301 4.35544 6.29997 4.07817 6.51507 3.8669L10.1302 0.316187C10.558 -0.104028 11.2517 -0.104028 11.6795 0.316187C12.1073 0.736401 12.1073 1.4177 11.6795 1.83792L8.82024 4.64625L11.679 7.45412C12.1068 7.87433 12.1068 8.55564 11.679 8.97585Z"
                          fill="white" fill-opacity="0.5"/>
                  </svg>
                </div>
              </template>
            </base-button>
          </div>
        </div>
        <div class="rate-player__characteristic-ratings">
          <slot name="ratings"></slot>
        </div>
        <div class="rate-player__characteristic-footer">
          <div class="rate-player__characteristic-tags">
            <div class="rate-player__characteristic-tag">
              <p>выносливый</p>
              <span>
                <img src="@/assets/images/svg/x-wht.svg" alt="delete">
              </span>
            </div>
            <div class="rate-player__characteristic-tag">
              <p>отличное владение клюшкой</p>
              <span>
                <img src="@/assets/images/svg/x-wht.svg" alt="delete">
              </span>
            </div>
          </div>
          <button class="rate-player__characteristic-add-tag">+ добавить тег</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBlock from "@/components/RatePlayer/ProgressBlock";
import CustomDropDown from "@/components/RatePlayer/CustomDropDown";
import CustomProgress from "@/components/CustomProgress";
import RatingBlock from "@/components/RatePlayer/RatingBlock";
import ColorRatingBlock from "@/components/RatePlayer/ColorRatingBlock";

export default {
  components: {
    ProgressBlock,
    CustomDropDown,
    CustomProgress,
    RatingBlock,
    ColorRatingBlock
  },
  props: {
    type: String
  },
  data() {
    return {
      form: {
        stickHandlingTechnique: {
          dribblingPuck: 0,
          coveringPuck: 0,
          makingTransfers: 0,
          receivingPuck: 0,
          slapShot: 0,
          wristThrow: 0,
          snapShot: 0,
          oneTouchThrow: 0,
          correction: 0
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.rate-player {
  &__title {
    margin-left: 30px;
  }

  &__wrapper {
    margin-top: 16px;
    width: 100%;
    border-radius: 28px;
    background-color: $blue01;
    color: #fff;
    box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);
  }

  &__header {
    width: 100%;
    padding: 14px 20px 22px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__header-person {
    display: flex;
    align-items: center;
  }

  &__header-logo {
    position: relative;
    width: 88px;
    height: 88px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $blue02;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border: 2px solid #95B0DA;

    span {
      position: absolute;
      bottom: -10px;
      width: 39px;
      height: 26px;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $blue02;
      font-size: 16px;
      font-weight: 700;
      border: 2px solid #95B0DA;
    }
  }

  &__header-logo-icon {
    margin-bottom: 3px;
  }

  &__header-info {
    margin-left: 12px;
    max-width: 149px;
    display: flex;
    flex-direction: column;
  }

  &__header-title {
    font-size: 20px;
    font-weight: 600;
  }

  &__header-subtitle {
    font-size: 15px;
    font-weight: 400;
  }

  &__bars {
    display: flex;
  }

  &__bar {
    min-width: 118px;
    width: 100%;
    max-width: 120px;

    &:not(:first-child) {
      margin-left: 11px;
    }
  }

  &__bar-progress {
    margin-top: 10px;
    width: 112px;
    height: 4px;
    border-radius: 10px;
    background-color: $blue01;
    overflow: hidden;

    span {
      display: block;
      width: 50%;
      height: 4px;
      border-radius: 10px;
      background-color: #FFA217;
    }
  }

  &__bar-timer {
    display: flex;
  }

  &__bar-time {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 48px;
    font-weight: 700;
    line-height: 1;
    font-family: 'FolksBold', serif;

    span {
      font-size: 12px;
      font-weight: 500;
      font-family: $Manrope, Arial, -apple-system, system-ui, 'Segoe UI', 'Helvetica Neue', sans-serif;
    }
  }

  &__bar-time-dots {
    margin: -3px 4px 0 4px;
    font-size: 48px;
    font-weight: 700;
    line-height: 1;
    font-family: 'FolksBold', serif;
  }

  &__bar-bg {
    top: -2px;
    right: -8px;
    position: absolute;
    z-index: 0;
  }

  &__content {
    border-radius: 28px;
    background-color: #464EA3;
    overflow: hidden;
  }

  &__drop {
    display: flex;
    justify-content: space-between;
  }

  &__drop-content {
    &:not(:first-child) {
      margin-left: 15px;
    }
  }

  &__drop-progress-wrapper {
    &:not(:first-child) {
      margin-top: 20px;
    }
  }

  &__drop-progress-label {
    margin-left: 30px;
    margin-bottom: 2px;
    font-size: 16px;
    font-weight: 400;
  }

  &__drop-progress {
    width: 410px;
    display: flex;

    @media (min-width: 1500px) {
      width: 470px;
    }

    @media (min-width: 1600px) {
      width: 500px;
    }

    @media (min-width: 1640px) {
      width: 520px;
    }

    @media (min-width: 1710px) {
      width: 550px;
    }
  }

  &__progress-bar {
    width: 100%;
  }

  &__drop-progress-num {
    min-width: 80px;
    height: 36px;
    margin-left: 19px;
    border-radius: 8px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background: linear-gradient(263.56deg, #333876 -4.31%, #464EA3 100%);
    font-size: 24px;
    font-weight: 700;
    border: 1px solid #333876;

    span {
      margin-left: 3px;
      font-size: 14px;
      font-weight: 400;
      margin-bottom: 4px;
    }
  }

  &__characteristic {
    padding: 20px;
  }

  &__characteristic-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__characteristic-header-content {
    display: flex;
    align-items: center;
  }

  &__characteristic-header-title {
    margin-left: 13px;
    font-size: 20px;
    font-weight: 400;
  }

  &__characteristic-header-name {
    margin-right: 18px;
    font-size: 16px;
    font-weight: 400;
  }

  &__characteristic-ratings {
    margin-top: 23px;
    display: flex;
    justify-content: space-between;
  }

  &__characteristic-footer {
    margin-top: 25px;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #464EA3;
  }

  &__characteristic-tags {
    display: flex;
  }

  &__characteristic-tag {
    padding: 2px 10px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    background-color: $blue02;

    &:not(:first-child) {
      margin-left: 13px;
    }

    p {
      font-size: 12px;
    }

    span {
      margin-left: 4px;
      cursor: pointer;
    }
  }

  &__characteristic-add-tag {
    color: #DCE5F2;
    font-size: 14px;
    font-weight: 400;
  }
}

.characteristic-rating {
  &:not(:first-child) {
    margin-top: 20px;
  }
}
</style>
