//console.log(json_obj);

var txt = "";
var y = 0;

var matchsArray = [];

for (var i = 0; i < 6; i++) { // Parcourir un tableau

    if(i == 5 && y < 7){ // Parcourir tout les tableaux
        y += 1; 
        i = 0;
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
}

matchsArray.sort();
//console.log(matchsArray);

for (var i_day = 14; i_day < 29; i_day++){
    var date = i_day.toString() + "/06/2018";
    txt += "<tr><th>" + date + "</tr></th>";
    txt += "<tr> <th>Hour</th> <th>Home</th> <th>Score</th> <th>Away</th> </tr>";

    for (var i = 0; i < matchsArray.length; i++){
        if (matchsArray[i].date == date){

            //match winner of the match with his place in teamsArray
            var indexHome = teamsArray.find(function(element) {if (element.name == matchsArray[i].home_team ){return element;}});
            var indexAway = teamsArray.find(function(element) {if (element.name == matchsArray[i].away_team ){return element;}});

            txt += "<tr> <td>"+ matchsArray[i].hour + "</td>";
            
            if (matchsArray[i].home_result > matchsArray[i].away_result) {
                txt += "<td bgcolor='rgb(118, 212, 99)'>"+ matchsArray[i].home_flag + " " + matchsArray[i].home_team + "</td>";
                txt += "<td>"+ matchsArray[i].home_result + " - " + matchsArray[i].away_result + "</td>";
                txt += "<td bgcolor='#e05555'>"+ matchsArray[i].away_flag + " " + matchsArray[i].away_team + "</td></tr>";

                indexHome.points += 3;
                indexHome.wins += 1;
                indexAway.loses += 1;


            }
            else if(matchsArray[i].away_result > matchsArray[i].home_result){
                txt += "<td bgcolor='#e05555'>"+ matchsArray[i].home_flag + " " + matchsArray[i].home_team + "</td>";
                txt += "<td>"+ matchsArray[i].home_result + " - " + matchsArray[i].away_result + "</td>";
                txt += "<td bgcolor='rgb(118, 212, 99)'>"+ matchsArray[i].away_flag + " " + matchsArray[i].away_team + "</td></tr>";

                indexAway.points += 3; // wtf ? pourquoi toujours decallage ??
                indexAway.wins += 1; // décallage de 1 car teamsArray[0] ne sert a rien, il faudrait faire un [i - 1]
                indexHome.loses += 1;
            }
            else{
                txt += "<td bgcolor='#2b97df'>"+ matchsArray[i].home_flag + " " + matchsArray[i].home_team + "</td>";
                txt += "<td>"+ matchsArray[i].home_result + " - " + matchsArray[i].away_result + "</td>";
                txt += "<td bgcolor='#2b97df'>"+ matchsArray[i].away_flag + " " + matchsArray[i].away_team + "</td></tr>";

                if (matchsArray[i].home_result != null){

                    indexHome.points += 1;
                    indexHome.draws += 1;
                    indexAway.points += 1;
                    indexAway.draws += 1;
                }
            }
        }
        
    }

}

if (document.getElementById("outputM") != null){
    document.getElementById("outputM").innerHTML = txt;
}

