let age;
let savedLocation;

function showMainInp(event) {
  $(".details").removeClass("hidden");
  var selectedVal = event.target.options[event.target.selectedIndex].value;
  age = selectedVal;
  if (selectedVal == "adult") {
    // hide child details
    $(".child-attr").addClass("hidden");
    // Remove child input value
    $(".child-attr input").removeAttr("value");

    // show adult details
    $(".default-attr").removeClass("hidden");
  } else {
    // hide adult details
    $(".default-attr").addClass("hidden");
    // Remove adult input value
    $(".default-attr input").removeAttr("value");

    // show child details
    $(".child-attr").removeClass("hidden");
  }
  $(".general-attr").removeClass("hidden");

  if (savedLocation) {
    adjustSchedule(savedLocation);
  }
}

// different location different schedule timing
function handleLoct(event) {
  savedLocation = event.target.options[event.target.selectedIndex].value;

  adjustSchedule(savedLocation);
}

function adjustSchedule(location) {
  // Reset schedule
  $(".arc-attr")
    .addClass("hidden")
    .find("select .default")
    .prop("selected", true)
    .addClass("hidden");

  $(".stpy-attr")
    .addClass("hidden")
    .find("select .default")
    .prop("selected", true)
    .addClass("hidden");

  $(".rv-attr")
    .addClass("hidden")
    .find("select .default")
    .prop("selected", true)
    .addClass("hidden");

  location = location + "-attr";

  // Show section
  $("." + location).removeClass("hidden");

  // Hide all options
  $("." + location + " select option").addClass("hidden");

  // show based on age
  console.log(
    "." + location + " select option" + "." + (age == "adult" ? "ad" : age)
  );
  $(
    "." + location + " select option" + "." + (age == "adult" ? "ad" : age)
  ).removeClass("hidden");
}

// Show submit button
function showSubmit() {
  $(".submitBtn").removeClass("hidden");
}
