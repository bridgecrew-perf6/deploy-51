<template>
  <div class="team-result">
    <div class="team-result__game-count">
      <div class="team-result__game-count-title">Количество игр</div>
      <div class="team-result__game-count-wrapper">
        <div class="team-result__game-count-left">
          <div class="team-result__game-count-num">35<span>/48</span></div>
          <div class="team-result__game-count-progress">
            <span class="team-result__game-count-line-1" style="width: 20%"></span>
            <span class="team-result__game-count-line-2" style="width: 30%"></span>
            <span class="team-result__game-count-line-3" style="width: 45%;"></span>
          </div>
        </div>
        <div class="team-result__game-count-right">
          <div class="team-result__game-count-item">
            <div class="team-result__game-count-item-num team-result__game-count-item-num_1">23</div>
            <div class="team-result__game-count-item-title">Победа</div>
          </div>
          <div class="team-result__game-count-item">
            <div class="team-result__game-count-item-num team-result__game-count-item-num_2">5</div>
            <div class="team-result__game-count-item-title">Ничья</div>
          </div>
          <div class="team-result__game-count-item">
            <div class="team-result__game-count-item-num team-result__game-count-item-num_3">7</div>
            <div class="team-result__game-count-item-title">Поражение</div>
          </div>
        </div>
      </div>
    </div>
    <div class="team-result__position">
      <div class="team-result__position-title">Турнирное положение</div>
      <div class="team-result__position-content">
        <div class="team-result__position-num">12</div>
        <div class="team-result__position-arrow">
          <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15.5442 6.24502L9.00992 0.569558C8.63379 0.242865 8.07456 0.242864 7.69843 0.569557L1.16411 6.24502C0.465627 6.8517 0.894686 8 1.81986 8H14.8885C15.8137 8 16.2427 6.8517 15.5442 6.24502Z"
                fill="#2ABAF3"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="team-result__position">
      <div class="team-result__position-alarm">
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.4261 5.473C13.4261 5.67238 13.4261 5.87176 13.4261 6.07114C13.4107 6.15911 13.392 6.24684 13.3803 6.33556C13.2893 7.01942 13.0329 7.63974 12.6374 8.19949C11.8346 9.33519 10.7253 10.042 9.41916 10.4639C8.5586 10.742 7.67286 10.8445 6.77118 10.829C6.71934 10.828 6.66352 10.8372 6.61617 10.8572C6.29891 10.9903 5.98289 11.1263 5.66713 11.2634C4.62115 11.7175 3.57591 12.1733 2.52918 12.6254C2.46364 12.6538 2.38314 12.6755 2.31485 12.6653C2.08059 12.6304 1.98937 12.4524 2.04644 12.1858C2.23784 11.2923 2.42725 10.3984 2.61317 9.50366C2.6214 9.46379 2.59922 9.40048 2.56881 9.37207C2.38439 9.19911 2.18351 9.04285 2.00682 8.86266C1.40245 8.24584 0.975538 7.52534 0.776909 6.67949C0.728062 6.47139 0.702641 6.2578 0.666504 6.04646C0.666504 5.85531 0.666504 5.66416 0.666504 5.47325C0.67423 5.43313 0.685694 5.3935 0.689183 5.35288C0.746504 4.6735 0.974292 4.0512 1.33467 3.47799C1.85055 2.6578 2.56009 2.04497 3.40146 1.57643C4.34451 1.05132 5.36308 0.779669 6.43174 0.691196C6.96508 0.647084 7.49916 0.668517 8.03299 0.732567C8.74227 0.8178 9.4229 1.00073 10.0796 1.27537C10.7714 1.56472 11.394 1.96696 11.9375 2.4831C12.604 3.11562 13.0899 3.86204 13.3043 4.76596C13.3589 4.99799 13.386 5.23699 13.4261 5.473ZM7.88121 3.73867C7.87424 3.62353 7.88695 3.47026 7.85255 3.32821C7.74962 2.90403 7.31922 2.63363 6.90252 2.71338C6.45592 2.79886 6.17156 3.19413 6.21018 3.6497C6.25529 4.18279 6.2852 4.71712 6.32258 5.25095C6.35448 5.70578 6.3824 6.16111 6.42227 6.61544C6.44944 6.92422 6.72059 7.16297 7.02738 7.16746C7.34514 7.1722 7.63149 6.9479 7.66813 6.63861C7.7085 6.29718 7.72744 5.95325 7.75212 5.61008C7.79573 4.99824 7.83685 4.38565 7.88121 3.73867ZM7.04607 7.50815C6.57554 7.51089 6.22065 7.87301 6.2224 8.34852C6.22414 8.79637 6.59747 9.16397 7.0528 9.16148C7.5024 9.15924 7.88695 8.77245 7.87224 8.31089C7.85829 7.86802 7.49542 7.50541 7.04607 7.50815Z" fill="white"/>
        </svg>
      </div>
      <div class="team-result__position-title">Штрафное время</div>
      <div class="team-result__position-content team-result__position-content_bg">
        <div class="team-result__position-num">34</div>
        <span>мин</span>
      </div>
    </div>

    <div class="team-result__items-block">
      <div class="team-result__items-block-alarm">
        <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.4261 5.473C13.4261 5.67238 13.4261 5.87176 13.4261 6.07114C13.4107 6.15911 13.392 6.24684 13.3803 6.33556C13.2893 7.01942 13.0329 7.63974 12.6374 8.19949C11.8346 9.33519 10.7253 10.042 9.41916 10.4639C8.5586 10.742 7.67286 10.8445 6.77118 10.829C6.71934 10.828 6.66352 10.8372 6.61617 10.8572C6.29891 10.9903 5.98289 11.1263 5.66713 11.2634C4.62115 11.7175 3.57591 12.1733 2.52918 12.6254C2.46364 12.6538 2.38314 12.6755 2.31485 12.6653C2.08059 12.6304 1.98937 12.4524 2.04644 12.1858C2.23784 11.2923 2.42725 10.3984 2.61317 9.50366C2.6214 9.46379 2.59922 9.40048 2.56881 9.37207C2.38439 9.19911 2.18351 9.04285 2.00682 8.86266C1.40245 8.24584 0.975538 7.52534 0.776909 6.67949C0.728062 6.47139 0.702641 6.2578 0.666504 6.04646C0.666504 5.85531 0.666504 5.66416 0.666504 5.47325C0.67423 5.43313 0.685694 5.3935 0.689183 5.35288C0.746504 4.6735 0.974292 4.0512 1.33467 3.47799C1.85055 2.6578 2.56009 2.04497 3.40146 1.57643C4.34451 1.05132 5.36308 0.779669 6.43174 0.691196C6.96508 0.647084 7.49916 0.668517 8.03299 0.732567C8.74227 0.8178 9.4229 1.00073 10.0796 1.27537C10.7714 1.56472 11.394 1.96696 11.9375 2.4831C12.604 3.11562 13.0899 3.86204 13.3043 4.76596C13.3589 4.99799 13.386 5.23699 13.4261 5.473ZM7.88121 3.73867C7.87424 3.62353 7.88695 3.47026 7.85255 3.32821C7.74962 2.90403 7.31922 2.63363 6.90252 2.71338C6.45592 2.79886 6.17156 3.19413 6.21018 3.6497C6.25529 4.18279 6.2852 4.71712 6.32258 5.25095C6.35448 5.70578 6.3824 6.16111 6.42227 6.61544C6.44944 6.92422 6.72059 7.16297 7.02738 7.16746C7.34514 7.1722 7.63149 6.9479 7.66813 6.63861C7.7085 6.29718 7.72744 5.95325 7.75212 5.61008C7.79573 4.99824 7.83685 4.38565 7.88121 3.73867ZM7.04607 7.50815C6.57554 7.51089 6.22065 7.87301 6.2224 8.34852C6.22414 8.79637 6.59747 9.16397 7.0528 9.16148C7.5024 9.15924 7.88695 8.77245 7.87224 8.31089C7.85829 7.86802 7.49542 7.50541 7.04607 7.50815Z" fill="white"/>
        </svg>
      </div>
      <div class="team-result__item-block">
        <div class="team-result__item-block-title">Заброшено шайб</div>
        <div class="team-result__item-block-num team-result__item-block-num_1">107</div>
      </div>
      <div class="team-result__item-block">
        <div class="team-result__item-block-title">Пропущено шайб</div>
        <div class="team-result__item-block-num team-result__item-block-num_2">126</div>
      </div>
    </div>

    <div class="team-result__position team-result__position_min">
      <div class="team-result__position-title">Очки</div>
      <div class="team-result__position-content team-result__position-content_bg team-result__position-content_green">
        <div class="team-result__position-num">844</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamResult'
}
</script>

