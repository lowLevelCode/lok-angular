export interface Post {
    id:number;
    userId:number;
    title:string;
    body:string;
}

export interface PostInputDialog {
    avatarImg:string;
    posts:Post[];
}