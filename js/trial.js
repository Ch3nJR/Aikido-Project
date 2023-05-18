let age;
let savedLocation;

let data = {
  arc: {
    tots: ["Wednesday 5pm", "Thursday 4pm", "Saturday 9am", "Saturday 3pm"],
    cj: [
      "Monday 5pm",
      "Tuesday 5pm",
      "Wednesday 4pm",
      "Wednesday 5pm",
      "Thursday 4pm",
      "Thursday 5pm",
      "Friday 4pm",
      "Friday 5pm",
      "Saturday 9am",
      "Saturday 10am",
      "Saturday 11am",
      "Saturday 4pm",
      "Sunday 9am",
      "Sunday 10am",
      "Sunday 2pm",
      "Sunday 4pm",
    ],
    cs: [
      "Monday 5pm",
      "Tuesday 5pm",
      "Wednesday 4pm",
      "Thursday 5pm",
      "Friday 4pm",
      "Friday 5pm",
      "Saturday 10am",
      "Saturday 11am",
      "Saturday 12pm",
      "Saturday 1pm",
      "Saturday 2pm",
      "Saturday 5pm",
      "Saturday 6pm",
      "Sunday 11am",
      "Sunday 2pm",
      "Sunday 3pm",
      "Sunday 4pm",
    ],
    adult: ["Thursday 1215pm", "Saturday 5pm", "Saturday 6pm"],
  },
  stpy: {
    tots: [
      "Monday 5pm",
      "Monday 6pm",
      "Saturday 9am",
      "Saturday 2pm",
      "Sunday 9am",
    ],
    cj: [
      "Monday 5pm",
      "Monday 6pm",
      "Tuesday 3pm",
      "Wednesday 3pm",
      "Thursday 4pm",
      "Friday 5pm",
      "Friday 6pm",
      "Saturday 9am",
      "Saturday 11am",
      "Saturday 1pm",
      "Saturday 2pm",
      "Saturday 5pm",
      "Sunday 9am",
      "Sunday 10am",
      "Sunday 12pm",
      "Sunday 1pm",
      "Sunday 2pm",
      "Sunday 3pm",
    ],
    cs: [
      "Tuesday 3pm",
      "Wednesday 3pm",
      "Thursday 3pm",
      "Friday 5pm",
      "Friday 6pm",
      "Saturday 10am",
      "Saturday 11am",
      "Saturday 1pm",
      "Saturday 3pm",
      "Saturday 6pm",
      "Sunday 10am",
      "Sunday 11am",
      "Sunday 12pm",
      "Sunday 2pm",
      "Sunday 4pm",
    ],
    adult: ["Saturday 8pm"],
  },
  rv: {
    tots: ["Saturday 1pm", "Saturday 4pm", "Sunday 1pm"],
    cj: [
      "Monday 5pm",
      "Monday 6pm",
      "Monday 7pm",
      "Tuesday 7pm",
      "Tuesday 8pm",
      "Wednesday 5pm",
      "Thursday 4pm",
      "Thursday 7pm",
      "Friday 5pm",
      "Saturday 10am",
      "Saturday 11am",
      "Saturday 12pm",
      "Saturday 1pm",
      "Saturday 2pm",
      "Saturday 3pm",
      "Saturday 4pm",
      "Sunday 12pm",
      "Sunday 1pm",
      "Sunday 2pm",
      "Sunday 3pm",
    ],
    cs: [
      "Monday 6pm",
      "Tuesday 7pm",
      "Tuesday 8pm",
      "Wednesday 5pm",
      "Thursday 4pm",
      "Thursday 7pm",
      "Saturday 11am",
      "Saturday 12pm",
      "Saturday 4pm",
      "Sunday 2pm",
      "Sunday 3pm",
    ],
    adult: ["Friday 730pm"],
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
