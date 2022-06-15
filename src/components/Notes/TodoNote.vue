<template>
  <div class="todo-note" :style="`background-color: ${note.body.color}; color: ${note.body.color}`">
    <div class="todo-note__inner">
      <p class="todo-note__title">{{ note.title }}</p>

      <ul class="todo-note__tasks">
        <li class="todo-note__task" v-for="(task, index) in note.body.todo" :key="index">
          <base-checkbox
              class="todo-note__task-checkbox"
              :class="{'todo-note__task-checkbox_completed': task.status}"
              white
              small
              :value="task.status"
              :label="task.text"
              v-model="task.status"
              @input="toggleCheckbox(task)"
          ></base-checkbox>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoNote',
  props: {
    note: Object
  },
  methods: {
    toggleCheckbox(task) {
      this.$notes.putTodo(this.note.id, {
        title: this.note.title,
        text: JSON.stringify(this.note.body)
      })
    }
  }
}
</script>

<style scoped lang="scss">
.todo-note {
  border-radius: 8px;

  &__inner {
    padding: 15px;
  }

  &__title {
    font-size: 20px;
    line-height: 27px;
    color: $blue02;
  }

  &__tasks {
    margin-top: 23px;
    padding-left: 10px;
    color: $blue02;
  }

  &__task {
    display: flex;

    &:not(:first-child) {
      margin-top: 17px;
    }
  }

  &__task-checkbox {
    &::v-deep {
      .v-label {
        margin-left: 5px;
        color: $blue02 !important;
      }
    }

    &_completed {

      &::v-deep {
        .v-label {
          text-decoration-line: line-through;
        }
      }
    }
  }

  &__task-title {
    margin-top: -5px;
    margin-left: 12px;
    font-size: 16px;
    font-weight: 400;
  }
}
</style>
