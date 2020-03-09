<template>
  <div>
    <v-navigation-drawer v-model="drawer" @input="DrawerLeft" app>
      <v-list dense>
        <v-list-item @click.stop="left = !left">
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Open Temporary Drawer</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer v-model="left" fixed temporary />
  </div>
</template>

<script>
    import { mapActions } from "vuex";
export default {
  name: "LeftSideBar",
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
    },
  },
  methods:{
    ...mapActions({
      DrawerLeft: "TOGGLE_NAVIGATION_DRAWER_LEFT"
    }),
  }
};
</script>

<style></style>
