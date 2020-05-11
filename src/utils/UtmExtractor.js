// import {Utm} from 'utm-extractor'
// const utm = new Utm('?utm_source=Google&utm_medium=cpc&utm_campaign=spring_sale&utm_term=running+shoes&utm_content=logolink')
// const values = utm.get()

// console.log(values)

// {
//     utm_source : "Google",
//     utm_medium: "cpc",     
//     utm_campaign: "spring_sale",
//     utm_term: 'running+shoes',
//     utm_content: 'logolink'
// }



export class Utm {

    static removeValueBeforeParameters() {
      return this.url = this.url.substr(this.url.indexOf('?')).replace('?', '&');
    }
  
    static removeOthersParametersThanUtm(object) {
  
      const utmObject = {
        utm_source : "",
        utm_medium: "",
        utm_campaign: "",
        utm_term: "",
        utm_content: "",
        // li_fat_id: ""
      };
  
      return Utm.compareObjectAndRemovePropertyNotInFirstObject(utmObject, object);
    }
  
    static compareObjectAndRemovePropertyNotInFirstObject(utmObject, object) {
      for (let prop in object) {
        if (!utmObject.hasOwnProperty(prop)) {
          delete object[prop];
        }
      }
      return object;
    }
  
    constructor(url) {
      this.url = url;
    }
  
    extractParamsFromQueryString() {
  
      let queryObject = Object.create({});
      const arrayOfParameters = this.url.split('&');
  
      arrayOfParameters.forEach((e) => {
        if(e.includes('=')) {
          const pair = [...e.split('=')];
          if (pair[0].length > 0 && pair[1].length > 0) {
            queryObject[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || undefined)
          }
        }
      });
  
      return Utm.removeOthersParametersThanUtm(queryObject);
    }
  
    get() {
   
      if(!this.url) {
        return {}
      }
  
      if(!this.url.includes('?')) {
        return this.extractParamsFromQueryString();
      }
  
      if(this.url.includes('?')) {
        this.url = this.url.replace('?', '&');
        return this.get();
      }
  
      if(this.url.charAt(0) === '?' || this.url.indexOf('?') > 0) {
        Utm.removeValueBeforeParameters();
        return this.get();
      }
    }
  }