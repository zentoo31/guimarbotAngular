export interface PostDetail {
    id: string,
    author:string,
    profilePic:string,
    date:string,
    content:string,
    likes:number,
    comments:number,
    shares:number,
    commentsDe: PostDetail[];
}
