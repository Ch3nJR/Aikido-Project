let age;
let savedLocation;

function showMainInp(event) {
  console.log("showMainInp function entered");
  $(".text-append-niggeR").append("<p>showMainInp function entered</p>");

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

  console.log("showMainInp function ended");
  $(".text-append-niggeR").append("<p>showMainInp function ended</p>");
}

// different location different schedule timing
function handleLoct(event) {
  console.log("handleLoct function entered");
  $(".text-append-niggeR").append("<p>handleLoct function entered</p>");

  savedLocation = event.target.options[event.target.selectedIndex].value;

  adjustSchedule(savedLocation);

  console.log("handleLoct function ended");
  $(".text-append-niggeR").append("<p>handleLoct function ended</p>");
}

function adjustSchedule(location) {
  console.log("show adjustSchedule function entered");
  $(".text-append-niggeR").append(
    "<p>show adjustSchedule function entered</p>"
  );

  // Reset schedule
  $(".arc-attr")
    .addClass("hidden")
    .find("select .default")
    .prop("selected", true);

  $(".stpy-attr")
    .addClass("hidden")
    .find("select .default")
    .prop("selected", true);

  $(".rv-attr")
    .addClass("hidden")
    .find("select .default")
    .prop("selected", true);

  location = location + "-attr";

  // Show section
  $("." + location).removeClass("hidden");

  // Hide all options
  $("." + location + " select option").addClass("hidden");

  // show based on age
  console.log(
    "." + location + " select option" + "." + (age == "adult" ? "ad" : age)
  );

  let tempAge;
  if (age == "adult") {
    tempAge = "ad";
  } else {
    tempAge = age;
  }
  $(".text-append-niggeR").append(
    "<p>" + "." + location + " select option" + "." + tempAge + "</p>"
  );

  $("." + location + " select option" + "." + tempAge).removeClass("hidden");

  console.log("show adjustSchedule function ended");
  $(".text-append-niggeR").append("<p>show adjustSchedule function ended</p>");
}

// Show submit button
function showSubmit() {
  console.log("show submit button entered");
  $(".text-append-niggeR").append("<p>show submit button function ended</p>");

  $(".submitBtn").removeClass("hidden");
  console.log("show submit button ended");
  $(".text-append-niggeR").append("<p>show submit button function ended</p>");
}
