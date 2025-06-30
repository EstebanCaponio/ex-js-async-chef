async function getChefBirthday(id) {
    const responseRecipes = await fetch(`https://dummyjson.com/recipes/${id}`);
    const data = await responseRecipes.json()

    const responseChef = await fetch(`https://dummyjson.com/users/${data.userId}`);
    const responseJson = await responseChef.json()

    const birthday = await responseJson.birthDate;

    return birthday;
}

(async () => {
    try {
        const chefBirth = await getChefBirthday(1);
        console.log(`Data di nascita dello chef: ${chefBirth}`);
    } catch (error) {
        console.error(error.message);
    }
    console.log('programma finito!')
})();