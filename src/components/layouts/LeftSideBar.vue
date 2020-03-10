<template>
  <div>
    <v-navigation-drawer v-model="drawer" @input="DrawerLeft" app>

      <LeftMenu />

    </v-navigation-drawer>

    <v-navigation-drawer v-model="left" fixed temporary />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import LeftMenu from "../menus/LeftMenu";
export default {
  name: "LeftSideBar",
  data() {
    return {
      dense: true,
      avatar: true
    };
  },
  components: {
    LeftMenu
  },
  computed: {
    drawer: {
      get() {
        return this.$store.getters.drawer;
      },
      set(value) {
        this.$store.commit("setDrawer", value);
      }
    },
    left: {
      get() {
        return this.$store.getters.left;
      },
      set(value) {
        this.$store.commit("setLeft", value);
      }
    }
  },
  methods: {
    ...mapActions({
      DrawerLeft: "TOGGLE_NAVIGATION_DRAWER_LEFT"
    })
  }
};
</script>

<style></style>
