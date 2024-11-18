//* fetch-level-1_1

import { IPhotoInfo } from "./contracts/IPhotoInfo";

const BASE_URL = "https://picsum.photos/v2/list";

async function fetchPhoto(){
    try{
        const response: Response = await fetch(BASE_URL);
        const data: IPhotoInfo = await response.json()
        console.log(data);
        
    } catch (error){
        console.error(error);
        
    }
}

fetchPhoto()