const form = document.getElementById('form-reservation');
const modale = document.getElementById('modale-confirmation');
const recap = document.getElementById('recap-reservation');
const btnConfirmer = document.getElementById('confirmer-envoi');
const btnAnnuler = document.getElementById('annuler-envoi');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nom = document.getElementById('nom').value;
  const telephone = document.getElementById('telephone').value;
  const date = document.getElementById('date').value;
  const heure = document.getElementById('heure').value;
  const personnes = document.getElementById('personnes').value;

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
  form.submit();
});