<template>
  <div class="persons">
    <v-list class="persons__list" flat>
      <v-list-item-group :multiple="checkbox">
        <v-list-item
          v-for="(person, index) in items"
          :key="index"
          @click="selectPlayer(person)"
          :class="{ persons__item: playerChoice, persons__item_active: playerChoice && person.id === selectedPlayerId }"
        >
          <base-checkbox
            white
            style="margin-right: 25px"
            v-model="inputVal"
            @input="select(person, $event)"
            v-if="checkbox"
          />
          <v-list-item-avatar width="56" height="56" class="persons__sportsman-avatar-wrapper">
            <v-img
              v-if="person.avatar"
              :alt="person.full_name"
              :src="person.avatar"
              class="persons__sportsman-avatar"
            ></v-img>
            <v-img
              v-else
              :alt="person.full_name"
              :src="require(`@/assets/images/positionTypes/${person.position_type}.svg`)"
              class="persons__sportsman-avatar persons__sportsman-avatar--type"
              width="56"
              height="56"
            ></v-img>
            <span class="persons__sportsman-number" v-if="type === 'sportsman' && person.team_number">{{
              person.team_number
            }}</span>
          </v-list-item-avatar>
          <v-list-item-content
            class="persons__sportsman-content"
            :class="{ 'persons__sportsman-content_left': checkbox }"
          >
            <v-list-item-title class="persons__sportsman-name">{{ person.full_name }}</v-list-item-title>

            <v-list-item-subtitle class="persons__sportsman-subtitle" v-if="type === 'person'">
              {{ person.position }}
            </v-list-item-subtitle>

            <v-list-item-subtitle class="persons__sportsman-subtitle" v-if="type === 'sportsman'">
              <p>
                <template v-if="person.birthDate">{{ age(person.birthDate) }} лет, </template>
                {{ positionTypes.find(x => x.slug === person.position_type).title }}
              </p>
            </v-list-item-subtitle>
          </v-list-item-content>
          <div class="persons__arrow" v-if="playerChoice && playerChoice && person.id === selectedPlayerId">
            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14" cy="14.5576" r="14" transform="rotate(90 14 14.5576)" fill="#95B0DA" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.6163 9.59779C16.1229 9.10022 16.9442 9.10022 17.4508 9.59779L21.7314 13.8022C21.9908 14.057 22.1174 14.3929 22.1111 14.7268C22.1162 15.0593 21.9896 15.3934 21.7313 15.6471L17.4507 19.8515C16.9441 20.349 16.1228 20.349 15.6162 19.8515C15.1096 19.3539 15.1096 18.5472 15.6162 18.0496L19.0015 14.7246L15.6163 11.3997C15.1097 10.9021 15.1097 10.0954 15.6163 9.59779Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.28228 9.59779C8.78888 9.10022 9.61022 9.10022 10.1168 9.59779L14.3974 13.8022C14.6568 14.057 14.7834 14.3929 14.7771 14.7268C14.7822 15.0593 14.6556 15.3934 14.3973 15.6471L10.1167 19.8515C9.61014 20.349 8.78879 20.349 8.28219 19.8515C7.7756 19.3539 7.7756 18.5472 8.28219 18.0496L11.6675 14.7246L8.28228 11.3997C7.77569 10.9021 7.77569 10.0954 8.28228 9.59779Z"
                fill="white"
              />
            </svg>
          </div>
          <div class="persons__mark-as" v-if="matchProtocol">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="#64C048" />
              <path
                d="M15.5361 7.21516C15.473 7.60745 15.2519 7.90167 15.0307 8.19589C13.4198 10.4516 11.8089 12.7073 10.198 14.9629C9.85057 15.4533 9.37677 15.7148 8.77663 15.7148C8.30283 15.7148 7.89221 15.5187 7.57634 15.1264C6.59716 13.9822 5.5864 12.8707 4.60722 11.7265C3.97549 10.9419 4.32294 9.79776 5.23894 9.53623C5.74433 9.40546 6.18654 9.53623 6.53399 9.96121C6.9762 10.4843 7.45 11.0073 7.89221 11.5304C8.11331 11.7919 8.33442 12.0534 8.55552 12.315C8.68187 12.4784 8.77663 12.4784 8.90298 12.2823C10.3244 10.2881 11.7458 8.29397 13.1671 6.29981C13.7041 5.54791 14.7149 5.51522 15.2519 6.23443C15.3782 6.39788 15.4414 6.59403 15.5045 6.79018C15.5045 6.82287 15.5045 6.82287 15.5361 6.85556C15.5361 6.98632 15.5361 7.0844 15.5361 7.21516Z"
                fill="white"
              />
            </svg>
          </div>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>
<script>
export default {
  props: {
    items: Array,
    type: {
      type: String,
      default: 'sportsman',
    },
    checkbox: {
      type: Boolean,
    },
    allChecked: {
      type: Boolean,
    },
    matchProtocol: {
      type: Boolean,
    },
    playerChoice: {
      type: Boolean,
      default: false,
    },
    selectedPlayerId: [Number, String],
  },
  data() {
    return {
      positionTypes: [
        { slug: 'goalie', title: 'вратарь' },
        { slug: 'defender', title: 'защитник' },
        { slug: 'forward', title: 'нападающий' },
      ],
    }
  },
  computed: {
    inputVal: {
      get() {
        return this.allChecked
      },
      set(val) {
        this.$emit('change', val)
      },
    },
  },
  methods: {
    select(person, checked) {
      this.$emit('togglePlayer', person, checked)
    },
    selectPlayer(person) {
      this.$emit('selectPlayer', person.id)
    },
    age(bday) {
      return this.$moment().diff(bday, 'years')
    },
  },
}
</script>

<style scoped lang="sass">
.persons__list
  &::v-deep
    padding: 15px 0

    .v-list-item
      min-height: auto
      margin-bottom: 15px
      padding: 0 0

    &:last-child
      margin-bottom: 0px

    &::after
      display: none

.persons__item_active
  padding: 10px 20px 10px 0 !important
  border-radius: 12px
  background-color: #ECF6FF

.persons__item
  padding-left: 10px !important

.persons__sportsman-avatar-wrapper
  margin-top: 0px !important
  margin-bottom: 0px !important
  overflow: visible
  position: relative

.persons__sportsman-avatar
  &::v-deep
    .v-responsive__content
      border: 2px solid rgba(255, 255, 255, 0.5)
      border-radius: 50%

.persons__sportsman-avatar--type
  &::v-deep
    .v-image__image.v-image__image--cover
      background-size: auto
      background-color: $blue02

.persons__sportsman-number
  position: absolute
  bottom: -1px
  left: -5px

  width: 24px

  font-weight: 700
  font-size: 14px
  line-height: 16px
  text-align: center
  color: #fff
  background-color: #464EA3
  border: 1px solid rgba(255, 255, 255, 0.5)
  border-radius: 4px

.persons__sportsman-content
  padding: 0px

.persons__sportsman-content_left
  margin-left: 10px

.persons__sportsman-name
  font-weight: 600
  font-size: 14px
  line-height: 19px
  color: $blue02

.persons__sportsman-subtitle
  display: flex
  font-size: 12px
  line-height: 20px
  color: $blue02 !important
</style>
