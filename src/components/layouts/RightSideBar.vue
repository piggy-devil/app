<template>
  <div>
    <v-navigation-drawer v-model="drawerRight" @input="DrawerRight" app clipped right >
      <v-list dense>
        <v-list-item @click.stop="right = !right">
          <v-list-item-action>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Open Temporary Drawer Right</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer v-model="right" fixed right temporary />
  </div>
</template>

<script>
  import { mapActions } from "vuex";

export default {
  name: "LeftSideBar",

  computed: {
    drawerRight: {
      get() {
        return this.$store.getters.drawerRight;
      },
      set(value) {
        this.$store.commit("setDrawerRight", value);
      }
    },
    right: {
      get() {
        return this.$store.getters.right;
      },
      set(value) {
        this.$store.commit("setRight", value);
      }
    },
  },
  methods:{
    ...mapActions({
      DrawerRight: "TOGGLE_NAVIGATION_DRAWER_RIGHT"
    }),
  }
};
</script>

<style></style>
