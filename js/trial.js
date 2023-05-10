//Set constants to retrieve values
const personTrial = document.querySelector("#personTrial");
const meAttr = document.getElementsByClassName("me-attr");
const childAttr = document.getElementsByClassName("child-attr");
const generalAttr = document.getElementsByClassName("general-attr");
const locationTrial = document.getElementById("location");

const arcAttr = document.querySelector(".arc-attr");
const arcSch = document.getElementById("arc-schedule");

const stpyAttr = document.querySelector(".stpy-attr");
const stpySch = document.getElementById("stpy-schedule");

const rvAttr = document.querySelector(".rv-attr");
const rvSch = document.getElementById("rv-schedule");

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
  if (event.target.value === "myself") {
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
    //user selects for child
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
  if (event.target.value === "arc") {
    arcAttr.classList.remove("hidden");
    arcSch.removeAttribute("disabled");

    stpyAttr.classList.add("hidden");
    stpySch.setAttribute("disabled", true);

    rvAttr.classList.add("hidden");
    rvSch.setAttribute("disabled", true);

    submitBtn.classList.remove("hidden");
  } else if (event.target.value === "stpy") {
    arcAttr.classList.add("hidden");
    arcSch.setAttribute("disabled", true);

    stpyAttr.classList.remove("hidden");
    stpySch.removeAttribute("disabled");

    rvAttr.classList.add("hidden");
    rvSch.setAttribute("disabled", true);

    submitBtn.classList.remove("hidden");
  } else if (event.target.value === "rv") {
    arcAttr.classList.add("hidden");
    arcSch.setAttribute("disabled", true);

    stpyAttr.classList.add("hidden");
    stpySch.setAttribute("disabled", true);

    rvAttr.classList.remove("hidden");
    rvSch.removeAttribute("disabled");

    submitBtn.classList.remove("hidden");
  }
});

arcSch.addEventListener("change", (event) => {
  if (
    event.target.id === "arc1" ||
    event.target.id === "arc2" ||
    event.target.id === "arc3"
  ) {
    arcAttr.classList.remove("hidden");
    stpyAttr.classList.add("hidden");
    rvAttr.classList.add("hidden");
    submitBtn.classList.remove("hidden");
  }
});

stpySch.addEventListener("change", (event) => {
  if (
    event.target.id === "stpy1" ||
    event.target.id === "stpy2" ||
    event.target.id === "stpy3"
  ) {
    arcAttr.classList.add("hidden");
    stpyAttr.classList.remove("hidden");
    rvAttr.classList.add("hidden");
    submitBtn.classList.remove("hidden");
  }
});

rvSch.addEventListener("change", (event) => {
  if (
    event.target.id === "rv1" ||
    event.target.id === "rv2" ||
    event.target.id === "rv3"
  ) {
    arcAttr.classList.add("hidden");
    stpyAttr.classList.add("hidden");
    rvAttr.classList.remove("hidden");
    submitBtn.classList.remove("hidden");
  }
});
