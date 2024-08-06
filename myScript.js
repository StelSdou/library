const books = document.querySelectorAll('.book');

console.log(books);
books.forEach(book => {
    book.addEventListener('click', function(){
        const month = book.querySelector('.month');
        const titlee = book.querySelector('.title');
        console.log(month.innerHTML, "\n", titlee.innerHTML);
    });
});