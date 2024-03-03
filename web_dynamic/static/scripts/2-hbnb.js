$(document).ready(init);

const HOST = '0.0.0.0';

function init () {
  const amenityObj = {};
  $('.amenities .popover input').change(function () {
    if ($(this).is(':checked')) {
      amenityObj[$(this).attr('data-name')] = $(this).attr('data-id');
    } else if ($(this).is(':not(:checked)')) {
      delete amenityObj[$(this).attr('data-name')];
    }
    const names = Object.keys(amenityObj);
    $('.amenities h4').text(names.sort().join(', '));
  });

  apiStatus();
}

function apiStatus () {
	const API_URL = `http://${HOST}:5001/api/v1/status/`;
	$.get(API_URL, function(data) {
		// Check if status is "OK"
		if (data.status == "OK") {
			$('#api_status').addClass('available');
		} else {
			// If status is not OK
			$('#api_status').removeClass('available');
		}
	});
};
