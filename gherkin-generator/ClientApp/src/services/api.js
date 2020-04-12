import * as adalConfig from '../adalConfig';

class api {

    options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${adalConfig.getToken()}`
        }
    }

    fetch = (uri, opt) => {
        if (!uri)
            return;

        return fetch(`/api/${uri}`, { ...this.options, ...opt })
            .then(res => { return res.json() })                                         // handling the promise
            .then(data => { return data })
            .catch(error => console.log(error));
    }

}

export default new api();

//fetch(`/api/Feature?projectType=${e.target.value}`, {    //hitting my API with implied "GET" 
//    method: 'GET',
//    headers: {                                                                  // sending parameters in the header 
//        'Content-Type': 'application/json',

//        ...headers                                                              // "..." = "rest spread operator"
//    },
//})
//    .then(res => { return res.json() })                                         // handling the promise
//    .then(data => {
//        setItems(data)                                                          //useState setting the items = to the data from the response
//    })
//    .catch(e => console.log(e));       

// property local to my class called headers -- test the actual properties 
// bring in a method that i would call to get the method 