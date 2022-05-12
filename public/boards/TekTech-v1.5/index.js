boardConfig = _.cloneDeep(addBoard);

Object.assign(boardConfig, {
    id: "esp32-dev-board-sim",
    name: "TekTech",
    description: "",
    image: "images/cover.jpg",
    simulator: {
        index: "simulator/index.html",
        script: []
    }
});

addBoard(_.cloneDeep(boardConfig));