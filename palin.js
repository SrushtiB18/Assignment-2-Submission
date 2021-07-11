string = "madam is speaking in malayalam"
string = string + " "
word = ""
rev = ""
for(l of string){
  if(l != " "){
    word = word + l
    rev = l + rev
  }
  else{
    if(word == rev){
      console.log(word)
    }
  word = ""
  rev = ""
  }
}

//OUTPUT:
// madam
// malayalam