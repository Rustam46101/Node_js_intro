const ages=require('./mod2');

let helloUser=(name)=>{
    console.log(`Hello ${name},age ${ages.data2}`);
}
module.exports.data=helloUser;