<template>
  <div class="travel-itinerary">
    <h3 class="travel-itinerary__title title-blue-20">Маршрут поездки</h3>
    <div class="travel-itinerary__form">
      <div class="travel-itinerary__content">
        <add-routes name="До"/>
      </div>

      <div class="travel-itinerary__content">
        <add-routes name="Обратно"/>
      </div>
    </div>
  </div>
</template>

<script>
import AddRoutes from '@/components/AddEvent/AddRoutes.vue';

export default {
  name: 'TravelItinerary',
  components: {
    AddRoutes
  },
};
</script>

<style scoped lang="scss">
.travel-itinerary {
  &__title {
    margin-top: 40px;
    margin-left: 22px;
  }

  &__form {
    width: 100%;
    min-height: 150px;
    padding: 18px 20px 40px 26px;
    margin-top: 16px;
    border-radius: 28px;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: 0px 6px 8px rgba(137, 155, 201, 0.15);
  }

  &__content {
    width: 48%;
  }

  &__top-inp-text {
    color: $blue02;
    font-size: 20px;
  }

  &__top-inp {
    &::v-deep .v-input__slot {
      .v-text-field__slot input {
        padding-left: 17px;
      }
    }
  }
}
</style>
