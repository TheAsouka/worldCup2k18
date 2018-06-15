console.log(json_obj);

var txt = "";
var y = 0;

var matchsArray = [];

//txt += "<tr><th>Group " + letters[y].toUpperCase() + "</tr></th>";
//txt += "<tr> <th>Date</th> <th>Home</th> <th>Score</th> <th>Away</th> </tr>";


console.log()

for (var i = 0; i < 6; i++) {

    if(i == 5 && y < 7){
        y += 1;
        i = 0;
        //txt += "<tr><th>Group " + letters[y].toUpperCase() + "</tr></th>";
        //txt += "<tr> <th>Date</th> <th>Home</th> <th>Score</th> <th>Away</th> </tr>";
    } 

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

}

matchsArray.sort();
//array.sortBy(function(o){ return o.date });
console.log(matchsArray);

//var i_day = 15;
//var date = i_day.toString() + "/06/2018";


function estDate(match) {
    if (match.date == date) {
        hour = match.hour;
        console.log(hour);
    }
}

for (var i = 0; i < matchsArray.length; i++){
    console.log("ahah"+matchsArray[i].hour);
}

for (var i_day = 14; i_day < 29; i_day++){
    var date = i_day.toString() + "/06/2018";
    matchsArray.find(estDate);
    //console.log(date);
    //console.log(matchsArray.find(estDate));

    txt += "<tr><th>" + date + "</tr></th>";
    txt += "<tr> <th>Hour</th> <th>Home</th> <th>Score</th> <th>Away</th> </tr>";
    txt += "<tr> <td>"+ hour + "</td>"
    txt += "<td>"+ matchsArray.home_team + "</td></tr>"
}





 // trouver des objects en fonction de leur date , dans le but de lister les matchs en fonction

document.getElementById("outputM").innerHTML = txt;
