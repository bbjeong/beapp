import { observable, computed, action } from 'mobx';

class SurveyStore {

  @observable tokens = []
  @observable tokenTotal = 0;
  @observable answers = {};

  @action setAnswer = (key, value) => {
    console.log('[SET_ANSWER]', key, value)
    this.answers[key] = value;
  }

  @action setTokens = (token) => {
    this.tokens.push(token);
  }

  @computed get tokenTotal() {
    return this.tokens.reduce((prev, curr) => prev + curr, 0);
  }

}

export default new SurveyStore();
