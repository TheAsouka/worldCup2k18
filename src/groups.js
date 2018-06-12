console.log(json_obj);

var txt = "";
y = 0;
id = 0;

txt += "<tr><th>Group " + letters[y].toUpperCase() + "</th></tr>";
txt += "<tr> <th>Country</th> <th>ID</th> </tr>";

for (var i = 0; i < json_obj.teams.length; i++) {

    txt += "<tr> <td> <i>" + json_obj.teams[i].emojiString + "</i> " + json_obj.teams[i].name + "</td>";
    txt += "<td>" + json_obj.teams[i].id + "</td> </tr>";
    id += 1;
    
    if (id % 4 == 0 && id < 32) {
        y += 1;
        txt += "<table> <tr><th>Group " + letters[y].toUpperCase() + "</th></tr>";
        txt += "<tr> <th>Country</th> <th>ID</th> </tr>";
    }
}
document.getElementById("output").innerHTML = txt;

