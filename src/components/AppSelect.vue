<template>
  <div class="v-select">
    <label>{{label}}</label>
    <div class="v-select-header v-is-invalid" @click="areOptionsVisible = !areOptionsVisible">
      <div class="v-content-header">
        <div
          class="v-title"
          v-if="!selectedTitle"
        ><slot></slot></div>
        <div
          class="v-title"
          v-else
        >{{ selectedTitle }}</div>
      </div>
      <div class="v-arrows v-is-invalid" @click="$v.qwe.alpha.$touch()">
        <div
          class="v-arrow"
          :class="{'v-arrow-top': areOptionsVisible, 'v-arrow-bottom': !areOptionsVisible}"
        >
        </div>
      </div>
    </div>
    <ul
      class="v-options-list"
      v-if="areOptionsVisible"
    >
      <li
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppSelect',
  emits: ['change'],
  model: {
    prop: 'selectedTitle',
    event: 'change',
  },
  props: {
    label: String,
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    selectedTitle: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      areOptionsVisible: false,
    };
  },
  methods: {
    selectOption(option) {
      this.$emit('change', option.name);
      this.areOptionsVisible = false;
    },
  },
};
</script>

<style scoped lang="sass">
  p
    margin: 0
  ul
    list-style-type: none
    margin: 0
    padding: 0
  li
    padding: 10px 15px
    cursor: pointer
    &:hover
      background-color: $hoverInput
  .v-select
    max-width: 100%
    position: relative
  .v-select-header
    display: flex
    justify-content: space-between
    min-height: 45px
    border: 1px solid $border
    border-top-left-radius: 4px
    border-top-right-radius: 4px
    cursor: pointer
  .is-invalid > .v-is-invalid
    border-color: $error-color !important
  .v-content-header
    display: flex
    align-items: center
    width: 100%
    padding: 0 15px
  .v-arrows
    display: flex
    align-items: center
    justify-content: center
    width: 50px
    cursor: pointer
    border-left: 1px solid $border
  .v-arrow
    width: 15px
    height: 15px
    border-top: 3px solid $main-color
    border-right: 3px solid $main-color
  .v-arrow-top
    position: relative
    top: 5px
    transform: rotate(-45deg)
  .v-arrow-bottom
    position: relative
    top: -5px
    transform: rotate(135deg)
  .v-options-list
    position: absolute
    width: 100%
    z-index: 1000
    background-color: white
    border: 1px solid $border
    border-top: none
</style>
