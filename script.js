const defaultImageUrl = "https://via.placeholder.com/200";

const imagesState = [
    { flipX: false, flipY: false },
    { flipX: false, flipY: false },
    { flipX: false, flipY: false },
    { flipX: false, flipY: false }
];

const imageGrid = document.getElementById("imageGrid");

function createImageCell(index, imageUrl) {
    const container = document.createElement("div");
    container.className = "image-container";

    const wrapper = document.createElement("div");
    wrapper.className = "image-wrapper";

    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = `Imagem ${index + 1}`;
    img.id = `img${index}`;

    wrapper.appendChild(img);
    container.appendChild(wrapper);

    const controlsDiv = document.createElement("div");
    controlsDiv.className = "controls";

    const upBtn = document.createElement("button");
    upBtn.textContent = "↑";
    upBtn.addEventListener("click", () => flipVertical(index));

    const downBtn = document.createElement("button");
    downBtn.textContent = "↓";
    downBtn.addEventListener("click", () => flipVertical(index));

    const leftBtn = document.createElement("button");
    leftBtn.textContent = "←";
    leftBtn.addEventListener("click", () => flipHorizontal(index));

    const rightBtn = document.createElement("button");
    rightBtn.textContent = "→";
    rightBtn.addEventListener("click", () => flipHorizontal(index));

    controlsDiv.appendChild(upBtn);
    controlsDiv.appendChild(downBtn);
    controlsDiv.appendChild(leftBtn);
    controlsDiv.appendChild(rightBtn);


    container.appendChild(controlsDiv);

    return container;
}

function initGrid(imageUrl) {
    imageGrid.innerHTML = "";
    for (let i = 0; i < 4; i++) {
        const cell = createImageCell(i, imageUrl);
        imageGrid.appendChild(cell);
    }
}

function updateImageTransform(index) {
    const { flipX, flipY } = imagesState[index];
    const imgElement = document.getElementById(`img${index}`);


    imgElement.style.transform = `scale(${flipX ? -1 : 1}, ${flipY ? -1 : 1})`;
}

function flipVertical(index) {
    imagesState[index].flipY = !imagesState[index].flipY;
    updateImageTransform(index);
}

function flipHorizontal(index) {
    imagesState[index].flipX = !imagesState[index].flipX;
    updateImageTransform(index);
}

const exibirBtn = document.getElementById("exibirBtn");
const imageUrlInput = document.getElementById("imageUrl");
const errorMsg = document.getElementById("errorMsg");

function tryLoadImage(url) {
    return new Promise((resolve, reject) => {
        const tempImg = new Image();
        tempImg.onload = () => resolve();
        tempImg.onerror = () => reject();
        tempImg.src = url;
    });
}

exibirBtn.addEventListener("click", async () => {
    const newUrl = imageUrlInput.value.trim();

    if (!newUrl) {
        errorMsg.textContent = "Por favor, insira um URL válido.";
        errorMsg.style.display = "block";
        return;
    }

    try {

        await tryLoadImage(newUrl);
        errorMsg.style.display = "none";

        imagesState.forEach((imgState) => {
            imgState.flipX = false;
            imgState.flipY = false;
        });

        initGrid(newUrl);
    } catch (error) {
        errorMsg.textContent = "URL da imagem inválida ou não encontrada.";
        errorMsg.style.display = "block";
    }
});

initGrid(defaultImageUrl);