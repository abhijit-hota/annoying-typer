
$(document).ready(function(){
///////The random annoying texts////////
var texts = [{eng:"Pressing any key won't help", 
   img:"﴾͡๏̯͡๏﴿ O'RLY?"
  }, 
  {eng:"You're screwed up man.",
   img:"〆(・∀・＠)"
  },
  {eng:"Oh please, don't try to hack me."
  img:"◔̯◔"
  }, 
  {eng:"I has you.",
   img:"╚(ಠ_ಠ)=┐"
  },
  {eng:"Buy yourself some M&Ms."
   img:"[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]"
  },
  {eng:"You got some bucks?",
   img:"[̲̅$̲̅(̲̅5̲̅)̲̅$̲̅]"
  }, 
  {eng:"Whatever.",
   img:"¯\_(ツ)_/¯"
  }, 
  {eng:"Did you hear uptown funk?",
   img:"ヾ(⌐■_■)ノ♪"
  },
  {eng:"ERROR_404. BRAIN NOT FOUND IN THIS MECHANICAL DEVICE. NOT A TERMINATOR",
   img:"┬─┬﻿ ︵ /(.□. ）"
  }];
  
/////////*blink blink*////////
setInterval("$('.blink').fadeOut().fadeIn();",5);
 
//////////Random text function////////////
 
 
////////Variable for the paragraph 'console' :P////////////////////
var console = document.getElementById('anything');
 
////////////Keydown function//////////////
$(document).keydown(function (event) {
      if (event.which === 8) {
        console.innerHTML+=("Backspace won't help either");
      }else{
        var randText = texts[Math.floor(Math.random() * texts.length)];
        //print randText.img, randText.eng && randText.span object selections on each keydown
        console.innerHTML+=("&nbsp;" + randText.img + "&nbsp;&nbsp;"+ randText.eng + "<br>"+ "&nbsp;"+ randText.span +"<span class='blink'>_</span></p>" );
        console.innerHTML+=("  " + randText + "<span class='blink'>_</span></p>" )
      }
  window.scrollBy(0, 50);
});
  $(document).on('click',function(){
   $('#anything').text(" ");
});
});
