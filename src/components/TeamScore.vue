<template>
  <div class="team-score" :class="{'team-score_open': isOpen}">
    <div class="team-score__header">
      <img
          src="@/assets/images/team-logo.png"
          class="team-score__header-logo"
          alt="logo">

      <div class="team-score__header-text">
        <h3 class="team-score__header-title">Первая пятерка игроков</h3>
        <p class="team-score__header-subtitle">г. Иркутск</p>
      </div>
    </div>
    <div class="team-score__select-wrapper">
      <match-select
          class="team-score__select"
          :options="options"
          v-model="selected"/>
    </div>
    <div class="team-score__field">
      <hockey-field :sportsmans="selected" />
    </div>
    <div class="team-score__tag" v-if="isOpen">
      <div class="team-score__tag-icon">
        <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.964844" width="26.7368" height="26.7368" rx="4" fill="#36427D"/>
          <path
              d="M6.53552 11.4409C6.89589 10.9322 7.36566 10.8408 7.93839 10.9974C8.27946 11.0887 8.63339 11.1278 8.9809 11.18C9.33483 11.2322 9.38631 11.1474 9.49571 10.8213C9.66946 10.3125 9.87539 9.81672 10.1135 9.33402C10.2036 9.15137 10.3966 9.01439 10.564 8.88393C10.8793 8.64258 10.8664 8.38818 10.506 8.22511C10.0298 8.00985 9.54719 7.80111 9.04525 7.57933C9.54076 6.82918 10.2036 6.34648 11.0015 6.03338C12.147 5.58981 13.344 5.50501 14.5473 5.60286C15.4097 5.67461 16.2591 5.83769 17.115 5.96162C17.1665 5.96815 17.2179 6.00076 17.2694 6.00729C17.6169 6.06599 17.6941 6.25516 17.6169 6.60088C17.3595 7.69674 17.1343 8.79913 16.9091 9.90152C16.8576 10.1494 16.7417 10.2277 16.4908 10.2211C15.6735 10.2016 14.8627 10.2211 14.0454 10.2146C13.0865 10.2081 12.3787 10.606 11.9733 11.5127C11.4906 12.5499 11.008 13.5805 10.5382 14.6111C10.3709 14.9829 10.4867 15.1721 10.8857 15.1852C11.3362 15.1917 11.7802 15.1852 12.2693 15.1852C12.0955 15.8896 11.9411 16.5615 11.7545 17.2268C11.7094 17.3899 11.5485 17.5139 11.4842 17.5987C11.7287 18.2314 11.9668 18.8446 12.1985 19.4512C12.3401 19.823 12.5653 20.1492 12.9385 20.26C13.3697 20.384 13.8395 20.5144 14.2835 20.4753C15.3324 20.3775 15.9116 19.7056 15.9953 18.6293C16.0146 18.3814 15.9953 18.1335 15.9953 17.8465C15.8344 17.8465 15.6799 17.84 15.5191 17.8465C15.2037 17.8726 15.0557 17.7356 15.0171 17.4095C14.9334 16.6202 14.8305 15.8375 14.7275 15.0547C14.6632 14.572 14.5988 14.5263 14.1033 14.5263C13.1895 14.5263 12.2821 14.5263 11.3426 14.5263C11.3619 14.4481 11.3619 14.3893 11.3877 14.3372C11.7866 13.4631 12.1921 12.589 12.5975 11.7149C12.8678 11.1409 13.3375 10.8865 13.9424 10.8865C16.4007 10.8865 18.8525 10.893 21.3107 10.8995C22.1216 10.8995 22.6814 11.2909 22.7908 12.0019C22.8423 12.315 22.7779 12.6477 22.7458 12.9673C22.7007 13.3522 22.6171 13.737 22.572 14.1219C22.5398 14.422 22.3983 14.5263 22.1023 14.5198C20.8023 14.5133 19.5089 14.5133 18.209 14.5133C17.7199 14.5133 17.6491 14.5785 17.6491 15.0743C17.6491 15.8114 17.6491 16.555 17.6491 17.2921C17.6491 17.7552 17.5654 17.84 17.1085 17.84C16.9798 17.84 16.8511 17.84 16.716 17.84C16.6645 18.2444 16.6452 18.6358 16.568 19.0142C16.2784 20.521 15.2166 21.3037 13.7172 21.1537C12.5138 21.0298 11.748 20.4688 11.4391 19.2294C11.3362 18.8185 11.1045 18.4467 10.9179 18.0096C10.6927 18.1727 10.5382 18.2836 10.3902 18.401C10.21 18.538 10.0427 18.538 9.86895 18.3814C9.03881 17.6443 8.20224 16.9137 7.38497 16.1636C7.27557 16.0658 7.22409 15.8701 7.19191 15.7135C7.15974 15.5243 7.17904 15.3221 7.18548 15.1264C7.19835 14.7481 7.24339 14.3763 6.81224 14.1545C6.68353 14.0893 6.62562 13.874 6.53552 13.7305C6.53552 12.9673 6.53552 12.2041 6.53552 11.4409Z"
              fill="white"/>
          <path
              d="M17.5649 10.1944C17.8352 9.11161 18.0991 8.04184 18.3758 6.93945C19.2638 7.33736 20.2355 7.65046 21.0078 8.3419C21.1429 8.46583 21.2523 8.655 21.2974 8.83112C21.4068 9.26816 21.4775 9.71825 21.5676 10.1944C20.1905 10.1944 18.8713 10.1944 17.5649 10.1944Z"
              fill="white"/>
          <path
              d="M7.23633 10.228C7.33929 9.34089 7.66749 8.6364 8.4011 8.16022C8.45901 8.12109 8.56841 8.11456 8.6392 8.14066C9.02531 8.29721 9.40499 8.4668 9.73318 8.61683C9.42429 9.22999 9.12827 9.81706 8.79364 10.4824C8.34318 10.4107 7.8155 10.3259 7.23633 10.228Z"
              fill="white"/>
        </svg>
      </div>
      <p>Полевые игроки</p>
    </div>
    <div class="team-score__tabs">
      <div class="team-score__tabs-wrapper-btns">
        <div class="team-score__tabs-btns">
          <div class="team-score__tabs-btn"
               @click="selectTab(index)"
               v-for="(tab, index) in tabs"
               :key="tab.id">{{ tab.name }}
          </div>
        </div>
        <div class="team-score__tabs-borders">
          <div
              class="team-score__tabs-border"
              :class="{'team-score__tabs-border_active': slectedTabIndex === index}"
              v-for="(tab, index) in tabs"
              :key="index"></div>
        </div>
      </div>
      <div class="team-score__tabs-wrapper-content">
        <div class="team-score__tabs-content" v-if="slectedTabIndex === 0">
          <div>
            <div class="team-score__tabs-title">34 - Машков Фёдор (нападающий)</div>
            <div class="team-score__tabs-numbers">
              <div class="team-score__tabs-number" style="background-color: #64C048">
                <p>11</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #B9CBE5">
                <p>72</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #FFA217">
                <p>55</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #2ABAF3">
                <p>66</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #FFA217">
                <p>14</p>
                <span>мин</span>
              </div>
              <div class="team-score__tabs-number" style="background-color: #FFA217">
                <p>-4</p>
              </div>
            </div>
          </div>
          <div v-if="isOpen">
            <div>
              <div class="team-score__tabs-title">34 - Машков Фёдор (нападающий)</div>
              <div class="team-score__tabs-numbers">
                <div class="team-score__tabs-number" style="background-color: #64C048">
                  <p>11</p>
                </div>
                <div class="team-score__tabs-number" style="background-color: #B9CBE5">
                  <p>72</p>
                </div>
                <div class="team-score__tabs-number" style="background-color: #FFA217">
                  <p>55</p>
                </div>
                <div class="team-score__tabs-number" style="background-color: #2ABAF3">
                  <p>66</p>
                </div>
                <div class="team-score__tabs-number" style="background-color: #FFA217">
                  <p>14</p>
                  <span>мин</span>
                </div>
                <div class="team-score__tabs-number" style="background-color: #FFA217">
                  <p>-4</p>
                </div>
              </div>
            </div>
            <div>
              <div class="team-score__tabs-title">34 - Машков Фёдор (нападающий)</div>
              <div class="team-score__tabs-numbers">
                <div class="team-score__tabs-number" style="background-color: #64C048">
                  <p>11</p>
                </div>
                <div class="team-score__tabs-number" style="background-color: #B9CBE5">
                  <p>72</p>
                </div>
                <div class="team-score__tabs-number" style="background-color: #FFA217">
                  <p>55</p>
                </div>
                <div class="team-score__tabs-number" style="background-color: #2ABAF3">
                  <p>66</p>
                </div>
                <div class="team-score__tabs-number" style="background-color: #FFA217">
                  <p>14</p>
                  <span>мин</span>
                </div>
                <div class="team-score__tabs-number" style="background-color: #FFA217">
                  <p>-4</p>
                </div>
              </div>
            </div>
            <div>
              <div class="team-score__tabs-title">34 - Машков Фёдор (нападающий)</div>
              <div class="team-score__tabs-numbers">
                <div class="team-score__tabs-number" style="background-color: #64C048">
                  <p>11</p>
                </div>
                <div class="team-score__tabs-number" style="background-color: #B9CBE5">
                  <p>72</p>
                </div>
                <div class="team-score__tabs-number" style="background-color: #FFA217">
                  <p>55</p>
                </div>
                <div class="team-score__tabs-number" style="background-color: #2ABAF3">
                  <p>66</p>
                </div>
                <div class="team-score__tabs-number" style="background-color: #FFA217">
                  <p>14</p>
                  <span>мин</span>
                </div>
                <div class="team-score__tabs-number" style="background-color: #FFA217">
                  <p>-4</p>
                </div>
              </div>
            </div>
            <div>
              <div class="team-score__tabs-title">34 - Машков Фёдор (нападающий)</div>
              <div class="team-score__tabs-numbers">
                <div class="team-score__tabs-number" style="background-color: #64C048">
                  <p>11</p>
                </div>
                <div class="team-score__tabs-number" style="background-color: #B9CBE5">
                  <p>72</p>
                </div>
                <div class="team-score__tabs-number" style="background-color: #FFA217">
                  <p>55</p>
                </div>
                <div class="team-score__tabs-number" style="background-color: #2ABAF3">
                  <p>66</p>
                </div>
                <div class="team-score__tabs-number" style="background-color: #FFA217">
                  <p>14</p>
                  <span>мин</span>
                </div>
                <div class="team-score__tabs-number" style="background-color: #FFA217">
                  <p>-4</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="team-score__tabs-content" v-if="slectedTabIndex === 1">
          <div>
            <div class="team-score__tabs-title">34 - Машков Фёдор (нападающий)</div>
            <div class="team-score__tabs-numbers">
              <div class="team-score__tabs-number" style="background-color: #B9CBE5">
                <p>31</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #64C048">
                <p>72</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #FFA217">
                <p>34</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #2ABAF3">
                <p>12</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #FFA217">
                <p>14</p>
                <span>мин</span>
              </div>
              <div class="team-score__tabs-number" style="background-color: #FFA217">
                <p>-4</p>
              </div>
            </div>
          </div>
        </div>
        <div class="team-score__tabs-content" v-if="slectedTabIndex === 2">
          <div>
            <div class="team-score__tabs-title">34 - Машков Фёдор (нападающий)</div>
            <div class="team-score__tabs-numbers">
              <div class="team-score__tabs-number" style="background-color: #B9CBE5">
                <p>31</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #64C048">
                <p>72</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #FFA217">
                <p>34</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #2ABAF3">
                <p>12</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #FFA217">
                <p>14</p>
                <span>мин</span>
              </div>
              <div class="team-score__tabs-number" style="background-color: #FFA217">
                <p>-4</p>
              </div>
            </div>
          </div>
        </div>
        <div class="team-score__tabs-content" v-if="slectedTabIndex === 3">
          <div>
            <div class="team-score__tabs-title">34 - Машков Фёдор (нападающий)</div>
            <div class="team-score__tabs-numbers">
              <div class="team-score__tabs-number" style="background-color: #B9CBE5">
                <p>31</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #64C048">
                <p>72</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #FFA217">
                <p>34</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #2ABAF3">
                <p>12</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #FFA217">
                <p>14</p>
                <span>мин</span>
              </div>
              <div class="team-score__tabs-number" style="background-color: #FFA217">
                <p>-4</p>
              </div>
            </div>
          </div>
        </div>
        <div class="team-score__tabs-content" v-if="slectedTabIndex === 4">
          <div>
            <div class="team-score__tabs-title">34 - Машков Фёдор (нападающий)</div>
            <div class="team-score__tabs-numbers">
              <div class="team-score__tabs-number" style="background-color: #B9CBE5">
                <p>31</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #64C048">
                <p>72</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #FFA217">
                <p>34</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #2ABAF3">
                <p>12</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #FFA217">
                <p>14</p>
                <span>мин</span>
              </div>
              <div class="team-score__tabs-number" style="background-color: #FFA217">
                <p>-4</p>
              </div>
            </div>
          </div>
        </div>
        <div class="team-score__tabs-content" v-if="slectedTabIndex === 5">
          <div>
            <div class="team-score__tabs-title">34 - Машков Фёдор (нападающий)</div>
            <div class="team-score__tabs-numbers">
              <div class="team-score__tabs-number" style="background-color: #B9CBE5">
                <p>31</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #64C048">
                <p>72</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #FFA217">
                <p>34</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #2ABAF3">
                <p>12</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #FFA217">
                <p>14</p>
                <span>мин</span>
              </div>
              <div class="team-score__tabs-number" style="background-color: #FFA217">
                <p>-4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="team-score__tag" v-if="isOpen">
      <div class="team-score__tag-icon">
        <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.964844" width="26.7368" height="26.7368" rx="4" fill="#36427D"/>
          <path
              d="M6.53552 11.4409C6.89589 10.9322 7.36566 10.8408 7.93839 10.9974C8.27946 11.0887 8.63339 11.1278 8.9809 11.18C9.33483 11.2322 9.38631 11.1474 9.49571 10.8213C9.66946 10.3125 9.87539 9.81672 10.1135 9.33402C10.2036 9.15137 10.3966 9.01439 10.564 8.88393C10.8793 8.64258 10.8664 8.38818 10.506 8.22511C10.0298 8.00985 9.54719 7.80111 9.04525 7.57933C9.54076 6.82918 10.2036 6.34648 11.0015 6.03338C12.147 5.58981 13.344 5.50501 14.5473 5.60286C15.4097 5.67461 16.2591 5.83769 17.115 5.96162C17.1665 5.96815 17.2179 6.00076 17.2694 6.00729C17.6169 6.06599 17.6941 6.25516 17.6169 6.60088C17.3595 7.69674 17.1343 8.79913 16.9091 9.90152C16.8576 10.1494 16.7417 10.2277 16.4908 10.2211C15.6735 10.2016 14.8627 10.2211 14.0454 10.2146C13.0865 10.2081 12.3787 10.606 11.9733 11.5127C11.4906 12.5499 11.008 13.5805 10.5382 14.6111C10.3709 14.9829 10.4867 15.1721 10.8857 15.1852C11.3362 15.1917 11.7802 15.1852 12.2693 15.1852C12.0955 15.8896 11.9411 16.5615 11.7545 17.2268C11.7094 17.3899 11.5485 17.5139 11.4842 17.5987C11.7287 18.2314 11.9668 18.8446 12.1985 19.4512C12.3401 19.823 12.5653 20.1492 12.9385 20.26C13.3697 20.384 13.8395 20.5144 14.2835 20.4753C15.3324 20.3775 15.9116 19.7056 15.9953 18.6293C16.0146 18.3814 15.9953 18.1335 15.9953 17.8465C15.8344 17.8465 15.6799 17.84 15.5191 17.8465C15.2037 17.8726 15.0557 17.7356 15.0171 17.4095C14.9334 16.6202 14.8305 15.8375 14.7275 15.0547C14.6632 14.572 14.5988 14.5263 14.1033 14.5263C13.1895 14.5263 12.2821 14.5263 11.3426 14.5263C11.3619 14.4481 11.3619 14.3893 11.3877 14.3372C11.7866 13.4631 12.1921 12.589 12.5975 11.7149C12.8678 11.1409 13.3375 10.8865 13.9424 10.8865C16.4007 10.8865 18.8525 10.893 21.3107 10.8995C22.1216 10.8995 22.6814 11.2909 22.7908 12.0019C22.8423 12.315 22.7779 12.6477 22.7458 12.9673C22.7007 13.3522 22.6171 13.737 22.572 14.1219C22.5398 14.422 22.3983 14.5263 22.1023 14.5198C20.8023 14.5133 19.5089 14.5133 18.209 14.5133C17.7199 14.5133 17.6491 14.5785 17.6491 15.0743C17.6491 15.8114 17.6491 16.555 17.6491 17.2921C17.6491 17.7552 17.5654 17.84 17.1085 17.84C16.9798 17.84 16.8511 17.84 16.716 17.84C16.6645 18.2444 16.6452 18.6358 16.568 19.0142C16.2784 20.521 15.2166 21.3037 13.7172 21.1537C12.5138 21.0298 11.748 20.4688 11.4391 19.2294C11.3362 18.8185 11.1045 18.4467 10.9179 18.0096C10.6927 18.1727 10.5382 18.2836 10.3902 18.401C10.21 18.538 10.0427 18.538 9.86895 18.3814C9.03881 17.6443 8.20224 16.9137 7.38497 16.1636C7.27557 16.0658 7.22409 15.8701 7.19191 15.7135C7.15974 15.5243 7.17904 15.3221 7.18548 15.1264C7.19835 14.7481 7.24339 14.3763 6.81224 14.1545C6.68353 14.0893 6.62562 13.874 6.53552 13.7305C6.53552 12.9673 6.53552 12.2041 6.53552 11.4409Z"
              fill="white"/>
          <path
              d="M17.5649 10.1944C17.8352 9.11161 18.0991 8.04184 18.3758 6.93945C19.2638 7.33736 20.2355 7.65046 21.0078 8.3419C21.1429 8.46583 21.2523 8.655 21.2974 8.83112C21.4068 9.26816 21.4775 9.71825 21.5676 10.1944C20.1905 10.1944 18.8713 10.1944 17.5649 10.1944Z"
              fill="white"/>
          <path
              d="M7.23633 10.228C7.33929 9.34089 7.66749 8.6364 8.4011 8.16022C8.45901 8.12109 8.56841 8.11456 8.6392 8.14066C9.02531 8.29721 9.40499 8.4668 9.73318 8.61683C9.42429 9.22999 9.12827 9.81706 8.79364 10.4824C8.34318 10.4107 7.8155 10.3259 7.23633 10.228Z"
              fill="white"/>
        </svg>
      </div>
      <p>Полевые игроки</p>
    </div>
    <div class="team-score__tabs" v-if="isOpen">
      <div class="team-score__tabs-wrapper-btns">
        <div class="team-score__tabs-btns">
          <div class="team-score__tabs-btn"
               @click="selectTabGoalkeeper(index)"
               v-for="(tab, index) in goalkeeperTabs"
               :key="tab.id">{{ tab.name }}
          </div>
        </div>
        <div class="team-score__tabs-borders">
          <div
              class="team-score__tabs-border"
              :class="{'team-score__tabs-border_active': selectTabGoalkeeperIndex === index}"
              v-for="(tab, index) in goalkeeperTabs"
              :key="index"></div>
        </div>
      </div>
      <div class="team-score__tabs-wrapper-content">
        <div class="team-score__tabs-content" v-if="selectTabGoalkeeperIndex === 0">
          <div>
            <div class="team-score__tabs-title">34 - Машков Фёдор (нападающий)</div>
            <div class="team-score__tabs-numbers">
              <div class="team-score__tabs-number" style="background-color: #64C048">
                <p>11</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #B9CBE5">
                <p>72</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #FFA217">
                <p>55</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #2ABAF3">
                <p>66</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #FFA217">
                <p>14</p>
                <span>мин</span>
              </div>
              <div class="team-score__tabs-number" style="background-color: #FFA217">
                <p>-4</p>
              </div>
            </div>
          </div>
        </div>
        <div class="team-score__tabs-content" v-if="selectTabGoalkeeperIndex === 1">
          <div>
            <div class="team-score__tabs-title">34 - Машков Фёдор (нападающий)</div>
            <div class="team-score__tabs-numbers">
              <div class="team-score__tabs-number" style="background-color: #B9CBE5">
                <p>31</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #64C048">
                <p>72</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #FFA217">
                <p>34</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #2ABAF3">
                <p>12</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #FFA217">
                <p>14</p>
                <span>мин</span>
              </div>
              <div class="team-score__tabs-number" style="background-color: #FFA217">
                <p>-4</p>
              </div>
            </div>
          </div>
        </div>
        <div class="team-score__tabs-content" v-if="selectTabGoalkeeperIndex === 2">
          <div>
            <div class="team-score__tabs-title">34 - Машков Фёдор (нападающий)</div>
            <div class="team-score__tabs-numbers">
              <div class="team-score__tabs-number" style="background-color: #B9CBE5">
                <p>31</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #64C048">
                <p>72</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #FFA217">
                <p>34</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #2ABAF3">
                <p>12</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #FFA217">
                <p>14</p>
                <span>мин</span>
              </div>
              <div class="team-score__tabs-number" style="background-color: #FFA217">
                <p>-4</p>
              </div>
            </div>
          </div>
        </div>
        <div class="team-score__tabs-content" v-if="selectTabGoalkeeperIndex === 3">
          <div>
            <div class="team-score__tabs-title">34 - Машков Фёдор (нападающий)</div>
            <div class="team-score__tabs-numbers">
              <div class="team-score__tabs-number" style="background-color: #B9CBE5">
                <p>31</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #64C048">
                <p>72</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #FFA217">
                <p>34</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #2ABAF3">
                <p>12</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #FFA217">
                <p>14</p>
                <span>мин</span>
              </div>
              <div class="team-score__tabs-number" style="background-color: #FFA217">
                <p>-4</p>
              </div>
            </div>
          </div>
        </div>
        <div class="team-score__tabs-content" v-if="selectTabGoalkeeperIndex === 4">
          <div>
            <div class="team-score__tabs-title">34 - Машков Фёдор (нападающий)</div>
            <div class="team-score__tabs-numbers">
              <div class="team-score__tabs-number" style="background-color: #B9CBE5">
                <p>31</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #64C048">
                <p>72</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #FFA217">
                <p>34</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #2ABAF3">
                <p>12</p>
              </div>
              <div class="team-score__tabs-number" style="background-color: #FFA217">
                <p>14</p>
                <span>мин</span>
              </div>
              <div class="team-score__tabs-number" style="background-color: #FFA217">
                <p>-4</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="team-score__all-btn" @click="isOpen = !isOpen">
      <div class="team-score__all-btn-icon">
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="5.67457" cy="2.83741" r="2.83741" fill="#95B0DA"/>
          <circle cx="12.059" cy="3.54602" r="2.12806" fill="#95B0DA"/>
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M8.86747 8.47355C8.86746 8.47356 8.86744 8.47358 8.86743 8.47359C8.8805 8.48645 8.89356 8.49941 8.90663 8.51247C9.97053 9.57638 11.0344 11.3494 11.0347 12.7681C11.0347 12.7681 11.0347 12.7681 11.0348 12.7681C11.0345 11.3494 9.9706 9.57636 8.9067 8.51245C8.89362 8.49938 8.88055 8.48641 8.86747 8.47355ZM9.93129 7.53078C10.5565 8.16066 11.1641 8.9759 11.6236 9.84372C12.0784 10.7029 12.4533 11.7367 12.4535 12.768C15.0959 12.7615 16.0003 12.6798 16.0003 11.6335C16.0003 10.4985 15.2023 9.07988 14.4042 8.22868C13.6062 7.37747 12.8082 7.09375 11.7442 7.09375C11.0502 7.09375 10.4727 7.2107 9.93129 7.53078Z"
                fill="#95B0DA"/>
          <path
              d="M9.22157 8.51245C8.15754 7.44841 7.09352 7.09375 5.67489 7.09375C4.25627 7.09375 3.20306 7.43728 2.12806 8.51245C1.05305 9.58763 0 11.3499 0 12.7686C0 14.1873 1.41886 14.1877 5.67489 14.1875H5.67514C9.93098 14.1873 11.3496 14.1872 11.3496 12.7686C11.3496 11.3499 10.2856 9.57649 9.22157 8.51245Z"
              fill="#95B0DA"/>
        </svg>
      </div>
      {{ !isOpen ? 'Показать всех' : 'Скрыть' }}
    </button>
  </div>
