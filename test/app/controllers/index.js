/*
function doClick(e) {
    alert($.label.text);
}
*/
if(OS_IOS) { 
   $.navGroupWin.open();
} 
if (OS_ANDROID) { 
   $.index.open(); 
}
else{
	   $.index.open(); 
}

var myBooks = Alloy.Collections.books;
var book = Alloy.createModel('books', { 
   title : 'Great Expectations', 
   author: 'Charles Dickens' 
});
myBooks.add(book); 
var book = Alloy.createModel('books', { 
   title : 'Harry Potter', 
   author: 'JK Rowling' 
});
myBooks.add(book); 
book.save();

function showBook(event){
    var selectedBook = event.source;
    var args = {
        title: selectedBook.title,
        author: selectedBook.author
    };
    var bookview = Alloy.createController("bookdetails", args).getView();
    bookview.open();
};


