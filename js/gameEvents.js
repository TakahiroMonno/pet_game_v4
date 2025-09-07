
export const randomEvent = (pet) => {

    const events = () => {
        const sick = () => {
            energy -=10; 
            console.log(`${pet.name}は病気になりました。元気度が10減りました。`);
        };
        const toy = () => {
            energy +=10;
            console.log(`${pet.name}は新しいおもちゃで遊びました。元気度が10増えました。`);
        }
        const hungry = () => {
            hunger -=10;
            console.log(`${pet.name}はお腹が空きました。満腹度が10減りました。`);
        }

        const eventList = [sick, toy, hungry];
        const randomIndex = Math.floor(Math.random() * eventList.length);
        eventList[randomIndex]();

        if (pet.hunger < 0) pet.hunger = 0;
        if (pet.energy < 0) pet.energy = 0;

        pet.getStatus();
    }
}