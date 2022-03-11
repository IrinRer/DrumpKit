const wrapperItems = document.querySelector('.wrapper__items');
const wrapperItemsKit = document.querySelectorAll('.wrapper__items__kit');

wrapperItemsKit.forEach((item) => {
    item.addEventListener('click', () => {
        item.querySelector('audio').play();
    })
})