<style scoped lang="scss">
.team-result {
  width: 100%;
  height: 185px;
  padding: 22px 17px 22px 22px;
  border-radius: 28px;
  display: flex;
  justify-content: space-between;
  background-color: $blue02;
  box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);

  &__game-count-title {
    color: #fff;
    font-size: 14px;
    font-weight: 600;
  }

  &__game-count {
    width: 32.5%;
    height: 100%;
    padding: 14px 16px 17px 24px;
    border-radius: 12px;
    background-color: $blue03;
  }

  &__game-count-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  &__game-count-left {
    width: 60%;
    padding-right: 10px;
  }

  &__game-count-num {
    color: #fff;
    font-size: 36px;
    font-weight: 700;
    font-family: 'FolksBold', serif;

    span {
      color: #B9CBE5;
      font-size: 18px;
    }
  }

  &__game-count-progress {
    position: relative;
    margin-top: 7px;
    width: 100%;
    height: 8px;
    border-radius: 10px;
    background-color: $blue02;
    overflow: hidden;

    span {
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      border-radius: 10px;
    }
  }

  &__game-count-line-1 {
    background-color: #FF4B6B;
    z-index: 3;
  }

  &__game-count-line-2 {
    background-color: #fff;
    z-index: 2;
  }

  &__game-count-line-3 {
    background-color: #2ABAF3;
    z-index: 1;
  }

  &__game-count-right {
    width: 120px;
    display: flex;
    flex-direction: column;
  }

  &__game-count-item {
    display: flex;
    align-items: center;

    &:not(:first-child) {
      margin-top: 4px;
    }
  }

  &__game-count-item-num {
    width: 35px;
    height: 28px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2ABAF3;
    color: #fff;
    font-weight: 700;
    font-size: 16px;

    &_1 {
      background-color: #2ABAF3;
    }

    &_2 {
      background-color: #fff;
      color: $blue03;
    }

    &_3 {
      background-color: #FF4B6B;
    }
  }

  &__game-count-item-title {
    margin-left: 9px;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
  }

  &__position {
    position: relative;
    width: 12.6%;
    height: 100%;
    padding-top: 13px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: $blue03;
    color: #fff;
    overflow: hidden;

    &_min {
      padding-top: 25px;
      width: 10.7%;
    }
  }

  &__position-alarm {
    position: absolute;
    top: 6px;
    right: 6.5px;
  }

  &__position-title {
    max-width: 93px;
    color: #fff;
    font-size: 14px;
    text-align: center;
    font-weight: 600;
  }

  &__position-content {
    width: 100%;
    height: 85px;
    justify-content: center;
    display: flex;
    align-items: center;

    &_bg {
      width: 100%;
      height: 75px;
      justify-content: center;
      background-color: #FF4B6B;

      span {
        margin-top: 13px;
        font-size: 12px;
        font-weight: 500;
      }
    }

    &_green {
      background-color: #64C048;
    }
  }

  &__position-num {
    margin-right: 3.5px;
    font-size: 36px;
    font-weight: 700;
    font-family: 'FolksBold', serif;
  }

  &__items-block {
    position: relative;
    width: 23.4%;
    height: 100%;
    border-radius: 12px;
    padding: 16px 13px;
    display: flex;
    justify-content: space-between;
    background-color: $blue03;
  }

  &__item-block {
    width: 49%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__item-block-title {
    max-width: 97px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
  }

  &__item-block-num {
    margin-top: 10px;
    width: 100%;
    height: 56px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 36px;
    font-weight: 700;
    font-family: 'FolksBold', serif;

    &_1 {
      background-color: #2ABAF3;
    }

    &_2 {
      background-color: #FF4B6B;
    }
  }

  &__items-block-alarm {
    position: absolute;
    top: 7px;
    right: 8.9px;
  }
}
</style>