</template>

<script>
import MatchSelect from '@/components/MatchEvent/MatchSelect.vue'
import HockeyField from '@/components/HockeyField.vue'

export default {
  components: {
    MatchSelect,
    HockeyField
  },
  props: {
    sportsmans: {
      type: Array,
      required: false
    }
  },
  data() {
    return {
      isOpen: false,
      selected: {},
      options: [
        {
          title: 'Первая пятерка игроков',
          sportsmans: [
            {
              full_name: 'Ярасимов Ю',
              age: 8,
              position_type: 'defender',
              avatar: null,
              team_number: 37,
            },
            {
              full_name: 'Ярасимов Ю',
              age: 8,
              position_type: 'defender',
              avatar: null,
              team_number: 17,
            },
            {
              full_name: 'Ярасимов Ю',
              age: 8,
              position_type: 'defender',
              avatar: 'https://source.unsplash.com/120/?avatar',
              team_number: 37,
            },
            {
              full_name: 'Ярасимов Ю',
              age: 8,
              position_type: 'defender',
              avatar: null,
              team_number: 37,
            },
            {
              full_name: 'Ярасимов Ю',
              age: 8,
              position_type: 'defender',
              avatar: null,
              team_number: 37,
            },
          ],
          value: 1,
        },
        {
          title: 'Вторая пятерка игроков',
          sportsmans: [
            {
              full_name: 'Ярасимов Ю',
              age: 8,
              position_type: 'defender',
              avatar: null,
              team_number: 37,
            },
            {
              full_name: 'Ярасимов Ю',
              age: 8,
              position_type: 'defender',
              avatar: null,
              team_number: 37,
            },
            {
              full_name: 'Ярасимов Ю',
              age: 8,
              position_type: 'defender',
              avatar: null,
              team_number: 37,
            },
            {
              full_name: 'Ярасимов Ю',
              age: 8,
              position_type: 'defender',
              avatar: null,
              team_number: 37,
            },
            {
              full_name: 'Ярасимов Ю',
              age: 8,
              position_type: 'defender',
              avatar: null,
              team_number: 37,
            },
          ],
          value: 2
        },
        {
          title: 'Третья пятерка игроков',
          sportsmans: [
            {
              full_name: 'Ярасимов Ю',
              age: 8,
              position_type: 'defender',
              avatar: null,
              team_number: 37,
            },
            {
              full_name: 'Ярасимов Ю',
              age: 8,
              position_type: 'defender',
              avatar: null,
              team_number: 37,
            },
            {
              full_name: 'Ярасимов Ю',
              age: 8,
              position_type: 'defender',
              avatar: null,
              team_number: 37,
            },
            {
              full_name: 'Ярасимов Ю',
              age: 8,
              position_type: 'defender',
              avatar: null,
              team_number: 37,
            },
            {
              full_name: 'Ярасимов Ю',
              age: 8,
              position_type: 'defender',
              avatar: null,
              team_number: 37,
            },
          ],
          value: 3
        },
        {
          title: 'Четвертая пятерка игроков',
          sportsmans: [
            {
              full_name: 'Ярасимов Ю',
              age: 8,
              position_type: 'defender',
              avatar: null,
              team_number: 37,
            },
            {
              full_name: 'Ярасимов Ю',
              age: 8,
              position_type: 'defender',
              avatar: null,
              team_number: 37,
            },
            {
              full_name: 'Ярасимов Ю',
              age: 8,
              position_type: 'defender',
              avatar: null,
              team_number: 37,
            },
            {
              full_name: 'Ярасимов Ю',
              age: 8,
              position_type: 'defender',
              avatar: null,
              team_number: 37,
            },
            {
              full_name: 'Ярасимов Ю',
              age: 8,
              position_type: 'defender',
              avatar: null,
              team_number: 37,
            },
          ],
          value: 4
        },
      ],
      tabs: [
        {
          name: 'Кол-во игр',
          id: 1
        },
        {
          name: 'Очки',
          value: 2
        },
        {
          name: 'Передачи',
          value: 3
        },
        {
          name: 'Голы',
          value: 4,
        },
        {
          name: 'Штраф. время',
          value: 5,
        },
        {
          name: '+/-',
          value: 6,
        },
      ],
      goalkeeperTabs: [
        {
          name: 'Кол-во игр',
          id: 1
        },
        {
          name: 'Время на площадке',
          value: 2
        },
        {
          name: 'Броски в створ',
          value: 3
        },
        {
          name: 'Отбито бросков',
          value: 4,
        },
        {
          name: 'КНН',
          value: 5,
        }
      ],
      slectedTabIndex: 0,
      selectTabGoalkeeperIndex: 0
    }
  },
  methods: {
    selectTab(index) {
      this.slectedTabIndex = index
    },
    selectTabGoalkeeper(index) {
      this.selectTabGoalkeeperIndex = index
    }
  }
}
</script>

