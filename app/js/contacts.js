var contact=(function(){
	//Инициализирует наш модуль
	var init = function(){
		_setUpListners();
	};
	//Прослушивает события
	var _setUpListners = function(){
		$('#contact-form').on('submit', _submitForm);

	};
	var _submitForm = function(ev){
		ev.preventDefault();
		console.log('Отправка формы'); 
		var form = $(this),
			url = 'contacts.php',
			defObj = _ajaxForm(form, url);
	};
	var _ajaxForm = function(form, url){
		console.log('аякс запрос');	
		if(!validation.validateForm(form)) return false;
			
	};
	//Возращает объект
	return{
		init:init
	};

})();
contact.init();