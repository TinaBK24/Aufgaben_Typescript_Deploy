//* fetch-level-2_1

import "./style.css";
import { IPhotoInfo } from "./contracts/IPhotoInfo";

const BASE_URL = "https://picsum.photos/v2/list";

const output = document.getElementById('output') as HTMLDivElement;

function displayPhoto(image: string, imageName: string){
    const resultFigure = document.createElement('figure') as HTMLImageElement;
    resultFigure.innerHTML = `
        <img src="${image}">
        <figcaption>${imageName}</figcation>
    `
    output.appendChild(resultFigure)

    return resultFigure
}

async function fetchImage(){
    try{
        const response: Response = await fetch(BASE_URL);
        const images: IPhotoInfo[] = await response.json();
        console.log(images);
        
        images.forEach((image) => {
            const resultImage = image.download_url;
            const resultImageName = image.author;
            displayPhoto(resultImage, resultImageName)
        })
    } catch(error){
        console.error(error);
        
    }
}
fetchImage()