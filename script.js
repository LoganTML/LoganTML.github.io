// My functions to have the school and class info display only on click

function showCourseDescription(courseId) {
  var course = document.getElementById(courseId);
  var allCourses = document.getElementsByClassName("course-description");
  
  // if course display is block, change it to none and return
  if (course.style.display === "block") {
    course.style.display = "none";
    return;
  }

  for (var i = 0; i < allCourses.length; i++) {
      allCourses[i].style.display = "none";
  }
  


  course.style.display = "block";
}

function showSchoolDescription(schoolId) {
  var school = document.getElementById(schoolId);
  var allSchools = document.getElementsByClassName("school-list");
  
  // if course display is block, change it to none and return
  if (school.style.display === "block") {
    school.style.display = "none";
    return;
  }

  for (var i = 0; i < allSchools.length; i++) {
      allSchools[i].style.display = "none";
  }

  school.style.display = "block";
}

function showDepartmentClasses(deptId, uvic_bool, mcgill_bool) {
  var allDepts = document.getElementsByClassName('course-list');

  for (var i = 0; i < allDepts.length; i++) {

    // Make each element visible if it contains the selected class
    cur_classes = allDepts[i].classList;
    is_topic = 0;
    is_uvic = 0;
    is_mcgill = 0;
    for (var j = 0; j < cur_classes.length; j++) {
      if (deptId == cur_classes[j]) {
        is_topic = 1;
      } else if (cur_classes[j] == "uvic") {
        is_uvic = 1;
      } else if (cur_classes[j] == "mcgill") {
        is_mcgill = 1;
      }
    }
    if (is_topic == 0 || (is_uvic && !uvic_bool) || (is_mcgill && !mcgill_bool)) {
      allDepts[i].style.display = "none";
    } else {
      allDepts[i].style.display = "block";
    }
  }

}

function selectDept() {
  var uvicCheckbox = document.getElementById("uvic-checkbox");
  var mcgillCheckbox = document.getElementById("mcgill-checkbox");
  var courseTopic = document.getElementById("course-topic");

  var uvic_bool = uvicCheckbox.checked;
  var mcgill_bool = mcgillCheckbox.checked;

  var deptId = courseTopic.value;

  showDepartmentClasses(deptId, uvic_bool, mcgill_bool)

}