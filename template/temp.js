// JavaScript Document
/* eslint-disable no-console */

$(document).ready(function(){
	console.log($(this));

	//// traveesing DOM elements
	$("section").last().css('background-color','blue');
	$('li').last().css('background-color','yellow');
	$('#myframe').contents().find('.col-md-6').css('background-color','green');
	$('#arrayme').click(function(){
		console.log($('.one').children().toArray());
	}); 
	
	$('.one').find('.four').css('border',' 2px dotted green');
});
/* eslint-enable no-console */