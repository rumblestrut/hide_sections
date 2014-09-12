jQuery(document).ready(function(){

	// Replaces Sections with Programs in Workbench
	jQuery('div#edit-access-id-wrapper > label').replaceWith('Programs');

	// Replaces Sections with Programs on the Workbench page in the tabs
	jQuery("ul.tabs:nth-child(1) > li:nth-child(3) > a:nth-child(1)").text(function () {
    return jQuery(this).text().replace("sections", "programs"); 
	});

	// Replaces Sections with Programs on the Workbench page in the tabs at the top of the page.
	jQuery("#overlay-tabs > li:nth-child(3) > a:nth-child(1)").text(function () {
    return jQuery(this).text().replace("sections", "programs"); 
	});

	// Replaces Sections with Programs on the Workbench page in the admin menu
	jQuery("li.admin-menu-toolbar-category:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)").text(function () {
    return jQuery(this).text().replace("sections", "programs"); 
	});

	jQuery("#admin-menu-menu > li:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1)").text(function () {
    return jQuery(this).text().replace("sections", "programs"); 
	});

});