import { makeAutoObservable } from 'mobx';

export default class PropblemReposrtStore {

  problemFiles = [];
  problemText = '';

  constructor() {
    makeAutoObservable(this);
  }

  setFiles(files) {
    this.problemFiles.push(files);
  }

  removeFiles(files) {
    this.problemFiles = files
  }

  setCKText(text) {
    this.problemText = text;
  }

  submitPropblem (data) {
    console.log(data)
    console.log(this.problemFiles)
    console.log(this.problemText)

    // axios.post('api/submitProblem')
  }

}