// 画面ロード時の処理
window.onload = function () {
	groupLoad();		// groupのロード
};

/*
 * ツールバーボタンの処理
 */
// Group追加ボタンの処理
function onClickGroupAddBtn() {
	var add_group_data = {"id": 4,"name": "group4"};
	addGroup(add_group_data);
}