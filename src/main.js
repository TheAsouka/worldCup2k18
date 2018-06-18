function getJSON(yourUrl) {
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET", yourUrl, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}

var json_obj = JSON.parse(getJSON("https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json"));
var letters = ["a","b","c","d","e","f","g","h"];

var teamsArray = [{"empty":true},]; //Permits to match index of this tab with id of teams

for (var i = 0; i < json_obj.teams.length; i++) { // au lieu de faire ça, rajouter un element au debut dans json_obj ?
    var team = {
        "name":json_obj.teams[i].name,
        "flag":json_obj.teams[i].emojiString,
        "id":json_obj.teams[i].id,
        "wins":0,
        "loses":0,
        "draws":0,
        "points":0,
    }
    teamsArray.push(team);
}