/* Step 1: using axios, send a GET request to the following URL
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


  // .then( =>{
  //
  // })
  //
  // .catch( =>{
  //
  // })
/* Step 2: Inspect and study the data coming back, this is YOUR
   github info! You will need to understand the structure of this
   data in order to use it to build your component function

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function,
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either
          follow this link in your browser https://api.github.com/users/<Your github name>/followers
          , manually find some other users' github handles, or use the list found
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.

          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
// const followersArray = [
//   {
//       userPro: 'https://api.github.com/users/tetondan',
//       userPro: 'https://api.github.com/users/dustinmyers',
//       userPro: 'https://api.github.com/users/justsml',
//       userPro: 'https://api.github.com/users/luishrd',
//       userPro: 'https://api.github.com/users/bigknell',
//   }
// ];
//
// function followersFunc (item){
//   axios.get(item)
//   .then()
//     followersArray.forEach  (res) => {
//     cards.appendChild(newCard(res))
//   )
// }
// }
//
// followersFunc()

getInfo()



function axyFunc(user){
  const prof = `https://api.github.com/users/${user}`
  axios.get(prof)
    .then(res => {
      cards.appendChild(newCard(res))
    })
}



const followersArray = ['bigknell', 'dustinmyers', 'justsml', 'luishrd', 'tetondan']

followersArray.forEach(item => {

  axyFunc(item)
})

axyFunc()

//
// for(i=0; i<followersArray.length;i++){
// let githubObjectMe = axios.get(followersArray[i]);
//
// githubObjectMe.then(response => {
//   let cards = document.querySelector('.cards');
//   let newcard = cardCreate(response);
//   cards.appendChild(newCard);
//
// });
// }

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will
          return the following DOM element:
*/

/*
<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

const cards = document.querySelector('.cards')

function getInfo () {
axios.get('https://api.github.com/users/codemannnnnn')
              .then(
                res => {
                  console.log((res))
                  cards.appendChild(newCard(res))
                }
              )
              .catch(

              )
}

function newCard (obj) {
  let card = document.createElement('div')
  let img = document.createElement('img')
  let cardInfo = document.createElement('div')
  let name = document.createElement('h3')
  let username = document.createElement('p')
  let location = document.createElement('p')
  let profile = document.createElement('p')
  let profileAddress = document.createElement('a')
  let followers = document.createElement('p')
  let following = document.createElement('p')
  let bio = document.createElement('p')

  cardInfo.appendChild(name)
  cardInfo.appendChild(username)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)
  card.appendChild(img)
  card.appendChild(cardInfo)




  card.classList.add('card')
  cardInfo.classList.add('card-info')
  name.classList.add('name')
  username.classList.add('username')

  name.textContent = obj.data.name
  username.textContent = obj.data.login
  location.textContent = obj.data.location
  profile.textContent = 'Profile: '
  profileAddress.textContent = obj.data['html_url']
  profileAddress.href = obj.data['html_url']
  followers.textContent = `Followers: ${obj.data.followers}`
  following.textContent = `Following: ${obj.data.following}`
  bio.textContent = `Bio: ${obj.data.bio}`


  img.src = obj.data['avatar_url']

  profile.appendChild(profileAddress)
  return card
// ${obj.data.profile}`


}


// cards.appendChild(newCard(myCard))




/* Step 4: Pass the data received from Github into your function,
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either
          follow this link in your browser https://api.github.com/users/<Your github name>/followers
          , manually find some other users' github handles, or use the list found
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.

          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/






/*
<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
