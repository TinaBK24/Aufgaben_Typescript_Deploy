//* fetch-level-1_2

import { IComment } from "./contracts/IComment";
import { IPost } from "./contracts/IPost";

const BASE_URL = "https://jsonplaceholder.typicode.com";
const POSTS_URL = `${BASE_URL}/posts`;
const COMMENT_1_URL = `${BASE_URL}/posts/1/comments`;

async function fetchComments(){
    try{
        const response: Response = await fetch(COMMENT_1_URL);
        const comments: IComment[] = await response.json();
        console.log("E-Mail-Adressen der Kommentierenden:");
        comments.forEach(comment => console.log(comment.email))
        
    } catch (error){
        console.log(error);
        
    }
}

async function fetchPosts() {
    try{
        const response: Response = await fetch(POSTS_URL);
        const posts: IPost[] = await response.json();
        console.log("Alle Posts:");
        console.log(posts);

        const maxIdPost = posts.reduce((max, post) => post.id > max.id ? post : max);
        console.log("Post mit der höchsten Id:", maxIdPost);
        
        const shortestTitlePost = posts.reduce((shortest, post) => post.title.length < shortest.title.length ? post : shortest);
        console.log("Post mit dem kürzesten Titel:", shortestTitlePost);
        
        const longestBodyPost = posts.reduce((longest, post) => post.body.length > longest.body.length ? post : longest);
        console.log("Post mit dem längsten Body:", longestBodyPost);
        
    } catch (error){
        console.error(error);
        
    }
}

async function consoleLog(){
    await fetchComments()
    await fetchPosts()
}
consoleLog()