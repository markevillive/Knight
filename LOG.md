# LOG

-----

> Подробное описание работы над проектом.

## Этап подготовки.
- Создание репозитория git
- Создание файловой системы проекта.
- Добавление файлов README и LOG

## Процесс разработки

----------------
### Создание основных файлов.

-----------------
- index.html
    - Задана кодировка utf-8.
    - Подключены таблицы стилей (локальная и Bootstrap).
    - Подключены скрипты (jquery,bootstrap,локальный main.js)
- css/style.css
- js/main.js
- browsersync.bat 

## Верстка index.html

--------------------------

### Блок шапки.
> Хедер включает в себя два изображения -- фон и картинку с рыцарем.


# 20.11.2020 On branch feature

----------------------------

## Restart
- Очищены все файлы.
- В index.html перенесен код из [Bootstrap Starter template](https://getbootstrap.com/docs/4.5/getting-started/introduction/#starter-template)
- Подключены кастомные css и js, шрифт Open Sans, заданы стили для body.

## Main Header
### HTML
- Создан хедер главной страницы с классом `.main-header`
- В верх элемента добавлен навбар-дарк из [тимплейтов Бутстрапа](https://getbootstrap.com/docs/4.5/components/navbar/)
- Выполнена разметка хедера.
- Сделан коммит Header 2.0.0

### CSS

## Return to feature

## Section skills

----------------------------
> Секция с описанием умений и навыков. 
> В левом блоке содержит заголовок, а в правом  4 колонки с иконками в 2 ряда.

### Разметка HTML

#### Сетка

- Секция класс `skills`
  - rov
    - col-sm-5
      - h4
      - h3
    - col-sm-7
      - row
        - col-sm-6
          - h5
          - p
        - col-sm-6
          - h5
          - p
      - row
        - col-sm-6
          - h5
          - p
        - col-sm-6
          - h5
          - p
  
        
      
  
- Добавление условных заголовков и *Lorem Ipsum*.

## Section Portfolio

------------------------

>В секции находится галерея с образцами работ.
> Есть желание модифицировать секцию под несколько галерей.
> Для этого может понадобиться карусель и сам плагин галереи.

### Разметка HTML

-----------------------------------------------------------------
#### Подготовка.
- Создана базовая разметка в одну колонку (col-md-12).
- Для реализации галереи скачан и подключен плагин **BaguetteBox.js** (css и js файлы).
- Подготовлены картинки для 3 галерей :
  - **Girls** - 9 полноэкранных картинок и 9 миниатюр.
  - **Auto** - 9 полноэкранных картинок и 9 миниатюр.
  - **Cats** - 9 полноэкранных картинок и 9 миниатюр.
#### Верстка галереи.

-------------------------------
## Homepage complete.

- Замена самых тяжелых png на jpg.
- Создание ветки united для мержа master в develop.
- Мерж united в ветку develop.

## TO TOP Button

--------------------------------

> Кнопка, прокручивающая страницу вверх при нажатии. Реализована при помощи Jquery.

### HTML и CSS

- Сама кнопка расположена сразу за открывающим тегом `body`. Ей присвоен класс `scrollToTop` со следующими стилями:

```css
.scrollToTop{
    position: fixed;
    bottom: 60px;
    right: 50px;
    border: 2px solid #000;
    border-radius: 5px;
    display: none;
    font-size: 35px;
    height: 50px;
    width: 50px;
    z-index: 1000;
    color: #fff;
    background-color: #ff0000;
    box-shadow: 2px 2px 10px 5px rgba(0,0,0, .5);
    outline: none;
    transition: all .5s;
}
.scrollToTop:hover{
    background-color: #fff;
    color: #ff0000;
    text-decoration: none;
    outline: none;
    border: solid 2px #ff0000;
}
.scrollToTop:active{
    outline: none;
}
.scrollToTop:visited{
    outline: none;
}
```

### JavaScript
> Обязательно должен быть подключен полный JQUERY!!!

- Скрипт для работы кнопки:

```javascript
$(window).scroll(function( ){
        if ($(this).scrollTop() > 600) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    $('.scrollToTop').click(function() {
        $('html, body').animate({scrollTop : 0}, 800);
        return false;

    });
```

## Preloader


---------------------------------




## Верстка blog.html.

--------------------------------------

## Верстка single.html.

--------------------------------------

## Верстка page.html

--------------------------------------

## Верстка 404.html

--------------------------------------
  

