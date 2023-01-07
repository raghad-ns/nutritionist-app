/**
 * 
 * @param {Array <{
 * id : number;
 * name : String;
 * image : String;
 * amount : number;
 * calories : number;}>} food 
 * @param {{
 * type : String;
 * food : {
 * id : number;
 * name : String;
 * image : String;
 * amount : number;
 * calories : number;}}} action 
 * @returns {Array <{
 * id : number;
 * name : String;
 * image : String;
 * amount : number;
 * calories : number;}>}
 */
const reducer = (food, action) => {
    switch (action.type) {
        case "ADD":
            console.log([...food, action.food]);
            return [...food, action.food];
        case "EDIT":
            return food.map(foodItem => foodItem.id === action.food.id ? action.food : foodItem)
        case "DELETE":
            return food.filter(foodItem => foodItem.id !== action.food.id)
        default:
            break
    }
}
export { reducer };