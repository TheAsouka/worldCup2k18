//console.log(json_obj);

var txt = "";
var roundArray = ["round_16","round_8","round_4","round_2"]; // Tant pis pour la 3rd Place c'est chiant, l'API fournit pas les loser des matchs donc flemme
var matchesArray = [];

for (var j = 0; j < roundArray.length; j++){
    for (var i = 0; i < eval("json_obj.knockout." + roundArray[j] + ".matches.length"); i++){

        var idMatch = eval("json_obj.knockout." + roundArray[j] + ".matches[i].name");
        var matchWinner = eval("json_obj.knockout." + roundArray[j] + ".matches[i].winner");
        var matchToPush = {
            "id":idMatch,
            "winner":matchWinner
        };
    matchesArray.push(matchToPush);
    }
}
//console.log(matchesArray);


for (var j = 0; j < roundArray.length; j++){

    txt += "<tr><th>" + eval("json_obj.knockout." + roundArray[j] + ".name") + "</th></tr>";
    txt += "<tr> <th>Date</th> <th>Home</th> <th>Score</th> <th>Away</th> </tr>";

    for (var i = 0; i < eval("json_obj.knockout." + roundArray[j] + ".matches.length"); i++){

        var dateForm = new Date(eval("json_obj.knockout." + roundArray[j] + ".matches[i].date"));
        var date = dateForm.toLocaleString();

        var idHome = eval("json_obj.knockout." + roundArray[j] + ".matches[i].home_team");
        var idAway = eval("json_obj.knockout." + roundArray[j] + ".matches[i].away_team");

        var searchHome = matchesArray.find(function (element) { if (idHome == element.id){return element;}});
        var searchAway = matchesArray.find(function (element) { if (idAway == element.id){ return element;}});

        
        txt += "<tr><td>" + date + "</td>";
       
        if (Number.isInteger(idHome) && idHome < teamsArray.length){ // Si l'equipe n'est pas encore défini (winner_c)
            txt += "<td>" + teamsArray[idHome].name + "</td>";
        }
        else if (Number.isInteger(idHome) && idHome > 48){ // Premier match bracket 49
            txt += "<td>" + "Winner of match " + searchHome.id + " " + searchHome.winner + "</td>"; // Probleme pour la 3rd place, mais osef des losers
        }
        else{
            txt += "<td>" + idHome + "</td>";
        }

        txt += "<td>" + eval("json_obj.knockout." + roundArray[j] + ".matches[i].home_result") + " - " + eval("json_obj.knockout." + roundArray[j] + ".matches[i].away_result") + "</td>";

        if (Number.isInteger(idAway) && idAway < teamsArray.length){
            txt += "<td>" + teamsArray[idAway].name + "</td></tr>";
        }
        else if (Number.isInteger(idAway) && idAway > 48){
            txt += "<td>" + "Winner of match " + searchAway.id + " " + searchAway.winner + "</td>";
        }
        else{
            txt += "<td>" + idAway + "</td></tr>";
        }
    }   
}

document.getElementById("outputF").innerHTML = txt;