/*	var myButton = document.getElementById('myButton');
		myButton.addEventListener("click", function(){alert('Hello');});
		var myButton1 = document.getElementById('myButton1');
		myButton1.addEventListener("click", function(){alert('hi');});
		
		*/
		console.log(document.body);
		
		$(document).ready(function(){ 
			///// jquery code starts here
						  
		/*	$("#myButton").click(function(){alert('Hello');});
			$("#myButton1").click(function(){alert('hi');});    */
			
			$(".btn").click(function(){alert('Hello');});
			$("h1.duplicate").click(function(){alert('Not a Button');});
			
			///global click function statement using *
			
		/*	$("*").click(function(){alert('Global');}); */
		
			////making everything clickable which are under div class
			
		/*	$('div > * ').click(function(){console.log(this);}); */
			
		/*	////// exciude div that are not nested in other div class
			$('div:not(.col-md-6)').click(function(){console.log(this);});  */
			
			$("a[href*='google.com']").click(function(){console.log(this);});
			
		////// looping the paragraphs	
		/*	var myParagraph = $('p');
			console.log(myParagraph);
			for (x=0;x<myParagraph.length;x++){
				console.log(myParagraph[x].innerHTML);
			}   */
			
		///// table rows
			$("tr:even").css("background-color","#DDDDDD");
			$("tr:odd").css("background-color","#bbf");
		
			//// button events
			$('.btn').click(function(){
				console.log('clicked');
	});
			
	/*		$('img').mouseenter(function(){
				$(this).css('border-color','yellow');
				console.log('over image');
			});
				$('img').mouseleave(function(){
				$(this).css('border-color','red');
			}); */
			
			$('img').hover(function(){
				$(this).css('border-color','yellow');
				console.log('over image');
			},
			function(){ 
				$(this).css('border-color','red');
			});
			
			var holder;
			$('p').mouseenter(function(){
		/*		$(this).css('visibility','hidden');
				console.log('hidden'); */
				holder = $(this).html();
				console.log(holder);
				$(this).html('text changed');
			});
			
			$('p').mouseleave(function(){
				$(this).html(holder);
			});
		});
		
	/*	///// Method 2 for jquery code
		$(function(){
			
		});  */




$(document).ready(function(){
		$('.btn').on({
			
			"click": wasClicked,
			"mouseover": function() {console.log('hovered');}
		});
		
		function wasClicked(){
			console.log('clicked');
		}
			console.log(location.pathname.split("/")[1]);
				$('nav a[href^="'+location.pathname.split('/')[1]+'"]').addClass('active');	  
	
						  });
