// JavaScript Document
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

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
	
	
	////effects
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
	
	
	
});
/* eslint-enable no-unused-vars */
/* eslint-enable no-console */