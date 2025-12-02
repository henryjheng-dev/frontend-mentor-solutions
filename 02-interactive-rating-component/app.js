// Here is another choose to control rating active
// const ratingLabels = document.querySelectorAll('.rating-label');

// ratingLabels.forEach((label) => {
//   label.addEventListener('click', () => {
//     ratingLabels.forEach((l) => l.classList.remove('active'));
//     label.classList.add('active');
//   });
// });
const thanksState = document.querySelector('.thanks-state');

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const selectRating = document.querySelector('input[name = "rating"]:checked');
  console.log(selectRating.value);
  form.classList.toggle('all-hidden');
  thanksState.classList.toggle('all-hidden');
});
