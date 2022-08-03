import getRandomName from "./names";

const typeEffect = (setName) => {
    let randomName = getRandomName() + '!';
    let output = '';
    for (let i = 0; i < randomName.length; i++) {
        setTimeout(function () {
            output += randomName[i];
            setName(output);
        }, 100 * (i + 1));
    }
}

export default typeEffect;