//Set constants to retrieve values
const personTrial = document.querySelector("#personTrial");
const meAttr = document.getElementsByClassName("me-attr");
const childAttr = document.getElementsByClassName("child-attr");
const generalAttr = document.getElementsByClassName("general-attr");
const locationTrial = document.getElementById("location");

const arcAttr = document.querySelector(".arc-attr");
const arcSch = document.getElementById("arc-schedule");
const arctt = document.getElementsByClassName("arctots");
const arccj = document.getElementsByClassName("arccj");
const arccs = document.getElementsByClassName("arccs");
const arcad = document.getElementsByClassName("arcad");

const stpyAttr = document.querySelector(".stpy-attr");
const stpySch = document.getElementById("stpy-schedule");
const stpytt = document.getElementsByClassName("stpytots");
const stpycj = document.getElementsByClassName("stpycj");
const stpycs = document.getElementsByClassName("stpycs");
const stpyad = document.getElementsByClassName("stpyad");

const rvAttr = document.querySelector(".rv-attr");
const rvSch = document.getElementById("rv-schedule");
const rvtt = document.getElementsByClassName("rvtots");
const rvcj = document.getElementsByClassName("rvcj");
const rvcs = document.getElementsByClassName("rvcs");
const rvad = document.getElementsByClassName("rvad");

const submitBtn = document.querySelector(".submitBtn");

//On select, remove/add hidden class based on what is displayed
personTrial.addEventListener("change", (event) => {
  //For loop needed as there is multiple of the same attr
  Array.from(meAttr).forEach((meAttrElement) => {
    meAttrElement.classList.add("hidden");
  });

  Array.from(childAttr).forEach((childAttr) => {
    childAttr.classList.add("hidden");
  });

  Array.from(generalAttr).forEach((generalAttr) => {
    generalAttr.classList.add("hidden");
  });

  arcAttr.classList.add("hidden");
  stpyAttr.classList.add("hidden");
  rvAttr.classList.add("hidden");

  //User selects themselves as person
  if (event.target.value === "adult") {
    Array.from(meAttr).forEach((meAttr) => {
      meAttr.classList.remove("hidden");
    });

    Array.from(generalAttr).forEach((generalAttr) => {
      generalAttr.classList.remove("hidden");
    });

    Array.from(childAttr).forEach((childAttr) => {
      childAttr.classList.add("hidden");
    });
  } else {
    //user selects for tt/cj/cs
    Array.from(meAttr).forEach((meAttr) => {
      meAttr.classList.add("hidden");
    });

    Array.from(generalAttr).forEach((generalAttr) => {
      generalAttr.classList.remove("hidden");
    });

    Array.from(childAttr).forEach((childAttr) => {
      childAttr.classList.remove("hidden");
    });
  }
});

