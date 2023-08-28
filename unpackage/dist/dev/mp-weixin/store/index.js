"use strict";
const common_vendor = require("../common/vendor.js");
const store = common_vendor.createStore({
  state: {
    edit: [],
    edit_mod: {}
  },
  actions: {},
  mutations: {
    edit_model(state, val) {
      state.edit = val[0];
      state.edit_mod = state.edit[1];
    },
    push(state, val) {
      state.edit.push(val);
    }
  },
  getters: {}
});
exports.store = store;
