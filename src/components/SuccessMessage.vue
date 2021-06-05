<template>
  <div class="v-success-message">
    <p class="v-text">Новый клиен успешно создан!</p>
  </div>
</template>

<script>
export default {
  name: 'AppModal',
};
</script>

<style scoped lang="sass">
  .v-success-message
    height: 44px
    border-left: 10px solid $main-color
    vertical-align: middle
  .v-text
    font-weight: 700
    margin: 0
    padding-left: 10px
    line-height: 44px
</style>
