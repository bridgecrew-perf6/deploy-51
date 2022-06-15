<template>
  <v-dialog v-model="show" content-class="modal-goal" max-width="668">
    <div class="modal-goal__content">
      <div class="modal-goal__header">
        <div class="modal-goal__title">Поставить цель</div>
        <button class="modal-goal__close" @click="$emit('close')">
          <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4.76098 5.96107C4.13023 5.35239 3.50894 4.75318 2.88765 4.15397C2.0456 3.3403 1.2004 2.52979 0.358349 1.71613C-0.0358687 1.33452 -0.0516374 0.741618 0.314197 0.341092C0.692646 -0.0720484 1.34863 -0.122508 1.76177 0.259095C2.30736 0.76054 2.83404 1.28091 3.36702 1.79497C4.29422 2.68748 5.21827 3.58314 6.14547 4.47565C6.1707 4.50088 6.19909 4.52296 6.23693 4.55765C6.47031 4.33689 6.70368 4.11613 6.93391 3.89852C8.16702 2.72532 9.40014 1.55213 10.6333 0.378937C11.0495 -0.0152809 11.5037 -0.100432 11.9515 0.132945C12.5381 0.442012 12.6769 1.20837 12.2038 1.67828C11.633 2.24595 11.0432 2.7884 10.4598 3.34346C9.56413 4.19497 8.67162 5.04648 7.77596 5.89484C7.75388 5.91691 7.73181 5.93899 7.76334 5.91691C8.06295 6.2449 8.34679 6.58866 8.66531 6.89773C9.82905 8.03623 11.0117 9.15896 12.1754 10.2943C12.7116 10.8178 12.5129 11.6883 11.8064 11.928C11.3933 12.0699 11.0149 11.991 10.6995 11.6851C9.29606 10.3353 7.89265 8.9792 6.48923 7.62624C6.40093 7.54109 6.31577 7.4591 6.22116 7.36764C5.80487 7.76185 5.39488 8.15292 4.98489 8.54083C3.92208 9.55003 2.86242 10.5624 1.79646 11.5684C1.22563 12.1077 0.348888 11.9406 0.0713586 11.2467C-0.0800211 10.8714 0.0114375 10.4678 0.326812 10.1682C1.0774 9.46172 1.83115 8.75213 2.57859 8.03623C3.30079 7.34871 4.023 6.6612 4.76098 5.96107Z"
                fill="#B9CBE5"/>
          </svg>
        </button>
      </div>
      <wu-select placeholder="Выберите цель" class="modal-goal__select-goal"/>
      <div class="modal-goal__main">
        <div class="modal-goal__date-time">
          <div class="modal-goal__date-time-label">Срок выполнения до</div>
          <div class="modal-goal__date-time-row">
            <div class="modal-goal__date-time-input">
              <div class="modal-goal__date-time-icon">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M0.0166255 4.30371C4.68764 4.30371 9.29145 4.30371 13.9549 4.30371C13.9646 4.50534 13.9809 4.69612 13.9809 4.88691C13.9831 6.98231 13.9852 9.07771 13.9809 11.1731C13.9776 12.9596 12.9988 13.9753 11.2156 13.9872C8.36136 14.0056 5.50716 14.0024 2.65295 13.9872C1.12774 13.9796 0.0729942 13.0539 0.0328857 11.5503C-0.0299871 9.15251 0.0166255 6.7525 0.0166255 4.30371ZM3.64048 6.23434C3.15485 6.24735 2.72449 6.69396 2.72774 7.18394C2.731 7.71402 3.22205 8.19315 3.73479 8.16605C4.23669 8.14004 4.63778 7.71293 4.63344 7.20887C4.62802 6.64301 4.19658 6.21916 3.64048 6.23434ZM11.2329 7.22946C11.2513 6.70155 10.8448 6.2571 10.3202 6.23326C9.80852 6.20941 9.35324 6.64084 9.33806 7.16226C9.32288 7.68692 9.74565 8.14329 10.2595 8.1563C10.7906 8.17039 11.2145 7.76714 11.2329 7.22946ZM2.72883 10.6463C2.70173 11.1764 3.10173 11.6176 3.63832 11.6501C4.14238 11.6804 4.61826 11.2425 4.63886 10.7297C4.66054 10.1964 4.25295 9.74438 3.73154 9.72161C3.23073 9.69885 2.75593 10.1368 2.72883 10.6463ZM7.94402 7.20562C7.95703 6.71022 7.53968 6.26578 7.03887 6.24193C6.49361 6.21591 6.02531 6.66361 6.02531 7.20995C6.02531 7.69667 6.46326 8.1357 6.96299 8.14762C7.48223 8.16063 7.92993 7.73136 7.94402 7.20562ZM6.95323 11.6522C7.4367 11.6804 7.94077 11.2078 7.95486 10.7135C7.96895 10.23 7.55377 9.78123 7.05079 9.73679C6.53914 9.69234 6.07735 10.1043 6.03724 10.6409C6.00038 11.1428 6.43507 11.6219 6.95323 11.6522Z"
                      fill="#95B0DA"/>
                  <path
                      d="M13.9302 3.08869C9.29062 3.08869 4.67597 3.08869 0.066744 3.08869C-0.230276 1.54397 0.773521 0.129336 2.29439 0.0567071C3.89656 -0.0191739 5.50416 0.0144306 7.10958 0.00792648C8.51772 0.00250641 9.92477 -0.00833373 11.3329 0.0111785C13.0727 0.0350268 14.1535 1.30441 13.9302 3.08869Z"
                      fill="#95B0DA"/>
                </svg>
              </div>
              <input type="text" v-model="date" v-mask="'##/##/##'" placeholder="__ / __ /__">
            </div>
            <div class="modal-goal__date-time-input modal-goal__date-time-input_time">
              <div class="modal-goal__date-time-icon">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="7" cy="7" r="7" fill="#95B0DA"/>
                  <path
                      d="M7.27246 7.47836C7.90357 7.08462 8.51794 6.70555 9.12992 6.31426C9.66063 5.97677 10.3348 6.24823 10.4782 6.86941C10.5619 7.22891 10.3993 7.63243 10.0838 7.83052C9.01279 8.50306 7.93943 9.17559 6.86846 9.84813C6.56725 10.0364 6.25648 10.0536 5.95288 9.87747C5.6445 9.70384 5.50345 9.4177 5.50106 9.06065C5.50106 7.44901 5.50106 5.83982 5.50106 4.23063C5.50106 3.79776 5.49867 3.36734 5.50106 2.93447C5.50345 2.4478 5.80705 2.07852 6.25648 2.01004C6.78957 1.92933 7.26051 2.34508 7.2629 2.90268C7.26768 3.6657 7.2629 4.42627 7.2629 5.18929C7.2629 5.9303 7.2629 6.67376 7.2629 7.41477C7.26529 7.42945 7.26768 7.44412 7.27246 7.47836Z"
                      fill="white"/>
                </svg>
              </div>
              <input type="text" v-model="time" v-mask="'##:##'" placeholder="___:___">
            </div>
          </div>
        </div>
      </div>
      <div class="modal-goal__row">
        <wu-select outlined
                   label="Способ контроля"
                   placeholder="Выберите способ контроля"
                   class="modal-goal__control-method-select"/>
        <div class="modal-goal__length">
          <p class="modal-goal__length-label">Кол-во чек-пойнтов</p>
          <div class="modal-goal__length-inp">
            <div class="modal-goal__length-arrow" @click="numberCheckpoints--">
              <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M4.63973 0.271425C4.27785 -0.0904584 3.69112 -0.0904583 3.32924 0.271425L0.271414 3.32925C0.0863552 3.51431 -0.00406877 3.75817 0.000142275 4.00069C-0.00370577 4.24275 0.0867259 4.48604 0.271437 4.67076L3.32926 7.72858C3.69114 8.09046 4.27787 8.09046 4.63976 7.72858C5.00164 7.3667 5.00164 6.77997 4.63976 6.41808L2.22166 3.99999L4.63973 1.58192C5.00162 1.22004 5.00162 0.633309 4.63973 0.271425Z"
                      fill="#95B0DA"/>
              </svg>
            </div>
            <input type="text" v-model="numberCheckpoints" v-mask="'####'">
            <div class="modal-goal__length-arrow" @click="numberCheckpoints++">
              <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M0.2714 7.72859C0.633284 8.09047 1.22001 8.09047 1.5819 7.72859L4.63972 4.67076C4.82478 4.4857 4.9152 4.24185 4.91099 3.99933C4.91484 3.75726 4.82441 3.51397 4.6397 3.32926L1.58187 0.271434C1.21999 -0.09045 0.63326 -0.0904499 0.271377 0.271434C-0.0905062 0.633317 -0.0905062 1.22005 0.271377 1.58193L2.68947 4.00002L0.2714 6.41809C-0.0904828 6.77998 -0.0904828 7.3667 0.2714 7.72859Z"
                      fill="#95B0DA"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <base-button class="modal-goal__btn" backgroundColor="#2ABAF3" label="Поставить цель"/>
    </div>
  </v-dialog>
