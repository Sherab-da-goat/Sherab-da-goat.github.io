// Function to load images from the folder
function loadImages() {
    var gallery = document.getElementById('gallery');
    
    // AJAX request to fetch image filenames from the server
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // Parse response text as JSON
            var images = JSON.parse(xhr.responseText);
            // Display images in the gallery
            images.forEach(function(image) {
                var img = document.createElement('img');
                img.src = 'RESOURCES/images/' + image; // Path to your images
                img.alt = 'Image';
                img.style.position = 'absolute';
                // Set random positioning
                img.style.top = Math.random() * window.innerHeight + 'px';
                img.style.left = Math.random() * window.innerWidth + 'px';
                // Append image to the gallery
                gallery.appendChild(img);
            });
        }
    };
    xhr.open('GET', 'get_image_filenames.php', true); // PHP script to retrieve image filenames
    xhr.send();
}

// Load images when the page loads
window.onload = function() {
    loadImages();
};