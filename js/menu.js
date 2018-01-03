$(document).ready( function () {

	$("#boxThemes").addClass('hide');
	$("#boxFbApi").addClass('hide');


	//ouvrir theme menu

	$('#themes').on('click',function(event){
		$("#themes").toggleClass("openbox");
		if ($("#themes").hasClass("openbox") == true){
			event.preventDefault();
			$('#themes').addClass('turn');
			$('#fbapi').addClass('repli');
			  $('#fbapi').removeClass('depli');
			$('#import').addClass('repli');
			  $('#import').removeClass('depli');
			$('#notifications').addClass('repli');
			  $('#notifications').removeClass('depli');
			$('#share').addClass('repli');
			  $('#share').removeClass('depli');
			$("#boxThemes").addClass('show');
		}else{
			$('#themes').removeClass('turn');
			$('#fbapi').removeClass('repli');
			  $('#fbapi').addClass('depli');
			$('#import').removeClass('repli');
			  $('#import').addClass('depli');
			$('#notifications').removeClass('repli');
			  $('#notifications').addClass('depli');
			$('#share').removeClass('repli');
			  $('#share').addClass('depli');
			$("#boxThemes").removeClass('show');
			$("#boxThemes").addClass('hide');
		}
	});


	//ouvrir api menu

	$('#fbapi').on('click',function(event){
		$("#fbapi").toggleClass("openbox");
		if ($("#fbapi").hasClass("openbox") == true){
			event.preventDefault();
			$('#themes').addClass('repli');
			  $('#themes').removeClass('depli');
			$('#fbapi').addClass('turn');
			$('#fbapi').addClass('menuCtaFirst');
			$('#import').addClass('repli');
			  $('#import').removeClass('depli');
			$('#notifications').addClass('repli');
			  $('#notifications').removeClass('depli');
			$('#share').addClass('repli');
			  $('#share').removeClass('depli');
			$("#boxFbApi").addClass('show');
		}else{
			$('#themes').removeClass('repli');
			  $('#themes').addClass('depli');
			$('#fbapi').removeClass('turn');
			$('#fbapi').removeClass('menuCtaFirst');
			  $('#fbapi').addClass('depli');
			$('#import').removeClass('repli');
			  $('#import').addClass('depli');
			$('#notifications').removeClass('repli');
			  $('#notifications').addClass('depli');
			$('#share').removeClass('repli');
			  $('#share').addClass('depli');
			$("#boxFbApi").removeClass('show');
			$("#boxFbApi").addClass('hide');
		}
	});

	//pour fermer le menu api avec save

	$('#save').on('click',function(){
		$('#themes').removeClass('repli');
			  $('#themes').addClass('depli');
			$('#fbapi').removeClass('turn');
			$('#fbapi').removeClass('menuCtaFirst');
			  $('#fbapi').addClass('depli');
			$('#import').removeClass('repli');
			  $('#import').addClass('depli');
			$('#notifications').removeClass('repli');
			  $('#notifications').addClass('depli');
			$('#share').removeClass('repli');
			  $('#share').addClass('depli');
			$("#boxFbApi").removeClass('show');
			$("#boxFbApi").addClass('hide');
	});



	//pour le menu couleur

	$('#c1').on('click',function(event){
		$('body').addClass('green');
		$('body').removeClass('red');
		$('body').removeClass('blue');
		$('body').removeClass('white');
		$('body').removeClass('pink');
		$('body').removeClass('brown');			
	});
	$('#c2').on('click',function(event){
		$('body').removeClass('green');
		$('body').addClass('red');
		$('body').removeClass('blue');
		$('body').removeClass('white');
		$('body').removeClass('pink');
		$('body').removeClass('brown');			
	});
	$('#c3').on('click',function(event){
		$('body').removeClass('green');
		$('body').removeClass('reb');
		$('body').addClass('blue');
		$('body').removeClass('white');
		$('body').removeClass('pink');
		$('body').removeClass('brown');			
	});
	$('#c4').on('click',function(event){
		$('body').removeClass('green');
		$('body').removeClass('red');
		$('body').removeClass('blue');
		$('body').addClass('white');
		$('body').removeClass('pink');
		$('body').removeClass('brown');			
	});
	$('#c5').on('click',function(event){
		$('body').removeClass('green');
		$('body').removeClass('red');
		$('body').removeClass('blue');
		$('body').removeClass('white');
		$('body').addClass('pink');
		$('body').removeClass('brown');			
	});
	$('#c6').on('click',function(event){
		$('body').removeClass('green');
		$('body').removeClass('red');
		$('body').removeClass('blue');
		$('body').removeClass('white');
		$('body').removeClass('pink');
		$('body').addClass('brown');			
	});

});