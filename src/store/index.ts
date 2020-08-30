import { observable } from 'mobx';

class Store {
  @observable auth = false;
}

const store = new Store();

export default store;
