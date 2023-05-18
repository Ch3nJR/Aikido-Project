let age;
let savedLocation;

let data = {
  arc: {
    tots: ["arc tots"],
    cj: ["arc cj"],
    cs: ["arc cs"],
    ad: ["arc ad"],
  },
  stpy: {
    tots: ["stpy tots"],
    cj: ["stpy cj"],
    cs: ["stpy cs"],
    ad: ["stpy ad"],
  },
  rv: {
    tots: ["rv tots"],
    cj: ["rv cj"],
    cs: ["rv cs"],
    ad: ["rv ad"],
  },
};

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

  tempLocation = location + "-attr";

  // Reset schedule
  $(".schedule-select").addClass("hidden");
  $("." + tempLocation)
    .addClass("hidden")
    .find("option")
    .remove();
  $("." + tempLocation + " select").append(
    '<option selected disabled class="default">Select An Option</option>'
  );

  // Show section
  $("." + tempLocation).removeClass("hidden");
  console.log(location);
  console.log(age);

  // show based on age
  data[location][age].forEach((option) => {
    console.log(option);
    $("." + tempLocation + " select").append("<option>" + option + "</option>");
  });

  console.log("show adjustSchedule function ended");
  $(".text-append-niggeR").append("<p>show adjustSchedule function ended</p>");
}

// Show submit button
function showSubmit() {
  console.log("show submit button entered");
  $(".text-append-niggeR").append("<p>show submit button function ended</p>");

  $(".submitBtn").removeClass("hidden");
  console.log("show submit button ended");
  $(".text-append-niggeR").append("<p>show submit button function ended</p>");
}
