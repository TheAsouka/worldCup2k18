console.log(json_obj);

var txt = "";
var lettersLower = ["a","b","c","d","e","f","g","h"];
var y = 0;


txt += "<tr><th>Group " + lettersLower[y].toUpperCase() + "</tr></th>";
txt += "<tr> <th>Date</th> <th>Home</th> <th>Away</th> </tr>";


for (var i = 0; i < 6; i++) {
    
    txt += "<tr><td>" + eval("json_obj.groups."+lettersLower[y]+".matches["+i+"].date") + "</td>";
    txt += "<td>" + eval("json_obj.groups."+lettersLower[y]+".matches["+i+"].home_team") + "</td>";
    txt += "<td>" + eval("json_obj.groups."+lettersLower[y]+".matches["+i+"].away_team") + "</td>";
    txt += "</tr>";
    
    
    if(i == 5 && y < 7){
        y += 1;
        i = 0;
        txt += "<tr><th>Group " + lettersLower[y].toUpperCase() + "</tr></th>";
        txt += "<tr> <th>Date</th> <th>Home</th> <th>Away</th> </tr>";
    }
}
document.getElementById("outputM").innerHTML = txt;