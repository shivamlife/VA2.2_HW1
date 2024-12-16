console.log('Hello!');
const music = document.getElementsByName('music');
const showResult = document.getElementById('showResult');
for (let i = 0; i < music.length; i++) {
  music[i].addEventListener('change', () => {
    const musicRadioButton = document.querySelector(
      'input[name="music"]:checked'
    ).value;
    showResult.textContent = `Selected Music is:${musicRadioButton}`;
  });
}

// Program 2: Choose a language Preference
const language = document.getElementsByName('language');
const showResult2 = document.getElementById('showResult2');
for (let i = 0; i < language.length; i++) {
  language[i].addEventListener('change', () => {
    const languageRadioBtn = document.querySelector(
      'input[name="language"]:checked'
    ).value;
    showResult2.textContent = `Your Selected language is:${languageRadioBtn}`;
  });
}

// Program 3 : Select a job role:
const jobRole = document.getElementsByName('jobRole');
const showResult3 = document.getElementById('showResult3');
const jobRoleBtn = document.getElementById('jobRoleBtn');
jobRoleBtn.addEventListener('click', () => {
  const radioBtn = document.querySelector('input[name="jobRole"]:checked');
  if (radioBtn) {
    showResult3.textContent = `Your Job Role is ${radioBtn.value}`;
  } else {
    showResult3.textContent = `Select One  Role`;
  }
});

// Program 4 : Choose a favourite hobby:
const favHobby = document.getElementsByName('favHobby');
const showResult4 = document.getElementById('showResult4');
const selctedHobbyBtn = document.getElementById('selctedHobbyBtn');
selctedHobbyBtn.addEventListener('click', () => {
  console.log(`hello`);
  const radioBtn2 = document.querySelector('input[name="favHobby"]:checked');
  if (radioBtn2) {
    showResult4.textContent = `Your Favourtie Hobby is ${radioBtn2.value}`;
  } else {
    showResult4.textContent = `Please Select one hobby`;
  }
});

// Program 5:Select a clothing style
const cloth = document.getElementsByName('cloth');
const selctedStyleBtn = document.getElementById('selctedStyleBtn');
const showResult5 = document.getElementById('showResult5');
selctedStyleBtn.addEventListener('click', () => {
  const radioBtn5 = document.querySelector('input[name="cloth"]:checked');
  if (radioBtn5) {
    showResult5.textContent = `Your Favourite Style is ${radioBtn5.value}`;
  } else {
    showResult5.textContent = `Please Select one Style`;
  }
});
