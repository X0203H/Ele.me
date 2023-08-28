"use strict";
const common_vendor = require("../../common/vendor.js");
const store_index = require("../../store/index.js");
if (!Array) {
  const _component_van_field = common_vendor.resolveComponent("van-field");
  const _component_van_cell_group = common_vendor.resolveComponent("van-cell-group");
  const _component_van_button = common_vendor.resolveComponent("van-button");
  (_component_van_field + _component_van_cell_group + _component_van_button)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "Add_address",
  setup(__props) {
    const editVal = store_index.store.state.edit_mod;
    console.log(editVal);
    const pushData = () => {
      store_index.store.commit("push", editVal);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          label: "用户名",
          value: common_vendor.unref(editVal).name,
          placeholder: "请输入用户名"
        }),
        b: common_vendor.p({
          label: "电话",
          value: common_vendor.unref(editVal).phone,
          placeholder: "请输入"
        }),
        c: common_vendor.p({
          label: "地址",
          value: common_vendor.unref(editVal).address,
          placeholder: "请输入"
        }),
        d: common_vendor.p({
          label: "门牌号",
          value: (_ctx.无默认值, _ctx.可随便修改),
          placeholder: "请输入"
        }),
        e: common_vendor.p({
          label: "标签",
          value: common_vendor.unref(editVal).tag,
          placeholder: "请输入"
        }),
        f: common_vendor.o(pushData),
        g: common_vendor.p({
          type: "primary"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "F:/web/作业/2023.8.25饿了么/Ele.me/subpkg/Add_address/Add_address.vue"]]);
wx.createPage(MiniProgramPage);
