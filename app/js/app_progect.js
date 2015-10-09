var myModule=(function(){
	
	var init = function(){
		_setUpListners();
	};

	var _setUpListners = function(){
		$('#add-new-item').on('click', _showModal);//открыть модальное окно
		};

	var _showModal = function (ev) {
		ev.preventDefault();
		$("#new-project-popup").bPopup({
			speed:650,
			transition: "slideDown"
		});
		console.log("fdfdd");
	};
	return{
		init:init
	};

})();
myModule.init();