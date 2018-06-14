console.log(json_obj);

var txt = "";
var y = 0;

var matchsArray = [];

txt += "<tr><th>Group " + letters[y].toUpperCase() + "</tr></th>";
txt += "<tr> <th>Date</th> <th>Home</th> <th>Score</th> <th>Away</th> </tr>";


console.log()

for (var i = 0; i < 6; i++) {

    var dateForm = new Date(eval("json_obj.groups."+letters[y]+".matches["+i+"].date"));
    var date = dateForm.toLocaleString();

    var match = {
        "date": date.substring(0,10),
        "hour": date.substring(13,18),
        "home_team": teamsArray[eval("json_obj.groups."+letters[y]+".matches["+i+"].home_team")].name,
        "home_flag": teamsArray[eval("json_obj.groups."+letters[y]+".matches["+i+"].home_team")].flag,
        "home_result": eval("json_obj.groups."+letters[y]+".matches["+i+"].home_result"),
        "away_team": teamsArray[eval("json_obj.groups."+letters[y]+".matches["+i+"].away_team")].name,
        "away_flag": teamsArray[eval("json_obj.groups."+letters[y]+".matches["+i+"].away_team")].flag,
        "away_result": eval("json_obj.groups."+letters[y]+".matches["+i+"].away_result")
    }

    matchsArray.push(match);


/*  txt += "<tr><td>" + dateForm.toLocaleString() + "</td>"; // eval c'est le mal

    txt += "<td>"+ teamsArray[eval("json_obj.groups."+letters[y]+".matches["+i+"].home_team")].flag + " ";
    txt += teamsArray[eval("json_obj.groups."+letters[y]+".matches["+i+"].home_team")].name + "</td>";

    txt += "<td>" + eval("json_obj.groups."+letters[y]+".matches["+i+"].home_result") + " - ";
    txt += eval("json_obj.groups."+letters[y]+".matches["+i+"].away_result") + "</td>";

    txt += "<td>" + teamsArray[eval("json_obj.groups."+letters[y]+".matches["+i+"].away_team")].flag + " ";
    txt += teamsArray[eval("json_obj.groups."+letters[y]+".matches["+i+"].away_team")].name + "</td>";
    txt += "</tr>"; */

    if(i == 5 && y < 7){
        y += 1;
        i = 0;
        txt += "<tr><th>Group " + letters[y].toUpperCase() + "</tr></th>";
        txt += "<tr> <th>Date</th> <th>Home</th> <th>Score</th> <th>Away</th> </tr>";
    } 
}
matchsArray.sort();
console.log(matchsArray);

function estDate(match) {
    return match.date === "15/06/2018";
}
console.log(matchsArray.find(estDate)); // trouver des objects en fonction de leur date , dans le but de lister les matchs en fonction

document.getElementById("outputM").innerHTML = txt;
