//LOCAL STORAGE

    //local storage is used to store data in browser
    //It is like a browser database 
    //we can access local storage through BOM (window)

    //methods -> setItem, getItem, removeItems, clear


    localStorage.setItem('passion', 'programming');
    localStorage.setItem('age', '25');
    localStorage.setItem('ag', '24');
    console.log(localStorage);
    console.log(localStorage.getItem('passion'));
    localStorage.removeItem('ag');
    console.log(localStorage);
    // localStorage.clear();
    console.log(localStorage);


    //It only stores string so if we want to store objects we can use JSON.strigify and to retrive we can use JSON.parse