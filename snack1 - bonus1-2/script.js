
async function getChefBirthday(id) {

    let data;

    try {
        const responseRecipes = await fetch(`https://dummyjson.com/recipes/${id}`);

        data = await responseRecipes.json()

    } catch (error) {
        console.error(error);
    }
    if (data.message) {
        throw new Error("id inesistente");
    }

    let birthday;
    try {
        const responseChef = await fetch(`https://dummyjson.com/users/${data.userId}`);

        const responseJson = await responseChef.json()

        birthday = await responseJson.birthDate;

        if (birthday) {
            return dayjs(birthday).format('DD/MM/YYYY');
        } else {
            throw new Error("Data di nascita dello chef non trovata.");
        }

    } catch (error) {
        console.error(error);
    }
    if (birthday.message) {
        throw new Error("chef non trovato");
    }

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