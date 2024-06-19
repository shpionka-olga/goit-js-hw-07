let items = document.querySelectorAll('.item');
console.log('Number of Categories: ', items.length);
let categories = document.querySelectorAll('.item h2');

items.forEach(element => {
    console.log('Category: ', element.querySelector('h2').textContent);
    console.log('Elements: ', element.querySelectorAll('li').length);
});


