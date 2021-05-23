import { makeAutoObservable } from 'mobx';

export default class ModalsStore {
  registerModal = false
  loginModal = false

  constructor() {
    makeAutoObservable(this);
  }

  setRegisterModal (status) {
    this.registerModal = status
  }

  getRegisterModal () {
    return this.registerModal
  }

  setLoginModal (status) {
    this.loginModal = status
  }

  getLoginModal () {
    return this.loginModal
  }
}