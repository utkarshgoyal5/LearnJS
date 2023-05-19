"use strict"

/**************************************************************************************************************************/

//DOM INTRODUCTION

    // querySelector returns 'first element' that match ss selector 
    // To get all we use  querySelectorAll
    console.log(document.querySelector('p')); //fetched all properties of first p tag
    console.log(document.querySelectorAll('p')); // fetched all p tags
    console.dir(document.querySelector('.utkarsh')); // fetched first tag with class name utkarsh
    //Here I have used dir to get tag in object form
    console.log(document.querySelector('#coders')); // fetched tag with id name coders

    //Earlier getElement was used but now querySelector is more prefered 
    //It return data in collection form, which is somewhat different from list, like we can't run forEach loop in this.
    console.log(document.getElementsByTagName('p'));


    //Updating and changing content

        //Inner Text
            //this only fetch text inside that html
        let heading = document.querySelector('h1');
        console.log(heading.innerText);
        let content = document.querySelector('.content');
        console.log(content.innerText);
        content.innerText = '<p>In this p tag will be displayed</p>';

        //Inner HTML
            //this take the whole inner html
        console.log(heading.innerHTML);
        console.log(content.innerHTML);
        content.innerHTML = '<p>In this p tag will be not be displayed</p>';
        content.innerHTML += '<h3>This is the appended tag</h3>';

    //Getting and setting attributes in DOM element
        let link = document.querySelector('a');
        console.log(link.getAttribute('href'));
        link.setAttribute('href', 'https://baigos.com');
        link.innerText = 'Baigos Website';

    // Adding the style
        heading.style.color = 'red';
        heading.style.backgroundColor = 'yellow';

    // Add, rempve, replace class of element

        heading.classList.add('newClass');
        heading.classList.remove('oldClass');
        heading.classList.replace('oldClass', 'newClass');

    //Parent, children, sibling

        let parentElement = document.querySelector('.content');
        //Children
        console.log(parentElement.children);
            //we cannot run forEach on HTML collection so,
            //First we convert it into Array

            Array.from(parentElement.children).forEach(function(elm, i) {
                elm.classList.add('coders');
                //sibling
                console.log(elm.nextElementSibling);
                console.log(elm.previousElementSibling);

            })

        //parent
        console.log(heading.parentElement);
