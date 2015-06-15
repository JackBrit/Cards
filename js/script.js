var deck, hand, discards;
			
window.onload = init;

function init() {

  deck     = new Stack();
  hand     = new Stack();
  discards = new Stack();

  deck.makeDeck(1);
  display();
}

function shuffle() {

  if (deck == null) return;

  deck.shuffle(1);
  display();
}

function deal() {

  var i;

  if (deck == null) return;

  if (deck.cardCount() < 7)
    alert("Not enough cards.");
  else {
    discard();
    for (i = 0; i < 7; i++)
      hand.addCard(deck.deal());
  }

  display();
}

function discard() {

  if (deck == null) return;

  discards.combine(hand);
  display();
}

function reset() {

  var el;

  if (deck == null) return;

  discards.combine(hand);
  deck.combine(discards);
  stackMakeDeck();
  display();
}

function display() {

  var el, top, left;
  var n;

  left = 0;
  top  = 0;
  el = document.getElementById("deck");
  while (el.firstChild != null)
    el.removeChild(el.firstChild);
  n = deck.cardCount();
  for (i = 0; i < Math.round(n / 5); i++) {
    node = deck.cards[i].createNode();
    node.firstChild.style.visibility = "hidden";
    node.style.left = left + "em";
    node.style.top  = top  + "em";
    el.appendChild(node);
    left += 0.10;
    top  += 0.05;
  }

  left = 0;
  top  = 0;
  el = document.getElementById("hand-inner");
  while (el.firstChild != null)
    el.removeChild(el.firstChild);
  for (i = 0; i < hand.cardCount(); i++) {
    node = hand.cards[i].createNode();
    node.style.left = left + "em";
    node.style.top  = top  + "em";
    el.appendChild(node);
    left += 1.00;
    top  += 0;
  }
  
   var s;

   s = ""
   for (i = 0; i < deck.cardCount(); i++)
   s += deck.cards[i] + "\n";
   document.forms[0].elements[0].value = s;

   s = "";
   for (i = 0; i < hand.cardCount(); i++)
   s += hand.cards[i] + "\n";
   document.forms[0].elements[1].value = s;
}

$(document).ready(function() {

	$("#show-text").click(function() {
		$(this).text(function(i, text){
          return text === "Show Text" ? "Hide Text" : "Show Text";
      	});
		$("#text-info").toggle();
	});
	
	$(".navicon-button").click(function(){
	  $(this).toggleClass("open");
	  $(".header-inner").slideToggle();
	});

});


