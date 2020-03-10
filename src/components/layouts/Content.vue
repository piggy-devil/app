<template>
  <v-content>
    <v-container fluid>
      <router-view :key="$route.fullPath"></router-view>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "Content",
};
</script>

<style></style>
