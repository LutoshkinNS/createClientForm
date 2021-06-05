<template>
  <div class="v-select">
    <label>{{ label }}</label>
    <div
      class="v-select-header v-is-invalid"
      @click="areOptionsVisible = !areOptionsVisible"
    >
      <div class="v-content-header">
        <div
          class="v-title"
          v-if="checkedOptions.length === 0"
        >Группа клиентов</div>
        <div class="v-parts" v-else>
          <div
            class="v-option"
            v-for="(checkedOption, idx) in checkedOptions"
            :key="checkedOption"
            @click.stop
          >
            <span class="v-delete" @click.self="selectOption(checkedOption, idx)">&#10006;</span>
            <span>{{ checkedOption }}</span>
          </div>
        </div>
      </div>
      <div class="v-arrows v-is-invalid">
        <div
          class="v-arrow"
          :class="{'v-arrow-top': areOptionsVisible, 'v-arrow-bottom': !areOptionsVisible}"
        >
        </div>
      </div>
    </div>
    <ul class="v-options-list" v-if="areOptionsVisible">
      <li
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option.name)"
        :class="{'checked': checkedOptions.indexOf(option.name) !== -1}"
      >{{ option.name }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppSelectMultiple',
  emits: ['change'],
  model: {
    prop: 'checkedOptions',
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
    checkedOptions: Array,
  },
  data() {
    return {
      areOptionsVisible: false,
    };
  },
  methods: {
    selectOption(option, idx) {
      if (this.checkedOptions.indexOf(option) === -1) {
        this.checkedOptions.push(option);
        this.$emit('change', this.checkedOptions);
      } else {
        this.checkedOptions.splice(idx, 1);
        this.$emit('change', this.checkedOptions);
      }
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
  .checked
    background-color: $hoverInput
  .v-select
    max-width: 100%
    position: relative
  .v-select-header
    display: flex
    justify-content: space-between
    min-height: 45px
    cursor: pointer
    border: 1px solid $border
    border-top-left-radius: 4px
    border-top-right-radius: 4px
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
  .v-parts
    display: flex
    flex-wrap: wrap
    margin-top: 7px
  .v-option
    border-radius: 4px
    padding: 4px
    margin-right: 7px
    margin-bottom: 7px
    -webkit-box-shadow: 1px 1px 3px 1px rgba(34, 60, 80, 0.2)
    -moz-box-shadow: 1px 1px 3px 1px rgba(34, 60, 80, 0.2)
    box-shadow: 1px 1px 3px 1px rgba(34, 60, 80, 0.2)
  .v-delete
    cursor: pointer
    margin-right: 5px
  .v-options-list
    position: absolute
    width: 100%
    z-index: 1000
    background-color: white
    border: 1px solid $border
    border-top: none

</style>
