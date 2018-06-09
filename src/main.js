
function getJSON(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}


var json_obj = JSON.parse(getJSON("https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json"));
console.log(json_obj.groups.a);