//On select, change to different location outlet
locationTrial.addEventListener("change", (event) => {
  $("#arc-schedule option").addClass("hidden");
  $("#stpy-schedule option").addClass("hidden");
  $("#rv-schedule option").addClass("hidden");

  //
  if (event.target.value === "arc") {
    arcAttr.classList.remove("hidden");
    arcSch.removeAttribute("disabled");

    stpyAttr.classList.add("hidden");
    stpySch.setAttribute("disabled", true);

    rvAttr.classList.add("hidden");
    rvSch.setAttribute("disabled", true);

    //Get value of target id to display tots/cj/cs based on user's input
    var targetpersonTrial = target.options[target.selectedIndex].value;
    if (targetpersonTrial === "tots") {
      //Since there are many of this element, get from array and remove hidden class
      Array.from(arctt).forEach((option) => {
        option.classList.remove("hidden");
      });
    } else if (targetpersonTrial === "cj") {
      Array.from(arccj).forEach((option) => {
        option.classList.remove("hidden");
      });
    } else if (targetpersonTrial === "cs") {
      Array.from(arccs).forEach((option) => {
        option.classList.remove("hidden");
      });
    } else {
      Array.from(arcad).forEach((option) => {
        option.classList.remove("hidden");
      });
    }

    //
  } else if (event.target.value === "stpy") {
    arcAttr.classList.add("hidden");
    arcSch.setAttribute("disabled", true);

    stpyAttr.classList.remove("hidden");
    stpySch.removeAttribute("disabled");

    rvAttr.classList.add("hidden");
    rvSch.setAttribute("disabled", true);

    //Get value of target id to display tots/cj/cs based on user's input
    var targetpersonTrial = target.options[target.selectedIndex].value;
    if (targetpersonTrial === "tots") {
      //Since there are many of this element, get from array and remove hidden class
      Array.from(stpytt).forEach((option) => {
        option.classList.remove("hidden");
      });
    } else if (targetpersonTrial === "cj") {
      Array.from(stpycj).forEach((option) => {
        option.classList.remove("hidden");
      });
    } else if (targetpersonTrial === "cs") {
      Array.from(stpycs).forEach((option) => {
        option.classList.remove("hidden");
      });
    } else {
      Array.from(stpyad).forEach((option) => {
        option.classList.remove("hidden");
      });
    }
    //
  } else if (event.target.value === "rv") {
    arcAttr.classList.add("hidden");
    arcSch.setAttribute("disabled", true);

    stpyAttr.classList.add("hidden");
    stpySch.setAttribute("disabled", true);

    rvAttr.classList.remove("hidden");
    rvSch.removeAttribute("disabled");
    //Get value of target id to display tots/cj/cs based on user's input
    var targetpersonTrial = target.options[target.selectedIndex].value;
    if (targetpersonTrial === "tots") {
      //Since there are many of this element, get from array and remove hidden class
      Array.from(rvtt).forEach((option) => {
        option.classList.remove("hidden");
      });
    } else if (targetpersonTrial === "cj") {
      Array.from(rvcj).forEach((option) => {
        option.classList.remove("hidden");
      });
    } else if (targetpersonTrial === "cs") {
      Array.from(rvcs).forEach((option) => {
        option.classList.remove("hidden");
      });
    } else {
      Array.from(rvad).forEach((option) => {
        option.classList.remove("hidden");
      });
    }
  }
});

arcSch.addEventListener("change", (event) => {
  //gets option's class name and display accordingly
  var targetclassList =
    event.target.options[event.target.selectedIndex].classList;
  if (
    targetclassList.contains("arctots") === true ||
    targetclassList.contains("arccj") === true ||
    targetclassList.contains("arccs") === true ||
    targetclassList.contains("arcad") === true
  ) {
    arcAttr.classList.remove("hidden");
    stpyAttr.classList.add("hidden");
    rvAttr.classList.add("hidden");
    submitBtn.classList.remove("hidden");
  }
});

stpySch.addEventListener("change", (event) => {
  //gets option's class name and display accordingly
  var targetclassList =
    event.target.options[event.target.selectedIndex].classList;
  if (
    targetclassList.contains("stpytots") === true ||
    targetclassList.contains("stpycj") === true ||
    targetclassList.contains("stpycs") === true ||
    targetclassList.contains("stpyad") === true
  ) {
    arcAttr.classList.add("hidden");
    stpyAttr.classList.remove("hidden");
    rvAttr.classList.add("hidden");
    submitBtn.classList.remove("hidden");
  }
});

rvSch.addEventListener("change", (event) => {
  //gets option's class name and display accordingly
  var targetclassList =
    event.target.options[event.target.selectedIndex].classList;
  if (
    targetclassList.contains("rvtots") === true ||
    targetclassList.contains("rvcj") === true ||
    targetclassList.contains("rvcs") === true ||
    targetclassList.contains("rvad") === true
  ) {
    arcAttr.classList.add("hidden");
    stpyAttr.classList.add("hidden");
    rvAttr.classList.remove("hidden");
    submitBtn.classList.remove("hidden");
  }
});
