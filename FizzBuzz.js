s3 = ""
s5 = ""
for(i=1; i<=100; i++){
  s = ""
  s3++
  s5++
  if(s3==3){
    s = s + "Fizz"
    s3 = 0
  }
  if(s5==5){
    s = s + "Buzz"
    s5 = 0
  }
  if(s==""){
    console.log(i)
  }
  else{
    console.log(s)
  }
}
