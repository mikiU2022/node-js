//promise
/* let a2 =false
let a1 = new Promise(function (resolve,reject) {
 
if (a2){
    resolve('okokokok')
} else {
    console.log('nononono')
    reject('errrrrrrr')
}
})
.then (function (mes){
    console.log(`${mes}`+'print')
 
})
.catch( function (mes){
    console.log(`${mes}`)
 
}   ) */

const { triggerAsyncId } = require('async_hooks')

//await
/* 
function fn2 (a) {
  return new Promise(function (resolve, reject) {
    if (a > 10) {
      resolve('000')
    } else {
      reject('001')
    }
  })
}
async function cal () {
  try {
    let res = await fn2(5)
    console.log(res)
  } catch (mes) {
    console.log(`${mes} `)
  }
} */
//return 必须写在 new promise 前面 ，不然传回来的会 undefined
// cal()

//-----------
//util to promisify
const fs = require('fs')
let promisify = require('util').promisify
const readFileAsync = promisify(fs.readFile);
//orignial
/* function a1 () {
  return new Promise(function (resolve, reject) {
    fs.readFile('input.txt', 'utf8', function (err, data) {
      if (err) {
        reject(err)
        return
      } else {
        resolve(data)
      }
    })
  })
    .then(msg => {
      console.log(msg)
    })
    .catch(msg => {
      console.log(msg)
    })
} */
// a1()
//after promisify
/* 
readFileAsync('input.txt','utf8')
.then( data =>{
    console.log(data)
  }).catch( error =>{
    console.log(err)
  })
 */
//Callbackify

const callbackify = require('util').callbackify

async function fn5() {
    return 'okok'
}

let callbackFn = callbackify (fn5) //add callback

callbackFn((err,ret)=>{
    if (err) throw err;
    console.log(ret)
})