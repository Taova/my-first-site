var validation = (function(){
	//Инициализирует наш модуль
	var init = function(){
		_setUpListners();
	};
	//Прослушивает события
	var _setUpListners = function(){

	};
	//Создает тултипы
	var _createQtip = function(element, position){
		console.log("New tultip");
		console.log(position);
		//Позиция тултипа
		if (position === 'right') {
       	  position = {
          my: 'left center',
          at: 'right center'
	        }
	      }else{
	        position = {
	          my: 'right center',
	          at: 'left center',
	          adjust: {
	            method: 'shift none'
	          }
	        }
	      }
		//Инициализация тултипа
		element.qtip({
			content:{
				text: function(){
					return $(this).attr('qtip-content');
				}
			},
			show:{
				event: "show"
			},
			hide:{
				event: "keydown hideTooltip"
			},
			position:position,
			style:{
				classes: "qtip-mystyle qtip-rounded",
				tip:{
					height:10,
					width: 16
				}
			}
		}).trigger('show');
	};
	//Универсальная функция валидации
	var validateForm = function(form){
			console.log('валидация формы');
			console.log(form);
		var elements = form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
			valid = true;
	$.each(elements, function(index, val) {
		console.log(val);
		var element = $(val),
			val = element.val(),
			pos = element.attr("qtip-position");
		if (val.length === 0){
			_createQtip(element, position);
			valid === false;
		}
	});
	return valid;
	};
	//Возращает объект
	return{
		init:init,
		validateForm:validateForm
	};

})();
validation.init();