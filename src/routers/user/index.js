const state = {
  name: ''
}

const action = {

}

const mutations = {
  USER_NAME =(state, payload){
    state.nm = payload.nm;
    state.id = payload.id;
  }
}

export default {
  namespaced: true,
  state,
  action,
  mutations
}
