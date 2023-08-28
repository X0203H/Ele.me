"use strict";
const common_vendor = require("../../common/vendor.js");
const api_api = require("../../api/api.js");
if (!Array) {
  const _component_van_button = common_vendor.resolveComponent("van-button");
  _component_van_button();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "home",
  setup(__props) {
    api_api.http.get("test_data_store_index_data.json", {}, false).then((res) => {
      console.log(res);
    });
    const toAddress = () => {
      console.log(111);
      common_vendor.index.navigateTo({
        url: "/subpkg/address/address"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(toAddress)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/web/作业/2023.8.25饿了么/Ele.me/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
