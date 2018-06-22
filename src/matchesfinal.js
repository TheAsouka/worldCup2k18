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

        txt += "<tr><td>" + date + "</td>";
        txt += "<td>" + eval("json_obj.knockout." + roundArray[j] + ".matches[i].home_team") + "</td>";
        txt += "<td>" + eval("json_obj.knockout." + roundArray[j] + ".matches[i].home_result") + " - " + json_obj.knockout.round_16.matches[i].away_result + "</td>";
        txt += "<td>" + eval("json_obj.knockout." + roundArray[j] + ".matches[i].away_team") + "</td></tr>";
    }
}



document.getElementById("outputF").innerHTML = txt;