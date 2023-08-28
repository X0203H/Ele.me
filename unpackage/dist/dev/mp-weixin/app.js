"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/home/home.js";
  "./pages/discover/discover.js";
  "./pages/order/order.js";
  "./pages/mine/mine.js";
  "./subpkg/ShopHome/ShopHome.js";
  "./subpkg/address/address.js";
  "./subpkg/Add_address/Add_address.js";
  "./subpkg/Edit_address/Edit_address.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/web/作业/2023.8.25饿了么/Ele.me/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
