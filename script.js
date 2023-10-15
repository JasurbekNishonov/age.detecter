var age =+prompt("Enter your age")
if(age>0 && age<=18){
    alert("You are a kid, get your ass and learn something!")
}else if(age>19 && age<=50){
    alert("You ought to work!")
}
else if(age>51 && age<=59){
    alert("You will get retired soon!")
}
else if(age>60 && age<=150){
    alert("You are likely to be pensioner, if you are still alive...")
}
else if(age>151){
    alert("Are you alive?")
}else{
    alert("Something gone wrong!!!")
}
