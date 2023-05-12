import { Ref } from 'vue'
export  interface Iproduct {
    img?: string;
    name: string;
    rating: number;
    cost: number;
    oldCost: number;
    id:string
    isFavorive:  Ref<boolean>
}
 