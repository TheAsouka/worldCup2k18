console.log(json_obj);

var txt = "";
y = 0;
id = 0;

txt += "<tr><th>Group " + letters[y].toUpperCase() + "</th></tr>";
txt += "<tr> <th>Country</th> <th>ID</th> <th>Points</th> </tr>";

for (var i = 0; i < json_obj.teams.length; i++) {

    if (eval("json_obj.groups."+letters[y]+".winner") == json_obj.teams[i].id){
        txt += "<tr> <td bgcolor='rgb(118, 212, 99)'> <i>" + json_obj.teams[i].emojiString + "</i> " + json_obj.teams[i].name + "</td>";
    }
    else if (eval("json_obj.groups."+letters[y]+".runnerup") == json_obj.teams[i].id){
        txt += "<tr> <td bgcolor='#2b97df'> <i>" + json_obj.teams[i].emojiString + "</i> " + json_obj.teams[i].name + "</td>";
    }
    else{
        txt += "<tr> <td> <i>" + json_obj.teams[i].emojiString + "</i> " + json_obj.teams[i].name + "</td>";
    }
    txt += "<td>" + json_obj.teams[i].id + "</td>";
    txt += "<td>" + teamsArray[i].points + "</td> </tr>";
    id += 1;
    
    if (id % 4 == 0 && id < 32) {
        y += 1;
        txt += "<table> <tr><th>Group " + letters[y].toUpperCase() + "</th></tr>";
        txt += "<tr> <th>Country</th> <th>ID</th> <th>Points</th> </tr>";
    }
}
document.getElementById("output").innerHTML = txt;

