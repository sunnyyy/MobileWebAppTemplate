function switchTabs(displayTab, hideTabs) {
	// show active tab & color active
	var active_tab = document.getElementById(displayTab);
	active_tab.style.background = '#eeeeee'
	var active_tab_content = document.getElementById(displayTab + "_content");
	active_tab_content.style.display = 'block';
	// for all other tabs, hide content & color inactive
	for (var i = 0; i < hideTabs.length; i++) {
		var hidden_tab = document.getElementById(hideTabs[i]);
		hidden_tab.style.background = '#ffffff';
		var hidden_tab_content = document.getElementById(hideTabs[i] + "_content");
		hidden_tab_content.style.display = 'none';
	}
}