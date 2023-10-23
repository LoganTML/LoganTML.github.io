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