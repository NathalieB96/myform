/*
*-----------------------------------------------------------------------------------------------------------*
* Extend form fields
*-----------------------------------------------------------------------------------------------------------*
*/


$("#request").change(function() {
	if ($(this).val() == "option2") {
	  $('#descriptiontext_div').show();
	  $('#descriptiontext').attr('required', '');
	  $('#descriptiontext').attr('data-error', 'This field is required.');
	} else {
	  $('#descriptiontext_div').hide();
	  $('#descriptiontext').removeAttr('required');
	  $('#descriptiontext').removeAttr('data-error');
	}
  });
  $("#request").trigger("change");


// /*

// /*
// *-----------------------------------------------------------------------------------------------------------*
// * E-mail valid
// *-----------------------------------------------------------------------------------------------------------*
// */

jQuery(function($) {

	$(document).ready(function() {
		$('.error').hide();
		$('#submit').click(function(){
			 var email = $('#email').val();
			 
			  if(email== ''){
				 $('#email').next().show();
				 return false;
			  }
			  if(IsEmail(email)==false){
				  $('#invalid_email').show();
				  return false;
			  }
			});
		});
		function IsEmail(email) {
		  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		  if(!regex.test(email)) {
			 return false;
		  }else{
			 return true;
		  }
		}
	
	
	/*
	 *-----------------------------------------------------------------------------------------------------------*
		* jQuery end
	 *-----------------------------------------------------------------------------------------------------------*
	 */
	
	});