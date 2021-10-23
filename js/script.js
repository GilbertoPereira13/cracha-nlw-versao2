//Alert Apenas para instrução
alert(
  "Bem vindo ao Crachá NLWHeat, para ver seu perfil do Github você deve digitar seu usuário que fica apos a '/' na url(ex: github.com/GilbertoPereira13)!"
)
//Aqui eu pego o usuario do github
let gitHubLink = prompt('Digite o do Github')

const linksSocialMedia = {
  github: gitHubLink,
  youtube: 'youtube.com',
  instagram: 'instagram.com',
  facebook: 'facebook.com',
  twitter: 'twitter.com'
}
// Maneira mais xoxa de fazer

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}

// function changeGithub() {
//   for (let a of gitHubTeste.children) {
//     const social = a.getAttribute('class')

//     a.href = `https://www.${social}.com/${linksSocialMedia[social]}`
//   }
// }

// changeSocialMediaLinks()
// changeGithub()

function getGitHubProfileInfo() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfo()
