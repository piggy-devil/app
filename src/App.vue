<template>
  <v-app id="inspire">

    <Toolbar />

    <RightSideBar />

    <LeftSideBar />

    <Content />

    <Footer />

  </v-app>
</template>

<script>
  // import { mapGetters } from "vuex";
  import Toolbar from './components/layouts/Toolbar'
  import RightSideBar from './components/layouts/RightSideBar'
  import Content from './components/layouts/Content'
  import LeftSideBar from './components/layouts/LeftSideBar'
  import Footer from './components/layouts/Footer'

export default {
  components: {
    Toolbar,
    RightSideBar,
    Content,
    LeftSideBar,
    Footer
  },
  data: () => ({
    // drawer: null,
    // drawerRight: null,
    // right: false,
    // left: false
  }),

  computed: {
    //   ...mapGetters({
    //   right: "right",
    //   drawerRight: "drawerRight"
    // }),

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
};
</script>
