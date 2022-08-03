import getRandomName from "./names";

const typeEffect = (setName) => {
    let randomName = getRandomName();
    let output = '';
    for (let i = 0; i < randomName.length; i++) {
        let j = i;
        setTimeout(function () {
            output += randomName[i];
            setName(output);
        }, 100 * (j + 1));
    }
}

export default typeEffect;