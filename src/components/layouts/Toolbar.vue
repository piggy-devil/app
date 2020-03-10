<template>
  <div>
    <v-app-bar app clipped-right color="primary" dark flat>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Toolbar</v-toolbar-title>
      <v-spacer />

      <Menu />

      <v-app-bar-nav-icon @click.stop="drawerRight = !drawerRight" />
    </v-app-bar>
  </div>
</template>

<script>
import Menu from "../menus/Menu";
export default {
  name: "Toolbar",
  components: {
    Menu
  },

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
