"use strict";
const common_vendor = require("../../common/vendor.js");
const api_api = require("../../api/api.js");
const wxcomponents_weapp_dist_dialog_dialog = require("../../wxcomponents/weapp/dist/dialog/dialog.js");
const store_index = require("../../store/index.js");
if (!Array) {
  const _component_van_tag = common_vendor.resolveComponent("van-tag");
  const _component_van_icon = common_vendor.resolveComponent("van-icon");
  const _component_van_dialog = common_vendor.resolveComponent("van-dialog");
  (_component_van_tag + _component_van_icon + _component_van_dialog)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "address",
  setup(__props) {
    const addressData = common_vendor.ref([]);
    const getaddressData = () => {
      api_api.http.get("/address_data.json", {}, false).then((res) => {
        console.log(res);
        addressData.value = res.my_address;
      });
    };
    getaddressData();
    const delModel = (val) => {
      console.log(val);
      wxcomponents_weapp_dist_dialog_dialog.Dialog.confirm({
        title: "删除地址",
        message: "确定删除地址"
      }).then(() => {
        addressData.value.splice(val, 1);
      }).catch(() => {
      });
    };
    const edit = (val) => {
      console.log(val);
      common_vendor.index.navigateTo({
        url: "/subpkg/Edit_address/Edit_address"
      });
      store_index.store.commit("edit_model", [addressData, val]);
    };
    const toAdd = (val) => {
      common_vendor.index.navigateTo({
        url: "/subpkg/Add_address/Add_address"
      });
      store_index.store.commit("edit_model", [addressData, val]);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(addressData.value, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.gender === 0 ? "男" : "女"),
            c: common_vendor.t(item.phone),
            d: common_vendor.t(item.tag),
            e: "d03b239f-0-" + i0,
            f: common_vendor.t(item.address),
            g: common_vendor.o(($event) => edit(index), index),
            h: "d03b239f-1-" + i0,
            i: common_vendor.o(($event) => delModel(index), index),
            j: "d03b239f-2-" + i0,
            k: index
          };
        }),
        b: common_vendor.p({
          type: "primary",
          plain: true
        }),
        c: common_vendor.p({
          name: "records"
        }),
        d: common_vendor.p({
          name: "cross"
        }),
        e: common_vendor.p({
          id: "van-dialog"
        }),
        f: common_vendor.p({
          name: "plus"
        }),
        g: common_vendor.o(($event) => toAdd(1))
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d03b239f"], ["__file", "F:/web/作业/2023.8.25饿了么/Ele.me/subpkg/address/address.vue"]]);
wx.createPage(MiniProgramPage);
