document.addEventListener("DOMContentLoaded", () => {
  const repoURL = 'https://api.github.com/users/Jessieg12'
  const profileImg = document.querySelector('.profile_picture')

  fetch(repoURL)
  .then(resp => resp.json())
  .then(resp => renderProfile(resp))

  const renderProfile = (data) => {
    profileImg.src = data.avatar_url
  }
})