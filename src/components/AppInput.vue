<template>
  <div class="v-container">
    <label :for="name"><slot></slot></label>
    <input
      type="text"
      :name="name"
      :id="id"
      :placeholder="placeholder"
      class="v-input"
      :value="modelValue"
      @input="onChange"
      @blur="$emit('blur', $event.target)"
    >
      <span
        class="v-invalid-feedback"
        v-if="false"
      >
<!--        <template-->
<!--          v-if="!$v[name].required"-->
<!--        >Это поле обязательно для заполения</template>-->
<!--        <template-->
<!--          v-else-if="!$v[name].minLength"-->
<!--        >Поле не может состоять из одной буквы</template>-->
<!--        <template-->
<!--          v-else-if="!$v[name].alpha"-->
<!--&lt;!&ndash;        >Поле должно содержать только буквы</template>&ndash;&gt;-->
<!--        <template-->
<!--          v-else-if="!$v[name].minLength"-->
<!--        >Номер телефона должен состоять из 11 цифр</template>-->
<!--        <template-->
<!--          v-if="!$v[name].and"-->
<!--        >Поле должно содержать 6 цифр</template>-->
<!--        <template-->
<!--          v-else-if="!$v[name].validDate"-->
<!--        >Некорректная дата</template>-->
      </span>
  </div>
</template>

<script>
import {
  required, minLength, maxLength, numeric,
} from 'vuelidate/lib/validators';
import { alpha, validDate } from '@/validators';

export default {
  name: 'AppInput',
  emits: ['input', 'blur'],
  model: {
    prop: 'modelValue',
    event: 'input',
  },
  props: {
    modelValue: String,
    name: String,
    placeholder: String,
  },
  methods: {
    id() {
      return this.name + Date.now;
    },
    onChange(event) {
      this.$emit('input', event.target.value);
    },
  },
  validations: {
    regionName: {
      alpha,
      minLength: minLength(2),
    },
    cityName: {
      required,
      alpha,
      minLength: minLength(2),
    },
    streetName: {
      alpha,
      minLength: minLength(2),
    },
    houseNumber: {
      required,
    },
    passportSeries: {
      numeric,
      minLength: minLength(4),
      maxLength: maxLength(4),
    },
    passportId: {
      numeric,
      minLength: minLength(6),
      maxLength: maxLength(6),
    },
    issuedBy: {
      alpha,
    },
    dateIssue: {
      required,
      validDate,
    },
  },
};
</script>

<style scoped lang="sass">
.v-container
  position: relative
  display: flex
  flex-direction: column
.v-input
  height: 45px
  padding: 0 15px
  border-radius: 4px
  width: 100%
  @include input ($border, $activeInput, $placeholder, $placeholder-focus)
</style>
