import state from "./state";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";
import uuid4 from "uuid4";

export default {
  namespaced: true,
  mutations,
  actions,
  getters,
  state,
};