<style scoped lang="scss">
.team-score {
  position: relative;
  width: 100%;
  border-radius: 28px;
  background-color: $blue02;
  color: #fff;
  box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);
  padding: 37px 24px 21px 24px;
  user-select: none;

  &_open {
    //height: 1440px;
  }

  &__header {
    display: flex;
    align-items: center;
  }

  &__header-text {
    margin-left: 21px;
  }

  &__header-title {
    font-size: 18px;
    font-weight: 400;
  }

  &__header-subtitle {
    margin-top: 4px;
    font-size: 14px;
    font-weight: 400;
  }

  &__select-wrapper {
    height: 75px;
    position: relative;
    margin-top: 17px;
    z-index: 9;
  }

  &__select {
    position: absolute;
    top: 0;
    left: 0;
  }

  &__field {
    width: 100%;
    height: 292px;
    margin-top: 35px;
  }

  &__tabs-btns {
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__tabs-btn {
    width: 16.6%;
    max-width: 50px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: $blue05;
    text-align: center;
    cursor: pointer;
  }

  &__tabs-borders {
    width: 100%;
    height: 2.2px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    background-color: $blue01;
  }

  &__tabs-border {
    width: 16.6%;
    height: 2.2px;
    border-radius: 10px;

    &_active {
      background-color: $blue04;
    }
  }

  &__tabs-content {
    margin-bottom: 18px;
  }

  &__tabs-title {
    margin-top: 16px;
    font-size: 16px;
    font-weight: 700;
  }

  &__tabs-numbers {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  &__tabs-number {
    width: 63px;
    height: 53px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #B9CBE5;

    p {
      color: $blue02;
      font-size: 24px;
      font-weight: 700;
    }

    span {
      margin-top: 6px;
      margin-left: 2px;
      color: $blue02;
      font-size: 12px;
      font-weight: 500;
    }
  }

  &__all-btn {
    height: 36px;
    padding: 0 15px;
    margin: 0 auto;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    border: 1px solid #DCE5F2;
  }

  &__all-btn-icon {
    margin-top: 3px;
    margin-right: 6px;
  }

  &__tag {
    width: 180px;
    margin: 25px auto 10px auto;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      margin-left: 9px;
    }
  }
}
</style>
