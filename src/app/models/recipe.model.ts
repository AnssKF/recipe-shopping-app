import { Ingredient } from "./ingredient.model";

export class Recipe{
    public name:string;
    public description:string;
    public imgUrl:string;
    public ingredients: Ingredient[];

    constructor(name:string,desc:string,imgUrl:string, ingredient:Ingredient[]){
        this.name = name;
        this.description = desc;
        this.imgUrl = imgUrl;
        this.ingredients = ingredient;
    }
}