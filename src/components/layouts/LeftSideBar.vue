<template>
  <div>
    <v-navigation-drawer v-model="drawerRight" app clipped right>
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
  </div>
</template>

<script>
// import { mapGetters } from "vuex";

export default {
  name: "LeftSideBar",

  //   props: {
  //     right: Boolean,
  //     drawerRight: Boolean
  //   },
  mounted() {
            this.$store.commit("setRight", false);
        },

  computed: {
    // ...mapGetters({
    //   right: "right",
    //   drawerRight: "drawerRight"
    // }),
    right: {
      get() {
        return this.$store.getters.right;
      },
      set(value) {
          value = ! value;
        this.$store.commit("setRight", value);
      }
    },
    drawerRight: {
      get() {
          console.log('xxxx');
        return this.$store.getters.drawerRight;
      },
      set(value) {
          value = ! value;
        this.$store.commit("setDrawerRight", value);
      }
    },
  },

    // data: () => ({
    //   right: false,
    //   drawerRight: false,
    // })
};
</script>

<style></style>
