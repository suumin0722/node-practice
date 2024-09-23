"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);


function login(event) {
    event.preventDefault(); // 기본 동작 방지

    const req = {
        id: id.value,
        psword: psword.value,
    };

    fetch("/login", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
        },
        body : JSON.stringify(req),
    })
    .then(response => {
        console.log(response); // 응답 확인
        if (!response.ok) {
            throw new Error('Network response was not ok.');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('There has been a problem with your fetch operation:', error)); 
}