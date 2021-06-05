<template>
  <div>
    <div
      class="v-checkbox"
      v-for="option in options"
      :key="option.value"
    >
      <input
        type="checkbox"
        :name="option.name"
        :id="id(option)"
        :checked="checked"
        @change="$emit('change', $event.target.checked)"
      >
      <label :for="id(option)">{{ option.content }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCheckboxInput',
  emits: ['change'],
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: Boolean,
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
    change(option) {
      console.log(option.value);
      this.$emit('input', option.value);
    },
  },
};
</script>

<style scoped lang="sass">
.v-checkbox
  display: inline-block
  position: relative
  padding: 0 6px
  input[type='checkbox'],
  label
    cursor: pointer
    font-size: 14px
    font-weight: 400
input[type='checkbox']
  display: none
.v-checkbox label:before
  position: relative
  content: ""
  display: inline-block
  top: 3px
  margin-right: 5px
  width: 18px
  height: 18px
  border: 2px solid $main-color
  background-color: transparent
.v-checkbox input[type=checkbox]:checked + label:after
  position: absolute
  content: ""
  display: block
  top: 7px
  left: 10px
  width: 10px
  height: 10px
  background: $main-color
</style>
