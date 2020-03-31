$(document).ready(function(){

  $("#restartButton").hide();
  $("#result1").hide();
  $("#result2").hide();
  $("#result3").hide();

  $("form#formOne").submit(function(event) {
    event.preventDefault();
    $("#formOne").hide();
    $("#restartButton").click(function() {
        location.reload();
    });

    $("#restartButton").show();
    var negative = $("input:checkbox[name=negative]:checked").length;
    var symptoms = $("input:checkbox[name=symptoms]:checked").length;
    var skills = $("input:checkbox[name=copingSkills]:checked").length;

    if (negative > 6 && symptoms > 3 && skills <= 3) { 
      $(".result1").show(); 
    } else if ((negative <= 6 && negative > 1) && (symptoms <= 3 && symptoms > 1) && (skills > 3 && skills < 8)) {
      $(".result2").show();
    } else {
      $(".result3").show();
    }
  });
 });