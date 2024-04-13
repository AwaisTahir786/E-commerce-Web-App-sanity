import { StaticImageData } from "next/image"

export type Products={
    id:number,
    title:string,
    price:string,
    category: string;
    gender:string;
    image: string | StaticImageData

}