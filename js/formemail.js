const url =
  'https://script.google.com/macros/s/AKfycbxWRP4a9ozrqp7cJsF7EQqaPzMP-jgPgDSXq3682WTeBymGZHp6wGrzq6-64dvGJ9T0oA/exec';

$( document ).ready(function() {
document
  .getElementById('aslenquiryform')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = Object.fromEntries(formData);

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('Successful', data);
        this.reset();
      })
      .catch((err) => console.log('err', err));
  });
});