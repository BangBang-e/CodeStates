const catData = [];
for (let i = 1; i <= 42; i++) {
    catData.push({
        cat: require(`../catpic/${i}.jpeg`),
        caption: `Cat Image ${i}`
    })
}

export default catData;
