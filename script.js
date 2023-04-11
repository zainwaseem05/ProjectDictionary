//https://codingartistweb.com/2021/09/dictionary-app-html-css-and-javascript/

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click",() => {
  let inpWord = document.getElementById("inp-word").value;
  fetch(`${url}${inpWord}`)
  .then((response) => response.json())
  .then(function(data) {
      console.log(data);
      result.innerHTML = `
      <div class="word">
              <h1 class="t-s">Word : ${inpWord}</h1>

          </div>
          <div class="details">
              <p>${data[0].meanings[0].partOfSpeech}</p>
              <h5>/${data[0].phonetic}/</h5>
          </div>
          <p class="word-meaning">
             ${data[0].meanings[0].definitions[0].definition}
          </p>
          <p class="word-example">
              ${data[0].meanings[0].definitions[0].example || ""}
          </p>`;
      sound.setAttribute("src", `https:${data[0].phonetics[0].audio}`);
  })
  .catch(() => {
      result.innerHTML = `<h1 class="error">This word does not exist</h1>`;
  });
});
function playSound() {
sound.play();
}
