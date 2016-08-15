
$(document).ready(function() {
  $("form#niches").submit(function(event) {
    event.preventDefault();
    var faveNiche = [];
    var niche1 = $("#niche").val();
    var niche2 = $("#niche2").val();
    var niche3 = $("#niche3").val();
    var niche4 = $("#niche4").val();
    var niche5 = $("#niche5").val();
    var niche6 = $("#niche6").val();

    faveNiche.push(niche1, niche2, niche3, niche4, niche5, niche6);
    console.log(faveNiche);

    var results = "<ol class='list-group-item'>";

    for (var i = 0; i < faveNiche.length; i++) {
      results += "<li>" + faveNiche[i] + "</li>";
    }
    results += "</ol>";

    $(".nerd-input").html("");
    $(".nerd-input").append(results);

    loggedNiche = faveNiche.slice(0,3);

    results2 ="<ol class='list-group-item'>";

    for (var i = 0; i < loggedNiche.length; i++) {
      results2 += "<li>" + loggedNiche[i] + "</li>";
    }
    results2 += "</ol>";

    $(".nerd-input2").html("");
    $(".nerd-input2").append(results2);

  });
}); // end ready
