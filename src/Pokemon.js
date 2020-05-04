class Pokemon {
    constructor(data) {
        this.name = data.name;
        this.id = data.id;
        this.sprite = data.sprites.front_default;
        this.type = data.types[0].type.name;
    }
}

export default Pokemon