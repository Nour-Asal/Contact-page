// Add event listener to the send button
document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
});