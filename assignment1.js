function part1(){
    function display(message,greet){
          greet("Morning");
          console.log(message);
    }
        
    display("Welcome to the home page", function(timeOfDay){
                                            console.log("Good "+timeOfDay+" !");}
                                        );

    console.log("--------------");
}

function part2(){
    var firstLetters = (firstName,lastName)=>{
                            return firstName.charAt(0)+lastName.charAt(0);
                        }
    console.log(firstLetters("Roger","Waters"));
}

part1();
part2();