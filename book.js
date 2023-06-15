const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const numberInput=document.querySelector('#num');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (nameInput.value === '' || emailInput.value === '' ||numberInput==='') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    setTimeout(() => msg.remove(), 3000);
  } else {
    const user = {
      name: nameInput.value,
      email: emailInput.value,
      phone:numberInput.value
    };

    // Retrieve existing users from local storage or initialize an empty array
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Add the new user object to the array
    users.push(user);

    // Update the users array in local storage
    localStorage.setItem('users', JSON.stringify(users));

    // Create new list item with user
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${user.name}: ${user.email}:${user.phone}`));
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
    numberInput.value= '';
  }
}


