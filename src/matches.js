console.log(json_obj);

var txt = "";
var lettersLower = ["a","b","c","d","e","f","g","h"];

txt += "<tr> <th>Date</th> </tr>";
y = 0;

for (var i = 0; i < 6; i++) {
    txt += "<tr><td>" + eval("json_obj.groups."+lettersLower[y]+".matches["+i+"].date") + "</td></tr>";
    
    if(i % 5 == 0){
        //y += 1;
        //i = 0;
        //txt += "<tr><td>" + eval("json_obj.groups."+lettersLower[y]+".matches["+i+"].date") + "</td></tr>";
    }
}
document.getElementById("outputM").innerHTML = txt;