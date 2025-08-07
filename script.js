const people = [
  {
    name: "Armless John",
    title: "Software Developer",
    company: "GRI Institute",
    profileImg:
      "https://cdn.griinstitute.org/uploads/crm_people/0031R00002OUMta_Marketing_Edited_Photo_2025-02-03_11-53-29.jpg",
    flagImg: "https://www.griinstitute.org/assets/img/country_flags/1x1/br.svg",
    skills: "Servers, Web And Mobile",
    logo: "https://cdn.griinstitute.org/uploads/crm_company/0033600000DmrRO_Marketing_Edited_Logo_2025-06-14_01-23-10.jpg",
    match: "66%",
  },
];

function createCard(data) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <div class="badge">
      <img class="shield" src="/icons/shield.svg" alt="shield">
      <p>REPRESENTATIVE</p>
    </div>
    <div class="card-content">
      <div class="left-section">
        <div class="image-container">
          <img class="profile" src="${data.profileImg}" alt="Profile" />
          <img class="flag" src="${data.flagImg}" alt="Flag" />
        </div>
        <div class="info">
          <h2 class="name">${data.name}</h2>
          <p class="title">${data.title}</p>
          <p class="company">${data.company}</p>
          <br><br>
          <p class="skills">${data.skills}</p>
        </div>
      </div>
      <div class="right-section">
        <a href="#" target="_blank">
          <img class="logo" src="${data.logo}" alt="Company Logo" />
        </a>
        <img class="favoritar" src="/icons/star.svg" alt="Favoritar">
      </div>
      <div class="match-container">
        <div class="progress-container">
          <div class="progress-bar" style="width: ${data.match};"></div>
        </div>
        <div class="match">
          <span>${data.match}</span> Match
        </div>
      </div>
    </div>
    <div class="actions">
      <button class="btn btn-outline request">Intro request</button>
      <button class="btn btn-outline meeting">Private Meeting</button>
      <a class="btn btn-solid whatsapp" href="https://wa.me/5511969057795?text=Olá!%20Gostaria%20de%20conversar%20com%20você." target="_blank">
      <img class="balao" src="/icons/emoji.svg" alt="Balão chat">Chat
      </a>
    </div>
  `;

  const fav = card.querySelector(".favoritar");
  let isFav = false;
  fav.addEventListener("click", () => {
    isFav = !isFav;
    fav.classList.toggle("ativo", isFav);
  });

  const requestBtn = card.querySelector(".request");
  const meetingBtn = card.querySelector(".meeting");
  const showAlert = () =>
    alert(
      "Sua solicitação foi enviada para nosso servidor, aguarde até que seja aprovada."
    );

  requestBtn.addEventListener("click", showAlert);
  meetingBtn.addEventListener("click", showAlert);

  return card;
}

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("card-container");
  people.forEach((person) => {
    const card = createCard(person);
    container.appendChild(card);
  });
});
