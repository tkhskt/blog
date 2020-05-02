<template>
  <v-form ref="form">
    <v-text-field
      v-model="title"
      label="Title"
    />
  </v-form>
  <v-textarea
    v-model="content"
    auto-grow="true"
  />
</template>
<script>
export default {

}
</script>
