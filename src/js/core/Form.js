import Errors from './Errors'
class Form {
  constructor(data){
    this.originalData = data;
    for(let field in data){
      this[field] = data[field]
    }
    this.errors = new Errors()
  }

  data(){
    //второй вариант
    let data = {};
    for(let property in this.originalData){
      data[property] = this[property];
    }
    //первый вариант
    /*let data = Object.assign({},this); //клонирование объекта form
     delete data.originalData;
     delete data.errors;*/
    return data;
  }

  reset(){
    for(let field in this.originalData){
      this[field] = '';
    }
    this.errors.clear();
  }

  post(url){
    return this.submit('post', url);
  }

  delete(url){
    return this.submit('delete', url);
  }

  submit(requestType, url){
    return new Promise((resolve, reject) => {
      axios[requestType](url,this.data())
          .then(response => {
            this.onSuccess(response.data);
            resolve(response.data);
          })
          .catch(error => {
            this.onFail(error.response.data);
            reject(error.response.data);
          });
    });
  }

  /**
   * Handle a successful form submission.
   * @param {object} data
   */
  onSuccess(data){
    alert(data.message);
    this.reset();
  }

  /**
   * Handle a failed form submission.
   * @param {object} errors
   */
  onFail(errors){
    this.errors.record( errors )
  }
}

export default Form;