// QR Code Generation
const qrCodeElement = document.getElementById('qr-code');
const siteUrl = window.location.href;

// Ensure QR Code is generated and displayed
QRCode.toDataURL(siteUrl, { width: 200 }, function (error, url) {
    if (error) {
        console.error(error);
    } else {
        const img = document.createElement('img');
        img.src = url;
        qrCodeElement.appendChild(img);
    }
});

// Form Submission
const form = document.getElementById('user-form');
const confirmationMessage = document.getElementById('confirmation-message');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Show confirmation message
    confirmationMessage.style.display = 'block';

    // Hide the form after submission
    form.style.display = 'none';
});
