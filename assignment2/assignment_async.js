function getData(uId) {
    return new Promise((resolve)=>{
        setTimeout(() => {
            console.log("Fetched the data!");
            resolve("skc@gmail.com");},
            4000)
        }    
    );
}

async function main(){
    console.log("start");
    var email = await getData("skc");
    console.log("Email id of the user id is: " + email);
    console.log("end");
}

main()
    .catch((error)=>console.error(error));;
