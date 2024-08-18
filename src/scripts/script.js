let currentPhoto;
let photoObject = [
    {
        currentPhoto: currentPhoto || 1,
        maxNumber: 10
    },
    {
        currentPhoto: currentPhoto || 1,
        maxNumber: 5
    },
    {
        currentPhoto: currentPhoto || 1,
        maxNumber: 10
    }]

function handleNavigation(type, itemId){
    currentPhoto = currentPhoto || photoObject[itemId-1].currentPhoto;
    if (type === "back") {
        currentPhoto--;
        currentPhoto = currentPhoto <= 0 ? currentPhoto + photoObject[itemId-1].maxNumber : currentPhoto
    }
    if (type === "forward") {
        currentPhoto++;
        currentPhoto = currentPhoto > photoObject[itemId-1].maxNumber ? currentPhoto - photoObject[itemId-1].maxNumber : currentPhoto
    }
    photoObject[itemId-1].currentPhoto = currentPhoto;
}

function dialogOpen(props){
    let currentPhoto;
    const body = document.querySelector("body");
    const dialog = document.createElement("dialog");
    dialog.classList.add("dialog");
    const div = document.createElement("div");
    div.classList.add("dialog__image-wrapper");
    dialog.append(div);
    const backwardsButton = document.createElement('button');
    backwardsButton.textContent = "<";
    backwardsButton.classList.add("dialog__navigation_buttons");
    div.append(backwardsButton);
    const forwardButton = document.createElement('button');
    forwardButton.textContent = ">";
    forwardButton.classList.add("dialog__navigation_buttons");
    const img = document.createElement("img");
    img.src = `images/${props.itemId}/${photoObject[props.itemId-1].currentPhoto || 1}.jpeg`;
    console.log("img.src: " + img.src);
    img.classList.add("dialog__image");
    backwardsButton.onclick = () => {
        handleNavigation("back", props.itemId);
        img.src = `images/${props.itemId}/${photoObject[props.itemId-1].currentPhoto || 1}.jpeg`;
    }
    forwardButton.onclick = () => {
        handleNavigation("forward", props.itemId);
        img.src = `images/${props.itemId}/${photoObject[props.itemId-1].currentPhoto || 1}.jpeg`;
    }
    div.append(img);
    div.append(forwardButton);
    const button = document.createElement("button");
    button.classList.add("dialog__button");
    button.onclick = () => {
        dialog.close();
        dialog.remove();
        delete currentPhoto;
    }
    button.textContent = "Закрыть";
    dialog.append(button);
    body.append(dialog);
    dialog.showModal();
}