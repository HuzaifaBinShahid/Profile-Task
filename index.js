const secondInput = document.getElementById('searchInput');
const profiles = document.querySelectorAll('.chat-profile');

secondInput.addEventListener('input', () => {
  const searchValue = secondInput.value.trim().toLowerCase();

  profiles.forEach((profile) => {
    const heading = profile.querySelector('h6');
    const text = heading.textContent.trim().toLowerCase();

    if (text.includes(searchValue)) {
      profile.style.display = 'block';
    } else {
      profile.style.display = 'none';
    }
  });
});
