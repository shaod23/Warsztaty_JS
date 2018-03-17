    'use strict';

    document.addEventListener('DOMContentLoaded', function () {
        var showMenuDOM = document.querySelector('.for-dropdown');
        var menuDOM = document.querySelector('.dropdown');
        console.log(showMenuDOM, menuDOM);

        showMenuDOM.addEventListener('mouseover', function () {
            menuDOM.style.display = 'block'
        });

        showMenuDOM.addEventListener('mouseout', function () {
            menuDOM.style.display = 'none'
        });

    });





    document.addEventListener('DOMContentLoaded', function () {
        var buttons = document.querySelectorAll('.read-more');
        console.log(buttons);

        console.log(buttons[0].previousElementSibling); // Powinien wyświetlić się w konsoli paragraf o klasie `more`

        buttons[0].addEventListener('click', function () {
            console.log('działa'); // To powinno pojawić się w konsoli po kliknięciu w pierwszy przycisk
        });

        buttons[0].addEventListener('click', function () {
            console.log(this); // Powinien pojawić się przycisk w konsoli
        });

        buttons[0].addEventListener('click', function () {
            var textArea = this.previousElementSibling;
            console.log(textArea); // Powinien to być paragraf nad pierwszym przyciskiem
        });

        buttons[0].addEventListener('click', function () {
            var textArea = this.previousElementSibling;
            textArea.style.display = 'block';
        });

        console.log(this.innerHTML);

        buttons[0].addEventListener('click', function () {
            var textArea = this.previousElementSibling;
            textArea.style.display = 'block';
            this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
        });

        buttons[0].addEventListener('click', function () {
            var textArea = this.previousElementSibling;
            // Poniższa linijka sprawdza, czy `style.display` jest ustawiony na `none` LUB jest pusty
            // Dwie kreski obok siebie, czyli || oznaczają LUB, więc aby wykonał się kod podany w nawiasie klamrowym
            // warunek po jednej albo po drugiej stronie kresek musi być spełniony

            if (textArea.style.display === 'none' || textArea.style.display === '') {

                // ten kod wykona się, gdy spełni się jeden z powyższych warunków
                textArea.style.display = 'block';
                this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
            } else {

                // ten kod zadziała, gdy warunek podany w `if` nie będzie spełniony, czyli w przypadku
                // gdy `style.display` jest inny niż `none` oraz gdy nie jest pusty
                textArea.style.display = 'none';
                this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
            }

        });

        var buttons = document.querySelectorAll('.read-more');

        function showHide() {

            var textArea = this.previousElementSibling;

            if (textArea.style.display === 'none' || textArea.style.display === '') {
                textArea.style.display = 'block';
                this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
            } else {
                textArea.style.display = 'none';
                this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
            }
        }

        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', showHide);
        }









    });
