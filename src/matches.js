console.log(json_obj);

var txt = "";
var y = 0;


txt += "<tr><th>Group " + letters[y].toUpperCase() + "</tr></th>";
txt += "<tr> <th>Date</th> <th>Home</th> <th>Away</th> </tr>";


console.log()

for (var i = 0; i < 6; i++) {
    
    txt += "<tr><td>" + eval("json_obj.groups."+letters[y]+".matches["+i+"].date") + "</td>";
    txt += "<td>" + teamsArray[eval("json_obj.groups."+letters[y]+".matches["+i+"].home_team")].flag + " " + teamsArray[eval("json_obj.groups."+letters[y]+".matches["+i+"].home_team")].name + "</td>";
    txt += "<td>" + teamsArray[eval("json_obj.groups."+letters[y]+".matches["+i+"].away_team")].flag + " " + teamsArray[eval("json_obj.groups."+letters[y]+".matches["+i+"].away_team")].name + "</td>";
    txt += "</tr>";
    
    
    if(i == 5 && y < 7){
        y += 1;
        i = 0;
        txt += "<tr><th>Group " + letters[y].toUpperCase() + "</tr></th>";
        txt += "<tr> <th>Date</th> <th>Home</th> <th>Away</th> </tr>";
    }
}
document.getElementById("outputM").innerHTML = txt;
