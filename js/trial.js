let age;
let savedLocation;

let data = {
  arc: {
    tots: ["arc tots"],
    cj: ["arc cj"],
    cs: ["arc cs"],
    adult: ["arc ad"],
  },
  stpy: {
    tots: ["stpy tots"],
    cj: ["stpy cj"],
    cs: ["stpy cs"],
    adult: ["stpy ad"],
  },
  rv: {
    tots: ["rv tots"],
    cj: ["rv cj"],
    cs: ["rv cs"],
    adult: ["rv ad"],
  },
};

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
  // show based on age
  data[location][age].forEach((option) => {
    $("." + tempLocation + " select").append("<option>" + option + "</option>");
  });
}

// Show submit button
function showSubmit() {
  $(".submitBtn").removeClass("hidden");
}
