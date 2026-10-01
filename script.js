const form = document.getElementById('form-reservation');
const modale = document.getElementById('modale-confirmation');
const recap = document.getElementById('recap-reservation');
const btnConfirmer = document.getElementById('confirmer-envoi');
const btnAnnuler = document.getElementById('annuler-envoi');

let donneesFormulaire = null;

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nom = document.getElementById('nom').value;
  const telephone = document.getElementById('telephone').value;
  const date = document.getElementById('date').value;
  const heure = document.getElementById('heure').value;
  const personnes = document.getElementById('personnes').value;

  donneesFormulaire = { nom, telephone, date, heure, personnes };

  recap.innerHTML = `
    <strong>${nom}</strong><br>
    ${personnes} personne(s) le ${date} à ${heure}<br>
    Téléphone : ${telephone}
  `;

  modale.hidden = false;
});

btnAnnuler.addEventListener('click', function () {
  modale.hidden = true;
});

btnConfirmer.addEventListener('click', function () {
  const data = new FormData(form);

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(data).toString()
  })
    .then(() => {
      window.location.href = '/succes.html';
    })
    .catch((error) => {
      alert("Une erreur est survenue, merci de réessayer ou de nous appeler directement.");
      console.error(error);
    });
});