// Get distance by lat lng
    
export const distance = (lat1, lon1, lat2, lon2, unit) =>  {
var radlat1 = (Math.PI * lat1)/180; 
var radlat2 = (Math.PI * lat2)/180; 
var theta = lon1 - lon2; 
var radtheta = (Math.PI * theta)/180; 
var dist = 
Math.sin(radlat1) * Math.sin(radlat2) + 
Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta); 
if (dist > 1) {
dist = 1; 
}
dist = Math.acos(dist); 
dist = (dist * 180)/Math.PI; 
dist = dist * 60 * 1.1515 * 1.609344; // default in KM

if (unit == "M") {
dist = dist * 1000; 
}

return dist; 
}; 

//    2- Array format change

//    a=[1,2,3,4,5,6,7,8,9,10]  to convert 
//    b=[[1],[2,3],[4],[5,6],[7],[8,9],[10]]


export const arrayConverter = arrayData =>  {
let dataResult = []; 

for (var i = 0; i <= arrayData.length; i +  + ) {
if (i == 0 || i % 3 == 0) {
let singleObject = []; 
singleObject.push(arrayData[i]); 
dataResult.push(singleObject); 
}else {
let twoObject = []; 
twoObject.push(arrayData[i], arrayData[i + 1]); 
i +  + ; 

dataResult.push(twoObject); 
}
}

return dataResult; 
}; 


// 3- get any one node from array list and convert in string with and special character

//    Eg.
//    arrayData=[{id:1,name:”xyz”},{id:2,name:”abc”},{id:3,name:”pqr”}]

//    arrayConverterString(“|@|”, arrayData, id) =>   result=1|@|2|@|pqr
//    arrayConverterString(“$”, arrayData , name) =>   result=xyz$abc$pqr




import _each from "lodash/each"; 
export const arrayConvertString = (sperater, arrayData, nodeValue) =>  {
let ids_str = ""; 
_each(arrayData, function(val, index) {
if (index === 0) {
ids_str = arrayData[index][nodeValue]; 
}else {
ids_str = ids_str + sperater + arrayData[index][nodeValue]; 
}
}); 
return ids_str; 
}; 


