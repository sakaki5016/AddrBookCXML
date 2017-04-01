var $ = jQuery = require("./js/jquery-3.1.1.min.js");
const ipc = require('electron').ipcRenderer
var fs = require('fs');

// 定数値の定義
const group_data_json_file = "./data/group_menu.json";

// groupのロード
function groupLoad(){
	// groupファイルからgroup情報のロード
	$.getJSON(group_data_json_file, function(json){
		var group_menu_option_str = "";
		for(var value of json.group) {
			console.log(value.id + " : " + value.name);
			group_menu_option_str += "<option value='" + value.id + "'>" + value.name + "</option>";
		}
		$("#group_select").html(group_menu_option_str);
	});
}

// groupの追加
function addGroup(groupJosnData){
	// groupファイルからgroup情報のロード
	$.getJSON(group_data_json_file, function(json){
		json.group.push(groupJosnData);

		fs.writeFileSync(group_data_json_file, JSON.stringify(json), function (error) {
			if (error != null) {
				console.log("error : " + error);
			}

			console.log("Groupを更新しました");
		});
	});
}