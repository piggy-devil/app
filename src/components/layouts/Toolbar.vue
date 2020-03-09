<template>
    <v-app-bar app clipped-right color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Toolbar</v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon @click.stop="drawerRight = !drawerRight" />
    </v-app-bar>
</template>

<script>
export default {
  name: "Toolbar",

  computed: {
    drawerRight: {
      get() {
        return this.$store.getters.drawerRight;
      },
      set(value) {
        this.$store.commit("setDrawerRight", value);
      }
    },
    drawer: {
      get() {
        return this.$store.getters.drawer;
      },
      set(value) {
        this.$store.commit("setDrawer", value);
      }
    }
  }
};
</script>

<style></style>
