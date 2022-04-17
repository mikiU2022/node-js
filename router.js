var handler = require('./handler.js')
function route(pathname){

    var handle = { }

    handle['/'] = handler.start
    handle['/start'] = handler.start
    handle['/upload'] = handler.upload

      
    //    console.log(handle['/upload'])  

    if(typeof handle[pathname]==='function'){   
        return handle[pathname]();   
    }else{   
        console.log("No request handler found for "+ pathname);   
        return "404 Not Found";   
    }   

// console.log('receive'+pathname) 


}

exports.route = route;