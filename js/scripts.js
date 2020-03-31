$(document).ready(function(){
  $("form#formOne").submit(function(event) {



    var negative = [];
    var symptoms = [];
    var skills = [];

    negative = $("input:checkbox[name=negative]:checked").length;
    console.log(negative);
    symptoms = $("input:checkbox[name=symptoms]:checked").length;
    console.log(symptoms);
    skills = $("input:checkbox[name=copingSkills]:checked").length;
    console.log(skills);
    // $("input:checkbox[name=negative]:checked").each(function() {
    //   var negativeStress = $(this).val().append();
    // })
    


    // $("input:checkbox[name=symptoms]:checked").each(function() {
    //   var symptomsStress = $(this).val().append();
    // })
    


    // $("input:checbox[name=copingSkills]:checked").each(function() {
    //   var copingSkills = $(this).val().append();
    // })
   

  })
 
})