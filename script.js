
$(document).ready(function(){
///////The random annoying texts////////
var texts = [{eng:"Pressing any key won't help", 
   span:"Al pulsar cualquier tecla no ayudará",
   img:"﴾͡๏̯͡๏﴿ O'RLY?"
  }, 
  {eng:"You're screwed up man.",
   span:"Estás jodido hombre.",
   img:"〆(・∀・＠)"
  },
  {eng:"Oh please, don't try to hack me.",
  span:"Oh, por favor, no trates de cortar.",
  img:"◔̯◔"
  }, 
  {eng:"I has you.",
   span:"Te tuve.",
   img:"╚(ಠ_ಠ)=┐"
  },
  {eng:"Buy yourself some M&Ms.",
  span:"Cómprate algo de M&Ms.",
   img:"[̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]"
  },
  {eng:"You got some bucks?",
   span:"¿Tienes algo de dinero?",
   img:"[̲̅$̲̅(̲̅5̲̅)̲̅$̲̅]"
  }, 
  {eng:"Whatever.",
   span:"Lo Que Sea.",
   img:"¯\_(ツ)_/¯"
  }, 
  {eng:"Did you hear uptown funk?",
   span:"¿Has oído el funk de la parte alta?",
   img:"ヾ(⌐■_■)ノ♪"
  },
  {eng:"ERROR_404. BRAIN NOT FOUND IN THIS MECHANICAL DEVICE. NOT A TERMINATOR",
   span:"ERROR_404. CEREBRO NO ENCONTRADA EN ESTE DISPOSITIVO MECÁNICO. NO A TERMINATOR",
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
        console.innerHTML+=("&nbsp;" + randText.img + "&nbsp;&nbsp;"+ randText.eng + "</br>"+ "&nbsp;"+ randText.span +"<span class='blink'>_</span></p>" );
        
      }
  window.scrollBy(0, 50);
});
  $(document).on('click',function(){
   $('#anything').text(" ");
});
});