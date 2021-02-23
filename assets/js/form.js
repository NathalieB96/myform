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
