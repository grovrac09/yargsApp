const musicArr = [];

class Music {
    constructor(band, vocals, guitar, secondGuitar, bass, drums, genre) {
        this.band = band;
        this.vocals = vocals;
        this.guitar = guitar;
        this.secondGuitar = secondGuitar;
        this.bass = bass;
        this.drums = drums;
        this.genre = genre;
    }

    add() {
        musicArr.push(this);
    }
}

module.exports = {
    Music,
    musicArr,
}; 