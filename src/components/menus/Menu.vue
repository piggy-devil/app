<template>
  <v-toolbar-items class="hidden-sm-and-down">
    <div class="my-3 mr-3">
      <v-avatar size="36px">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
      </v-avatar>
    </div>

    <div class="my-5">
      <v-btn text small class="text-center" to="/card">
        Card
      </v-btn>
    </div>

    <div class="my-5">
      <v-btn text small class="text-center" to="/book">
        Book
      </v-btn>
    </div>

    <v-divider vertical inset></v-divider>
  </v-toolbar-items>
</template>

<script>
export default {};
</script>

<style></style>
