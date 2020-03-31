$(document).ready(function(){
  $("form#formOne").submit(function(event) {

    event.preventDefault();

    $("#result1").hide();
    $("#result2").hide();
    $("#result3").hide();

    var negative = $("input:checkbox[name=negative]:checked").length;
    var symptoms = $("input:checkbox[name=symptoms]:checked").length;
    var skills = $("input:checkbox[name=copingSkills]:checked").length;

    console.log(negative); // makes sure that negative is actually counting
    console.log(symptoms); // makes sure that symptoms is actually counting
    console.log(skills); // makes sure that skills is actually counting

    // if person has more than 6 negative things, more than 3 symptoms, 
    // and less than or equal to 3 coping skills we tell them they need help
    if (negative > 6 && symptoms > 3 && skills <= 3) { 
      $(".result1").show(); 
    // else if the person has less than 6 but more than 1 negative, less than 3 but more than 1 symptom, and more than 3 but less than 8 skills
    } else if ((negative <= 6 && negative > 1) && (symptoms <= 3 && symptoms > 1) && (skills > 3 && skills < 8)) {
      $(".result2").show();
    } else {
      $(".result3").show();
    }
    

  });
 
});