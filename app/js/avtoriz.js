var avtoriz=(function(){
	//Инициализирует наш модуль
	var init = function(){
		_setUpListners();
	};

	//Прослушивает события
	var _setUpListners = function(){
		$('#login-form').on('submit', _submitFormLog);
		console.log('Мы в прослушке');
	};
	var _submitFormLog = function(ev){
		ev.preventDefault();
		var form = $(this),
			url = 'avtoriz.php',
			defObj = _ajaxForm(form, url);			
	};
	var _ajaxForm = function(form, url){
		if(!validation.validateForm(form)) return false;
		
			
	};
	
	//Возращает объект
	return{
		init:init
	};

})();
avtoriz.init();