const categories = {
    materials: ["bamboo", "polyester", /* Add more materials */],
    methods: ["handweaving", "3dprinting", /* Add more methods */],
    textures: ["soft", "intricate", /* Add more textures */]
};

function generateConcept() {
    const material = getRandomItem(categories.materials);
    const method = getRandomItem(categories.methods);
    const texture = getRandomItem(categories.textures);

    const conceptText = `Imaging textiles made from ${material}, that are processed through ${method} that feels ${texture}`;

    document.getElementById('generated-text').textContent = conceptText;

    // Change images based on the generated text
    updateImages(material, method, texture);
}

function updateImages(material, method, texture) {
    const imageContainer = document.getElementById('image-container');

    // Create Image objects to preload the images
    const materialImage = new Image();
    materialImage.src = `images/material_${material.toLowerCase()}.jpg`;

    const methodImage = new Image();
    methodImage.src = `images/method_${method.toLowerCase()}.jpg`;

    const textureImage = new Image();
    textureImage.src = `images/texture_${texture.toLowerCase()}.jpg`;

    // Clear previous content and append the new images
    imageContainer.innerHTML = '';
    imageContainer.appendChild(materialImage);
    imageContainer.appendChild(methodImage);
    imageContainer.appendChild(textureImage);
}

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

