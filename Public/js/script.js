const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classlist.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classlist.remove('active');
    })
}




