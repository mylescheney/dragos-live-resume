const typeEffect = (name, setNameSpelled) => {
    let nameScreamed = name + '!';
    let output = '';
    for (let i = 0; i < nameScreamed.length; i++) {
        setTimeout(function () {
            output += nameScreamed[i];
            setNameSpelled(output);
        }, 120 * (i + 1));
    }
}

export default typeEffect;