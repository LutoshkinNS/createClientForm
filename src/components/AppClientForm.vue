<template>
  <div>
    <form>
      <div class="card">
        <div class="header">
          <h2 class="title">Новый клиент</h2>
        </div>
        <div class="content">
          <fieldset>
            <legend>Личные данные</legend>
            <div class="row">
              <div class="form-control col3">
                <app-input
                  name="lastName"
                  placeholder="Фамилия"
                  v-model.trim.lazy="lastName"
                  :class="{'is-invalid': $v.lastName.$error}"
                  @blur="$v.lastName.$touch()"
                >Фамилия*</app-input>
                <span
                  class="invalid-feedback"
                  v-if="$v.lastName.$error"
                >
                  <template
                    v-if="!$v.lastName.required"
                  >Это поле обязательно для заполения</template>
                  <template
                    v-else-if="!$v.lastName.minLength"
                  >Поле не может состоять из одного символа</template>
                  <template
                    v-else-if="!$v.lastName.alpha"
                  >Поле должно содержать только буквы</template>
                </span>
              </div>
              <div class="form-control col3">
                <app-input
                  name="firstName"
                  placeholder="Имя"
                  v-model.trim.lazy="firstName"
                  :class="{'is-invalid': $v.firstName.$error}"
                  @blur="$v.firstName.$touch()"
                >Имя*</app-input>
                <span
                  class="invalid-feedback"
                  v-if="$v.firstName.$error"
                >
                  <template
                    v-if="!$v.firstName.required"
                  >Это поле обязательно для заполения</template>
                  <template
                    v-else-if="!$v.firstName.minLength"
                  >Поле не может состоять из одного символа</template>
                  <template
                    v-else-if="!$v.firstName.alpha"
                  >Поле должно содержать только буквы</template>
                </span>
              </div>
              <div class="form-control col3">
                <app-input
                  name="middleName"
                  placeholder="Отчество"
                  v-model.trim.lazy="middleName"
                  :class="{'is-invalid': $v.middleName.$error}"
                  @blur="$v.middleName.$touch()"
                >Отчество</app-input>
                <span
                  class="invalid-feedback"
                  v-if="$v.middleName.$error"
                >
                  <template
                    v-if="!$v.middleName.minLength"
                  >Поле не может состоять из одного символа</template>
                  <template
                    v-else-if="!$v.middleName.alpha"
                  >Поле должно содержать только буквы</template>
                </span>
              </div>
            </div>
            <div class="row">
              <div class="form-control col4">
                <label for="birthDay">Дата рождения*</label>
                <input
                  type="text"
                  name="birthDay"
                  id="birthDay"
                  placeholder="ДД.ММ.ГГГГ"
                  class="input"
                  :class="{'is-invalid': $v.birthDay.$error}"
                  @blur="$v.birthDay.$touch()"
                  v-model="birthDay"
                  v-date
                >
                <span
                  class="invalid-feedback"
                  v-if="$v.birthDay.$error"
                >
                  <template
                    v-if="!$v.birthDay.required"
                  >Это поле обязательно для заполения</template>
                  <template
                    v-else-if="!$v.birthDay.validDate"
                  >Некорректная дата</template>
                </span>
              </div>
              <div class="form-control col3">
                <label for="numberPhone">Номер телефона*</label>
                <input
                  type="text"
                  name="numberPhone"
                  id="numberPhone"
                  placeholder="Номер телефона"
                  class="input"
                  :class="{'is-invalid': $v.numberPhone.$error}"
                  @blur="$v.numberPhone.$touch()"
                  v-model="numberPhone"
                  v-phone
                >
                <span
                  class="invalid-feedback"
                  v-if="$v.numberPhone.$error"
                >
                  <template
                    v-if="!$v.numberPhone.required"
                  >Это поле обязательно для заполения</template>
                  <template
                    v-else-if="!$v.numberPhone.minLength"
                  >Номер телефона должен состоять из 11 цифр</template>
                </span>
              </div>
              <div class="form-control col3">
                <app-checkbox-input
                  :options="sendMessage"
                  v-model="isSend"
                ></app-checkbox-input>
              </div>
            </div>
            <div class="row">
              <div class="form-control col2">
                <app-radio-input
                  :options="radioGender"
                  v-model="gender"
                ></app-radio-input>
              </div>
            </div>
            <div class="row">
              <div class="form-control col2">
                <app-select-multiple
                  label="Группа клиентов*"
                  :options="clientGroupOptions"
                  v-model="clientGroupChecked"
                  :class="{'is-invalid': $v.clientGroupChecked.$error}"
                  @change="$v.clientGroupChecked.$touch()"
                ></app-select-multiple>
                <span
                  class="invalid-feedback"
                  v-if="$v.clientGroupChecked.$error"
                >
                <template
                  v-if="!$v.clientGroupChecked.required"
                >Это поле обязательно для заполения</template>
              </span>
              </div>
              <div class="form-control col2">
                <app-select
                  label="Лечащий врач"
                  :options="doctorsOptions"
                  v-model="doctorSelectTitle"
                >Лечащий врач</app-select>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>Адрес:</legend>
            <div class="row">
              <div class="form-control col3">
                <app-input
                  name="postcode"
                  placeholder="Индекс"
                  :class="{'is-invalid': $v.postcode.$error}"
                  @blur="$v.postcode.$touch()"
                  v-model.trim.lazy="postcode"
                >Индекс</app-input>
                <span
                  class="invalid-feedback"
                  v-if="$v.postcode.$error"
                >
                <template
                  v-if="!$v.postcode.and"
                >Поле должно содержать 6 цифр</template>
              </span>
              </div>
              <div class="form-control col3">
                <app-input
                  name="countryName"
                  placeholder="Страна"
                  :class="{'is-invalid': $v.countryName.$error}"
                  @blur="$v.countryName.$touch()"
                  v-model.trim.lazy="countryName"
                >Страна</app-input>
                <span
                  class="invalid-feedback"
                  v-if="$v.countryName.$error"
                >
                  <template
                    v-if="!$v.countryName.minLength"
                  >Поле не может состоять из одного символа</template>
                  <template
                    v-else-if="!$v.countryName.alpha"
                  >Поле должно содержать только буквы</template>
                </span>
              </div>
              <div class="form-control col3">
                <app-input
                  name="regionName"
                  placeholder="Область"
                  :class="{'is-invalid': $v.regionName.$error}"
                  @blur="$v.regionName.$touch()"
                  v-model.trim.lazy="regionName"
                >Область</app-input>
                <span
                  class="invalid-feedback"
                  v-if="$v.regionName.$error"
                >
                  <template
                    v-if="!$v.regionName.minLength"
                  >Поле не может состоять из одного символа</template>
                  <template
                    v-else-if="!$v.regionName.alpha"
                  >Поле должно содержать только буквы</template>
                </span>
              </div>
            </div>
            <div class="row">
              <div class="form-control col3">
                <app-input
                  name="cityName"
                  placeholder="Город"
                  :class="{'is-invalid': $v.cityName.$error}"
                  @blur="$v.cityName.$touch()"
                  v-model.trim.lazy="cityName"
                >Город*</app-input>
                <span
                  class="invalid-feedback"
                  v-if="$v.cityName.$error"
                >
                  <template
                    v-if="!$v.cityName.required"
                  >Это поле обязательно для заполения</template>
                  <template
                    v-else-if="!$v.cityName.minLength"
                  >Поле не может состоять из одного символа</template>
                  <template
                    v-else-if="!$v.cityName.alpha"
                  >Поле должно содержать только буквы</template>
                </span>
              </div>
              <div class="form-control col3">
                <app-input
                  name="streetName"
                  placeholder="Улица"
                  :class="{'is-invalid': $v.streetName.$error}"
                  @blur="$v.streetName.$touch()"
                  v-model.trim.lazy="streetName"
                >Улица</app-input>
                <span
                  class="invalid-feedback"
                  v-if="$v.streetName.$error"
                >
                  <template
                    v-if="!$v.streetName.minLength"
                  >Поле не может состоять из одного символа</template>
                  <template
                    v-else-if="!$v.streetName.alpha"
                  >Поле должно содержать только буквы</template>
                </span>
              </div>
              <div class="form-control col3">
                <app-input
                  name="houseNumber"
                  placeholder="Дом"
                  v-model.trim.lazy="houseNumber"
                >Дом</app-input>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>Паспортные данные:</legend>
            <div class="row">
              <div class="form-control col2">
                <app-select
                  label="Тип документа*"
                  :options="documentType"
                  v-model="documentsTypeTitle"
                  :class="{'is-invalid': $v.documentsTypeTitle.$error}"
                  @change="$v.documentsTypeTitle.$touch()"
                >Тип документа</app-select>
                <span
                  class="invalid-feedback"
                  v-if="$v.documentsTypeTitle.$error"
                >
                <template
                  v-if="!$v.documentsTypeTitle.required"
                >Это поле не должно быть пустым</template>
              </span>
              </div>
            </div>
            <div class="row">
              <div class="form-control col4">
                <app-input
                  name="passportSeries"
                  placeholder="Серия"
                  :class="{'is-invalid': $v.passportSeries.$error}"
                  @blur="$v.passportSeries.$touch()"
                  v-model.trim.lazy="passportSeries"
                >Серия</app-input>
                <span
                  class="invalid-feedback"
                  v-if="$v.passportSeries.$error"
                >
                  <template
                    v-if="!$v.passportSeries.and"
                  >Поле должно содержать 4 цифры</template>
                </span>
              </div>
              <div class="form-control col3">
                <app-input
                  name="passportId"
                  placeholder="Номер"
                  :class="{'is-invalid': $v.passportId.$error}"
                  @blur="$v.passportId.$touch()"
                  v-model.trim.lazy="passportId"
                >Номер</app-input>
                <span
                  class="invalid-feedback"
                  v-if="$v.passportId.$error"
                >
                  <template
                    v-if="!$v.passportId.and"
                  >Поле должно содержать 6 цифр</template>
                </span>
              </div>
            </div>
            <div class="row">
              <div class="form-control col2">
                <app-input
                  name="issuedBy"
                  placeholder="Кем выдан"
                  :class="{'is-invalid': $v.issuedBy.$error}"
                  @blur="$v.issuedBy.$touch()"
                  v-model.trim.lazy="issuedBy"
                >Кем выдан</app-input>
                <span
                  class="invalid-feedback"
                  v-if="$v.issuedBy.$error"
                >
                  <template
                    v-if="!$v.issuedBy.minLength"
                  >Поле не может состоять из одного символа</template>
                  <template
                    v-else-if="!$v.issuedBy.alpha"
                  >Поле должно содержать только буквы</template>
                </span>
              </div>
              <div class="form-control col4">
                <label for="dateIssue">Дата рождения*</label>
                <input
                  type="text"
                  name="dateIssue"
                  id="dateIssue"
                  placeholder="ДД.ММ.ГГГГ"
                  class="input"
                  :class="{'is-invalid': $v.dateIssue.$error}"
                  @blur="$v.dateIssue.$touch()"
                  v-model="dateIssue"
                  v-date
                >
                <span
                  class="invalid-feedback"
                  v-if="$v.dateIssue.$error"
                >
                  <template
                    v-if="!$v.dateIssue.required"
                  >Это поле обязательно для заполения</template>
                  <template
                    v-else-if="!$v.dateIssue.validDate"
                  >Некорректная дата</template>
                </span>
              </div>
            </div>
          </fieldset>

          <div class="row">
            <button
              class="btn"
              @click.prevent="createClient"
            >Создать</button>
            <success-message
              v-if="isActive"
            ></success-message>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {
  maxLength, minLength, numeric, required,
} from 'vuelidate/lib/validators';
import { alpha, validDate } from '@/validators';
import AppSelectMultiple from './AppSelectMultiple.vue';
import AppSelect from './AppSelect.vue';
import AppRadioInput from './AppRadioInput.vue';
import AppCheckboxInput from './AppCheckboxInput.vue';
import SuccessMessage from './SuccessMessage.vue';
import AppInput from './AppInput.vue';

