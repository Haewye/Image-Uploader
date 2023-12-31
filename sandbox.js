const fileInput = document.getElementById('fileInput');
const uploadButton = document.getElementById('uploadButton');
const previewImage = document.getElementById('previewImage');

fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            const imageData = reader.result;
            localStorage.setItem('uploadedImage', imageData);
            previewImage.src = imageData;
        };
    }
});

uploadButton.addEventListener('click', () => {
    fileInput.click();
});

function removeImage(){
    localStorage.removeItem('uploadedImage');
    document.getElementById('previewImage').src='';
}

const storedImage = localStorage.getItem('uploadedImage');
if (storedImage) {
    previewImage.src = storedImage;
}
