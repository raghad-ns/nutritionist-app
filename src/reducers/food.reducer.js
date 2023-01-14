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
            return [...food, action.food];
        case "EDIT":
            return food.map(foodItem => foodItem.id === action.food.id ? action.food : foodItem)
        case "DELETE":
            return food.filter(foodItem => foodItem.id !== action.id)
        default:
            break
    }
}
export { reducer };