</template>

<script>
export default {
  name: 'ModalCreateGoal',
  props: {
    visible: {
      type: Boolean,
      default: false,
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
    }
  },
  data() {
    return {
      date: '',
      time: '',
      numberCheckpoints: 0
    }
  }
}
</script>

<style lang="scss">
.modal-goal {
  border-radius: 28px !important;
}
</style>

<style scoped lang="scss">
.modal-goal {
  &__content {
    padding: 30px 32px 30px 41px;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    color: $blue02;
    font-size: 20px;
  }

  &__select-goal {
    margin-top: 36px;
  }

  &__date-time {
    margin-top: 21px;
  }

  &__date-time-label {
    color: $blue02;
    font-size: 10px;
    font-weight: 500;
  }

  &__date-time-row {
    margin-top: 4px;
    display: flex;
  }

  &__date-time-input {
    display: flex;
    align-items: center;

    &:not(:first-child) {
      margin-left: 25px;
    }

    input {
      width: 120px;
      height: 32px;
      padding-left: 8px;
      margin-left: 10px;
      border-radius: 4px;
      color: $blue02;
      border: 1px solid #ECF6FF;
      font-size: 16px;
      font-weight: 400;

      &::placeholder {
        color: $blue05;
      }
    }

    &_time {
      input {
        width: 90px;
      }
    }
  }

  &__row {
    margin-top: 14px;
    display: flex;
  }

  &__control-method-select {
    width: 496px;
  }

  &__length {
    width: 102px;
    margin-left: 24px;
  }

  &__length-label {
    color: $blue02;
    font-size: 10px;
    font-weight: 500;
  }

  &__length-inp {
    width: 102px;
    height: 32px;
    border-radius: 4px;
    padding-bottom: 3px;
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ECF6FF;

    input {
      width: 50px;
      color: $blue02;
      text-align: center;
    }
  }

  &__length-arrow {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 10px;
    padding-top: 3px;
    cursor: pointer;
  }

  &__btn {
    margin-top: 20px;
    margin-left: 50%;
    transform: translate(-50%);
  }
}
</style>
