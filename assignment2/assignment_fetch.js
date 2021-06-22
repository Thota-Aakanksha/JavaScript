const fetch = require("node-fetch");

async function getData(type) {
    console.log("start");
    var data = await fetch('https://www.boredapi.com/api/activity?type='+type);
    result = await data.json();
    console.log("If you are bored, try " + result.activity);
    console.log("end");
}

getData('education')
    .catch((error)=>console.error(error));
