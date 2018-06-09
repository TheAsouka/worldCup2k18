
function getJSON(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}

var json_obj = JSON.parse(getJSON("https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json"));
//var s_json_obj = JSON.stringify(json_obj);
console.log(json_obj);

var txt = "";
var letters= ["A","B","C","D","E","F","G","H"]
y = 0;
id = 0;

txt += "<ul >"
txt += "<li class='groups'>Group"+" "+letters[y]+"</li>";
txt += "<ul>"
for (var i = 0; i < json_obj.teams.length; i++){
    var idFlag = json_obj.teams[i].fifaCode;
    idFlag = idFlag.toString().substring(0,2).toLowerCase();

    txt += "<li class='teams'> <i class='flag-icon flag-icon-"+idFlag+"'></i>" + json_obj.teams[i].name +" : "+json_obj.teams[i].fifaCode+" : "+ json_obj.teams[i].id +"</li>";

    id += 1;
    if (id % 4 == 0 && id < 32){
        y += 1;
        txt += "</ul><li class='groups'>Group"+" "+letters[y]+"</li><ul>";
    }
}
txt +="</ul></ul>"
document.getElementById("output").innerHTML = txt;

