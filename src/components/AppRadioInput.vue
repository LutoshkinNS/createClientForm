<template>
  <div>
    <div
      class="v-radio-item"
      v-for="option in options"
      :key="option.content"
    >
      <input
        type="radio"
        :name="option.name"
        :id="id(option)"
        @change="$emit('change', option.value);"
      >
      <label :for="id(option)">{{ option.content }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppRadioInput',
  emits: ['input'],
  model: {
    event: 'change',
  },
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    id(option) {
      return option.value + Date.now();
    },
  },
};
</script>

<style scoped lang="sass">
.v-radio-item
  display: inline-block
  position: relative
  padding: 0 6px
  input[type='radio'],
  label
    cursor: pointer
    font-size: 14px
    font-weight: 400
input[type='radio']
  display: none
.v-radio-item label:before
  position: relative
  content: ""
  display: inline-block
  top: 3px
  margin-right: 5px
  width: 18px
  height: 18px
  border-radius: 11px
  border: 2px solid $main-color
  background-color: transparent
.v-radio-item input[type=radio]:checked + label:after
  position: absolute
  content: ""
  display: block
  top: 7px
  left: 10px
  width: 10px
  height: 10px
  border-radius: 11px
  background: $main-color
</style>
