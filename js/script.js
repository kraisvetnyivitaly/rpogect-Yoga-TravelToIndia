window.addEventListener('DOMContentLoaded', function() {
'use strict';
// получаем элементы со страници
let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');
//функция:  скрывает не активные блоки (табы) по умолчанию 
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);  // вызов функции: скрывает табы кроме первого

    // функция: активирует(показывает) активный блок
    function showTabContent(b){
        if (tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }
    info.addEventListener('click', function(event) { //делигирование событий
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')) { //проверка: действительно 
                                                                    //ли кликнули на нужный таб
            for( let i = 0; i < tab.length; i++){                   // циклом перебераем табы
                if (target == tab[i]){
                    hideTabContent(0); 
                    showTabContent(i);  //Показываем блок контента совпадающий по номеру с номером нажатой табы
                    break;                 // останавливаем цикл
                }
            }
        }
    });
});
