// // 1.1 

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const sortedUsernames = users.map(user => user.username).sort();

    console.log('json');
    console.log(sortedUsernames);

    const userIds = users.map(user => user.id);
    const postsPromises = userIds.map(userId =>
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        .then(response => response.json())
    );

    Promise.all(postsPromises)
      .then(postsData => {
        const postCounts = postsData.map(posts => posts.length);

        console.log('100');
        console.log(postCounts);
      });
  })
  .catch(error => console.log(error));

// 2.2 


// 3.1

function fetchAddress() {
  fetch('https://random-data-api.com/api/address/random_address')
    .then(response => response.json())
    .then(data => {
      const { id, city, country } = data;

      if (id !== previousId) {
        updateAddress(id, city, country);
        previousId = id;
      }
    })
    .catch(error => console.log(error));
}

function updateAddress(id, city, country) {
  const addressElement = document.getElementById('address');
  addressElement.innerHTML = `ID: ${id}<br>City: ${city}<br>Country: ${country}`;
}

let previousId = null;

setInterval(fetchAddress, 1500);


  // 3.2 

  // 215 - "Для доступа к большинству эндпоинтов Twitter API требуется аутентификация с использованием OAuth 1.0 или OAuth 2.0 токенов. Ошибка 215 указывает на то, что переданные аутентификационные данные (токены, ключи и секреты) либо отсутствуют, либо недействительны, либо были предоставлены неправильно"













