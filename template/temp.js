// JavaScript Document
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-mixed-spaces-and-tabs */

$(document).ready(function(){
	console.log($(this));

/*	//// traveesing DOM elements
	$("section").last().css('background-color','blue');
	$('li').last().css('background-color','yellow');
	$('#myframe').contents().find('.col-md-6').css('background-color','green');
	$('#arrayme').click(function(){
		console.log($('.one').children().toArray());
	}); 
	$('.one').find('.four').css('border',' 2px dotted green');  */
	
	
	////effects and animations
	$('tr:even').css('background-color','red');
	$('a').click(function(event){
		event.preventDefault();
		console.log($(this));
		$('#output').html('the link is not clickable '+ $(this).attr('href')); 
	});
	
	$('#index').click(function(){
		$('#main').show(1000);
	});
	
	$('#show').click(function(){
		$('#main').show(1000);
	});
	
	$('#hide').click(function(){
		$('#main').hide(1000);
	});
	
	$('.box').click(function(){
		$(this).children().animate({
			opacity: 0.45,
			left: "+=150",
			width: '150%',
			fontSize: '24px',
			height: 'toggle'}, 1000,function(){
			$(this).parent().css({'background-color':'blue','color':'white'});
			$(this).animate({left: '-=150'});
		});
	});
	
	$('.box1').click(function(){
		$(this).children().slideToggle('slow',function(){
		$(this).parent().css({'background-color':'violet','color':'yellow'})	
		});
	});
	
	
	////fade effect
	$('#show').click(function(){
		$('#main').fadeIn(1000);
	});
	
	$('#hide').click(function(){
		$('#main').fadeOut(1000);
	});
	
	
	
	////AJAX load
	$('#btnContent').click(function() {
		$('#output').load('index.html');
	});
	
	$('#btnjson').click(function() {
		$.getJSON('tempdata.json', function(data) {
			console.log(data);
			$('#output').html('');
			$.each(data, function(key, val) {
				$('#output').append("<div class='post'>" + val.name + "<br>" + val.age + "<br>" + val.dob + "</div>");
			});
			$(".post:even").css('background-color','#dddddd');
			$(".post:odd").css('background-color','#bbbbbb');
		});
		
	});
	
	////AJAX Post
	$('#btnpostajax').click(function(){
		$('#output').html('sending....');
	/*	$.post('result.php',{name:"test",age:23})
		.done(function(data){
			console.log(data);
			  });  
		
		$.ajax({
			method: "POST",
			url: "result.php",
			data: {name:"test",age:23}
		})
		.done(function(data){
			console.log(data);
			$('#output').html(data);
		});  */
		
		//// Parse json using AJAX
		$.ajax({
			url: "tempdata.json",
			dataType: "text",
			success: function(data){
				var json = $.parseJSON(data);
				console.log(json);
				$.each(json, function(key, val) {
				$('#output').append("<div class='post'>" + val.name + "<br>" + val.age + "<br>" + val.dob + "</div>");
			});
			}
		}); 
	});
});
/* eslint-enable no-mixed-spaces-and-tabs */
/* eslint-enable no-unused-vars */
/* eslint-enable no-console */