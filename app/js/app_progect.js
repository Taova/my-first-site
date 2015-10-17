var myModule=(function() {
	
	//Инициалирует наш модуль
	var init = function(){
		_setUpListners();
	};
	// Получаем название файла из пути
	var _getNameFromPath = function (path) {
		return path.replace(/\\/g, '/').replace(/.*\//, '');
	};
	//Прослушивает события
	var _setUpListners = function(){
		$('#add-new-item').on('click', _showModal);//открыть модальное окно
		$ ('#add-new-project').on('submit', _addProject); //добавление проекта
		$('#fileupload').on('change', _changefileUpload);
		};
	// Изменили файл аплоад (добавили файл в файлаплоад)
	var _changefileUpload = function (){
		var input = $(this), // инпут type="file"
			name = _getNameFromPath(input.val()); // имя загруженного файла

		$('#name-file-project')
			.val(name) 
			.trigger('hideTooltip')
			.removeClass('has-error'); 
	};
	//Работает с модальным окном
	var _showModal = function (ev) {
		ev.preventDefault();
		var divPopup = $("#new-project-popup"),
			form = divPopup.find('.popup');

		divPopup.bPopup({
			speed:650,
			transition: "slideDown",
			onClose: function (){
				form.find('.popup-error').text('').hide();
				form.trigger('reset');
			}
		});
	};

	//Добавляет проект
	var _addProject = function (ev) {
		ev.preventDefault();

		//объявляем переменные
		var form = $(this),
			url = "add-project.php",
			defObj = _ajaxForm(form, url);

		if (defObj){
			defObj.done(function(ans) {
			var succesBox = form.find(".success-mes"),
				errorBox = form.find(".error-mes");
				if (ans.status === "OK") {
					errorBox.hide();
					succesBox.text(ans.text).show();
				}else{
					succesBox.hide();
					errorBox.text(ans.text).show();
				} 
						});

		}
	
		
				
	};

	//Универсальная форма
	//1. собирает данные из формы
	//2. проверяет форму
	//3. делает запрос на сервер и возвращает ответ с сервера
	var _ajaxForm = function (form, url){
		if(!validation.validateForm(form)) return false;
		data = form.serialize();

	var result = $.ajax({ //запрос на сервер
			url: url,
			type: 'POST',
			dataType: 'json',
			data: data
		}).fail(function(ans) {
			console.log("Проблемы в PHP");
			form.find('.popup-error').text('На сервере произвошла ошибка').show();
		});
	return result;
	};
	//Возвращаем объект (публичные методы)
	return{
		init:init
	};

})();
myModule.init();