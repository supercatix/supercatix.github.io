'use strict';

const basket = document.querySelectorAll('.item__buy');

basket.forEach(item => {
    item.addEventListener('click', () => {
        Swal.fire({
            icon: 'success',
            title: 'Успешно',
            text: 'Товар был добавлен в корзину!'
            // footer: '<a href>Why do I have this issue?</a>'
          });
    });
});