export default {
  name: 'AppClientForm',
  components: {
    AppSelectMultiple,
    AppSelect,
    AppRadioInput,
    AppCheckboxInput,
    SuccessMessage,
    AppInput,
  },
  data() {
    return {
      isActive: false,
      lastName: '',
      firstName: '',
      middleName: '',
      birthDay: '',
      numberPhone: '',
      gender: 'null',
      radioGender: [
        { name: 'gender', content: 'Мужчина', value: 'm' },
        { name: 'gender', content: 'Женщина', value: 'f' },
      ],
      doctorSelectTitle: '',
      doctorsOptions: [
        { name: 'Иванов', value: 'Иванов' },
        { name: 'Захаров', value: 'Захаров' },
        { name: 'Чернышева', value: 'Чернышева' },
      ],
      clientGroupChecked: [],
      clientGroupOptions: [
        { name: 'VIP', value: 'VIP', checked: false },
        { name: 'Проблемные', value: 'Проблемные', checked: false },
        { name: 'ОМС', value: 'ОМС', checked: false },
      ],
      isSend: false,
      sendMessage: [
        { name: 'sendMessage', content: 'Не отправлять СМС', value: false },
      ],
      documentsTypeTitle: '',
      documentType: [
        { name: 'Паспорт', value: 'Паспорт', checked: false },
        { name: 'Свидетельство о рождении', value: 'Свидетельство о рождении', checked: false },
        { name: 'Вод. удостоверение', value: 'Вод. удостоверение', checked: false },
      ],
      postcode: '',
      countryName: '',
      regionName: '',
      cityName: '',
      streetName: '',
      houseNumber: '',
      passportSeries: '',
      passportId: '',
      issuedBy: '',
      dateIssue: '',
    };
  },
  validations: {
    lastName: {
      required,
      minLength: minLength(2),
      alpha,
    },
    firstName: {
      required,
      minLength: minLength(2),
      alpha,
    },
    middleName: {
      minLength: minLength(2),
      alpha,
    },
    birthDay: {
      required,
      validDate,
    },
    numberPhone: {
      required,
      minLength: minLength(17),
    },
    clientGroupChecked: {
      required,
    },
    postcode: {
      numeric,
      minLength: minLength(6),
      maxLength: maxLength(6),
    },
    countryName: {
      alpha,
      minLength: minLength(2),
    },
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
    documentsTypeTitle: {
      required,
    },
  },
  methods: {
    createClient() {
      console.log(this.$refs);
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$v.$reset();
        this.isActive = true;
        setTimeout(() => { this.isActive = false; }, 4000);

        console.group();
        console.log('Фамилия:', this.lastName);
        console.log('Имя:', this.firstName);
        console.log('Отчество:', this.middleName);
        console.log('Дата рождения:', this.birthDay);
        console.log('Номер телефона:', this.numberPhone);
        console.log('Пол:', this.gender);
        console.log('Группа клиентов:', [...this.clientGroupChecked]);
        console.log('Лечащий врач:', this.doctorSelectTitle);
        console.log('Отправка СМС:', this.isSend);
        console.groupEnd();
        console.group();
        console.log('Тип документа:', this.documentsTypeTitle);
        console.log('Индекс:', this.postcode);
        console.log('Страна:', this.countryName);
        console.log('Область:', this.regionName);
        console.log('Город:', this.cityName);
        console.log('Улица:', this.streetName);
        console.log('Дом:', this.houseNumber);
        console.groupEnd();
        console.group();
        console.log('Серия:', this.passportSeries);
        console.log('Номер:', this.passportId);
        console.log('Кем выдан:', this.issuedBy);
        console.log('Дата выдачи:', this.dateIssue);
        console.groupEnd();

        this.lastName = '';
        this.firstName = '';
        this.middleName = '';
        this.birthDay = '';
        this.numberPhone = '';
        this.gender = null;
        this.clientGroupChecked = [];
        this.doctorSelectTitle = '';
        this.isSend = false;
        this.documentsTypeTitle = '';
        this.postcode = '';
        this.countryName = '';
        this.regionName = '';
        this.cityName = '';
        this.streetName = '';
        this.houseNumber = '';
        this.passportSeries = '';
        this.passportId = '';
        this.issuedBy = '';
        this.dateIssue = '';
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

</style>
