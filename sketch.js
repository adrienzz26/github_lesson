
console.log("Please type messages in lowercase.")
console.log("Exclamation points and periods work in this encoder/decoder.")
//variables
let myinput_encode;
let myinput_decode;
let button_encode;
let button_decode;
let input_encodevalue;
let input_decodevalue;


function setup() {
  createCanvas(windowWidth, windowHeight);
//ENCODER setup
 // create button, give it some text
  button_encode = createButton('Encode');  
    // make an input box
    myinput_encode = createInput('');
    // position the input
    myinput_encode.position(50, 50);
    // position the button
    button_encode.position(50 + myinput_encode.width, 50);
    // input box callback
      myinput_encode.input(typed_encode);
  
    // button encode  callback
        button_encode.mousePressed(button_encode_pressed)
  
  //button encode callback function
     function button_encode_pressed(){
       new_word = myinput_encode.value();
       console.log(encode("ENCODED MESSAGE: " + new_word))

}
  // input callback function
     function typed_encode(){
       input_encodevalue = this.value();
     }
  
  





 button_decode = createButton('Decode');  
    // make an input box
    myinput_decode = createInput('');
    // position the input
    myinput_decode.position(50, 72);
    // position the button
    button_decode.position(50 + myinput_decode.width, 72);
    // input box callback
      myinput_decode.input(typed_decode);
  
    // button encode  callback
        button_decode.mousePressed(button_decode_pressed)
  
  //button encode callback function
     function button_decode_pressed(){
       new_word = myinput_decode.value();
       console.log(decode("DECODED MESSAGE: " + new_word))

}
  // input callback function
     function typed_decode(){
       input_decodevalue = this.value();
     }
  
} 





// encoder and decoder function setups 
function encode(word){
  var morsemessage = word
  new_word = new_word.replaceAll("a","😴");
  new_word = new_word.replaceAll("b","😘");
  new_word = new_word.replaceAll("c","🥺");
  new_word = new_word.replaceAll("d","😏");
  new_word = new_word.replaceAll("e","😌");
  new_word = new_word.replaceAll("f","😙");
  new_word = new_word.replaceAll("g","😅");
  new_word = new_word.replaceAll("h","😱");
  new_word = new_word.replaceAll("i","🤫");
  new_word = new_word.replaceAll("j","😋");
  new_word = new_word.replaceAll("k","🥴");
  new_word = new_word.replaceAll("l","🥱");
  new_word = new_word.replaceAll("m","😑");
  new_word = new_word.replaceAll("n","😬");
  new_word = new_word.replaceAll("o","🙄");
  new_word = new_word.replaceAll("p","😡");
  new_word = new_word.replaceAll("q","😳");
  new_word = new_word.replaceAll("r","😨");
  new_word = new_word.replaceAll("s","🤯");
  new_word = new_word.replaceAll("t","🥸");
  new_word = new_word.replaceAll("u","😈");
  new_word = new_word.replaceAll("v","😖");
  new_word = new_word.replaceAll("w","🤠");
  new_word = new_word.replaceAll("x","🥵");
  new_word = new_word.replaceAll("y","🤧");
  new_word = new_word.replaceAll("z","🥶");
  new_word = new_word.replaceAll(".","😼");
  new_word = new_word.replaceAll("!","😎");
   return new_word;
}

function decode(word){
      var new_word = word;
  new_word = new_word.replaceAll("😴","a");
  new_word = new_word.replaceAll("😘","b");
  new_word = new_word.replaceAll("🥺","c");
  new_word = new_word.replaceAll("😏","d");
  new_word = new_word.replaceAll("😌","e");
  new_word = new_word.replaceAll("😙","f");
  new_word = new_word.replaceAll("😅","g");
  new_word = new_word.replaceAll("😱","h");
  new_word = new_word.replaceAll("🤫","i");
  new_word = new_word.replaceAll("😋","j");
  new_word = new_word.replaceAll("🥴","k");
  new_word = new_word.replaceAll("🥱","l");
  new_word = new_word.replaceAll("😑","m");
  new_word = new_word.replaceAll("😬","n");
  new_word = new_word.replaceAll("🙄","o");
  new_word = new_word.replaceAll("😡","p");
  new_word = new_word.replaceAll("😳","q");
  new_word = new_word.replaceAll("😨","r");
  new_word = new_word.replaceAll("🤯","s");
  new_word = new_word.replaceAll("🥸","t");
  new_word = new_word.replaceAll("😈","u");
  new_word = new_word.replaceAll("😖","v");
  new_word = new_word.replaceAll("🤠","w");
  new_word = new_word.replaceAll("🥵","x");
  new_word = new_word.replaceAll("🤧","y");
  new_word = new_word.replaceAll("🥶","z");
  new_word = new_word.replaceAll("😼",".");
  new_word = new_word.replaceAll("😎","!");
   return new_word;            
        }
function draw(){
background("orange")
}