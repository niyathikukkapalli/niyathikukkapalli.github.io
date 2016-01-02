'use strict';

var images = [];
var index = 0;

function renderImages() {
  for (var i = 0; i < images.length; i++) {
    var entry = images[i];
    var src = entry.src;

    $('#app').addClass('grid');
    $('#app').append('<img class="grid-item" src="' + src + '"/>');

    $('.grid-item').click(displaySlideshow);
  }
}

function findIndex(src) {
  for (var i = 0; i < images.length; i++) {
    var entry = images[i];
    if (src === entry.src) {
      return i;
    }
  }

  return 0;
}

function renderSlideshowImage() {
  var entry = images[index];
  var src = entry.src;
  var description = entry.description;

  $('#app').append('<img class="slideshow-image" src="' + src + '"/>');
  $('#app').append('<h2 class="title">' + description + '</h2>');
  $('#app .slideshow-image').click(showNextImage);
}

function destroySlideshowImage() {
  $('#app .slideshow-image').remove();
  $('#app .title').remove();
}

function showPreviousImage() {
  if (index > 0) {
    index--;
  } else {
    index = images.length - 1;
  }

  destroySlideshowImage();
  renderSlideshowImage();
}

function showNextImage() {
  if (index < images.length - 1) {
    index++;
  } else {
    index = 0;
  }

  destroySlideshowImage();
  renderSlideshowImage();
}

function displaySlideshow(event) {
  $('#app').empty();
  $('#app').removeClass('grid');

  var src = $(event.target).attr('src');
  index = findIndex(src);
  
  $('#app').append('<a class="prev">Prev</a>');
  $('#app').append('<a class="next">Next</a>');
  renderSlideshowImage(index);
  $('.next').click(showNextImage);
  $('.prev').click(showPreviousImage);
}

$('document').ready(function() {
  $.ajax({
    url: 'images.json',
    dataType: 'json',
    success: function(data) {
      images = data;
      renderImages();
    },
    error: console.error
  });
});
