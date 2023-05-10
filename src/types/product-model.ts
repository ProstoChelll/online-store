import { Ref } from 'vue'
export  interface Iproduct {
    img?: string;
    name: string;
    rating: number;
    cost: number;
    oldCost: string;
    id:string
    active:  Ref<boolean>
}
 