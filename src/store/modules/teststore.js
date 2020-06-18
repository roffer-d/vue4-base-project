const state = {
  noticeList: []
}
const actions = {
  update({store,commit},arg){
    console.log('1');
  }
}
export default {
  namespaced:true,
  state,
  actions,
}
