// document.addEventListener('DOMContentLoaded', function () {
//     const sendButton = document.querySelector('.btn');
//     const form = document.querySelector('.contact-form');
//     const successMessage = document.querySelector('.success-message');

//     sendButton.addEventListener('click', (e) => {
//         e.preventDefault();
        
//         form.classList.add('submitted');
//         successMessage.style.display = 'block';

//         setTimeout(() => {
//             form.classList.remove('submitted');
//             successMessage.style.display = 'none';
//         }, 3000);
//     });

//     const inputFields = document.querySelectorAll('.input-group input, .input-group textarea');
//     inputFields.forEach(input => {
//         input.addEventListener('focus', () => {
//             input.parentElement.classList.add('focused');
//         });

//         input.addEventListener('blur', () => {
//             if (!input.value.trim()) {
//                 input.parentElement.classList.remove('focused');
//             }
//         });
//     });
// });
