/* global $ */
$(document).ready(function () {
  // Initialize an empty object to store amenity IDs and names
  const amenities = {};

  // Listen for changes on each checkbox
  $('input[type="checkbox"]').change(function () {
    // Get the ID and name of the current amenity
    const amenityID = $(this).attr('data-id');
    const amenityName = $(this).attr('data-name');

    // If the checkbox is checked, add the amenity to the amenities object
    if ($(this).is(':checked')) {
      amenities[amenityID] = amenityName;
    } else { // If the checkbox is unchecked, remove the amenity from the amenities object
      delete amenities[amenityID];
    }

    // Update the text inside the h4 tag with the list of selected amenities
    $('.amenities h4').text(Object.values(amenities).join(', '));
  });
});
