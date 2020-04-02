//Helpers: --------------------------
//find the max index in an array
function indexOfMax(arr) {
  if (arr.length === 0) {
    return -1;
  }

  var max = arr[0];
  var maxIndex = 0;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      maxIndex = i;
      max = arr[i];
    }
  }
  return maxIndex;
}

//find the min index in an array
function indexOfMin(arr) {
  if (arr.length === 0) {
    return -1;
  }

  var min = arr[0];
  var minIndex = 0;

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      minIndex = i;
      min = arr[i];
    }
  }
  return minIndex;
}

function updateAnimates() {
  var win = $(window);
  var allMods = $(".to-animate");
  let el;
  allMods.each(function(i, el) {
    el = $(el);
    el.isInViewport(function(status) {
      if (status == 'entered') {
        if (el.attr("data-anime") == "fade-top") {
          el.addClass("fade-in-top");
        } else if (el.attr("data-anime") == "fade-bottom") {
          el.addClass("fade-in-bottom");
        } else if (el.attr("data-anime") == "fade-left") {
          el.addClass("fade-in-left");
        } else if (el.attr("data-anime") == "fade-right") {
          el.addClass("fade-in-right");
        } else if (el.attr("data-anime") == "tracking-in-expand") {
          el.addClass("tracking-in-expand");
        } else if (el.attr("data-anime") == "scale-in") {
          el.addClass("scale-in-center");
          setTimeout(function(){
            el.addClass('vibrate');
            el.css('animation-duration', Math.random() * 2 + 2);
          }, Math.random() * 3500 + 500);
        } else if (el.attr("data-anime") == "odo") {
          el.text(el.attr("data-number"));
        } else if (el.attr("data-anime") == "chart") {

        }

        el.removeClass("to-animate");
      }
    });
  });
}

//doc start scripting
$(document).ready(function() {
  // This prevents the page from scrolling down to where it was previously.
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  updateAnimates();

});
