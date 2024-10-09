const inputTel = document.getElementById('phonenumber');

inputTel.addEventListener('input', (e) => {
  const inputValue = e.target.value;
  const regex = /^(\+7|8)[0-9]{9,10}$/;
  if (!regex.test(inputValue)) {
    e.target.value = inputValue.replace(/[^0-9+8\s]/g, '');
  }
});