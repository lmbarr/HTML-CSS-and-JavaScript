var colors= ["white", "black", "blue", "yellow" , "brown", "coral", "cyan", "gray", "red", "gold", "green","lime", "olive"];
var color_input_text;
var finished = false;
var guesses = 0;
var target;

function do_game() {
   colors.sort();
   target_index = Math.floor(Math.random() * (colors.length - 1));
   target = colors[target_index];
   //alert(target);
   while (!finished) {
     color_input_text = prompt("I am thinking of one of this colors\n\n " + colors +
  "\n\nWhat color am I thinking of ");
   //alert(color_input_text);
     guesses += 1;
     finished = check_guess();
   }
}

function check_guess(){
   if(color_input_text == null){
      alert("I dont recognize your color.\n" +
   "Please try again");
   return false;
   }
   if(color_input_text > target){
      alert("Sorry, your guess is not correct!\n" +
   "Your color is alphabetically higuer than mine.\nPlease try again");
   return false;
   }
   if(color_input_text < target){
      alert("Sorry, your guess is not correct!\n" +
   "Your color is alphabetically lower than mine.\nPlease try again");
   return false;
   }
   myBody=document.getElementsByTagName("body")[0];
   myBody.style.background=target;

   alert("You got it! The color was " + target +
         ".\n\nIt took you " + guesses +
         " guesses to get the color!\n" + "You can see the color in the background");
   return true;
}
