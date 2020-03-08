const state = {
    drawer: null,
    drawerRight: null,
    right: false,
    left: false
};

const getters = {
    drawer: state => {
        return state.drawer;
    },
    drawerRight: state => {
        return state.drawerRight;
    },
    right: state => {
        return state.right;
    },
    left: state => {
        return state.left;
    },
};

const actions = {

};

const mutations = {
    setDrawer(state, drawer) {
        state.drawer = drawer;
    },
    setDrawerRight(state, drawerRight) {
        state.drawerRight = drawerRight;
    },
    setRight(state, right) {
        state.right = right;
    },
    setLeft(state, left) {
        state.left = left;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
}
