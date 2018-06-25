console.log(json_obj);

var txt = "";
var roundArray = ["round_16","round_8","round_4","round_2_loser","round_2"];
var roundArrayB = ["Round of 16","Quarter-finals","Semi-finals","Third place play-off","Final !"]


for (var j = 0; j < roundArray.length; j++){
    txt += "<tr><th>" + roundArrayB[j]+ "</th></tr>";
    txt += "<tr> <th>Date</th> <th>Home</th> <th>Score</th> <th>Away</th> </tr>";
    for (var i = 0; i < eval("json_obj.knockout." + roundArray[j] + ".matches.length"); i++){

        var dateForm = new Date(eval("json_obj.knockout." + roundArray[j] + ".matches[i].date"));
        var date = dateForm.toLocaleString();
        var idHome = eval("json_obj.knockout." + roundArray[j] + ".matches[i].home_team");
        var idAway = eval("json_obj.knockout." + roundArray[j] + ".matches[i].away_team");

        var eMatches = eval("json_obj.knockout." + roundArray[j] + ".matches")


        txt += "<tr><td>" + date + "</td>";
        
        
        if (Number.isInteger(idHome) && idHome < teamsArray.length){ // Si l'equipe n'est pas encore défini (winner_c)
            txt += "<td>" + teamsArray[idHome].name + "</td>";
        }
        else{
            txt += "<td>" + idHome + "</td>";
        }

        txt += "<td>" + eval("json_obj.knockout." + roundArray[j] + ".matches[i].home_result") + " - " + eval("json_obj.knockout." + roundArray[j] + ".matches[i].away_result") + "</td>";

        if (Number.isInteger(idAway) && idAway < teamsArray.length){
            txt += "<td>" + teamsArray[idAway].name + "</td></tr>";
        }
        else{
            txt += "<td>" + idAway + "</td></tr>";
        }

        // &&&&&&&&&&&&&&&&&&&&&&& problem
        var isWinner = eMatches.find(function(element) {
            return element;
          });
        console.log(isWinner.name + " isWinner.name");
        console.log(idHome + " idhome")
        // UNIQUEMENT APRES LES 8EME

    }
}

document.getElementById("outputF").innerHTML = txt;