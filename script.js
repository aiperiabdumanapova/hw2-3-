const promise = fetch('https://jsonplaceholder.typicode.com/posts').then((response) => {
    console.log(response);
    return response.json();
})
.then((data) => {
    console.log(data);
    const usersContainer = document.querySelector('.users')
    console.log(usersContainer);
    usersContainer.innerHTML = `
    <div class="user">
    <h1>UserID:${data[1].id}</h1>
    </div>
    `

})

