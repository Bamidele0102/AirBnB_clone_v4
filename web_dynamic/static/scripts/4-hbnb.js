$('document').ready(function () {
    const api = 'http://' + window.location.hostname;
  
    $.get(api + ':5001/api/v1/status/', function (response) {
      if (response.status === 'OK') {
        $('DIV#api_status').addClass('available');
      } else {
        $('DIV#api_status').removeClass('available');
      }
    });
  
    $('#search_button').click(function () {
      const amenities = [];
      $('INPUT[type="checkbox"]:checked').each(function () {
        amenities.push($(this).attr('data-id'));
      });
  
      $.ajax({
        url: api + ':5001/api/v1/places_search/',
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify({ amenities: amenities }),
        success: function (data) {
          $('SECTION.places').empty();
          data.forEach(place => {
            $('SECTION.places').append(`<article>
              <div class="title">
                <h2>${place.name}</h2>
                <div class="price_by_night">${place.price_by_night}</div>
              </div>
              <div class="information">
                <div class="max_guest">
                  <i class="fa fa-users fa-3x" aria-hidden="true"></i><br>
                  ${place.max_guest} Guests
                </div>
                <div class="number_rooms">
                  <i class="fa fa-bed fa-3x" aria-hidden="true"></i><br>
                  ${place.number_rooms} Bedrooms
                </div>
                <div class="number_bathrooms">
                  <i class="fa fa-bath fa-3x" aria-hidden="true"></i><br>
                  ${place.number_bathrooms} Bathrooms
                </div>
              </div>
              <div class="description">
                ${place.description}
              </div>
            </article>`);
          });
        }
      });
    });
  });
  