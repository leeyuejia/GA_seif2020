const foodChoice = {
    fastFood: ['KFC','MacD','Long John Silver','BurgerKing'],
    restaurantFood: {
        japan: ['SushiTei','ichiban boshi','sakae sushi'],
        chinese: 'Crystal Jade',
        german: 'Brozeit'}
}
console.log('Choice of food is ' + foodChoice.fastFood[2])
console.log(Object.keys(foodChoice.restaurantFood)[1])
let restaurantFoodKeys = foodChoice.restaurantFood
for (let key in restaurantFoodKeys) {
    if (restaurantFoodKeys[key] == 'Crystal Jade')
    console.log(key)
}
const chips = [
    {cheapBrand: 'jack and jill', 
    popularity: 'good'},
    {goodBrand: 'Lays', 
    popularity: 'Not good'},
    {expensiveBrand: 'Kettles',
    popularity: 'good'}
]
console.log(Object.keys(chips[1])[1])

const array = [
    ['shopping', 'eating','pinic','hotel'],['netflix','gaming','boardgame','cooking']
]
console.log(array[0][2])
