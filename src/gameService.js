const games = new Map();
let nextId = 0;

class sub_element {
    constructor(name, value){
        this.name = name;
        this.value = value;
    }
}

class element {
    constructor(Url, Title, Developer, Description, sub_elements) {
        this.Url = Url;
        this.Title = Title;
        this.Developer = Developer;
        this.Description = Description;
        this.sub_elements = sub_elements;
    }
}

addGame({
    Url: "https://assets.reedpopcdn.com/eurogamer-1ygxrw.jpg/BROK/resize/1200x1200%3E/format/jpg/quality/70/eurogamer-1ygxrw.jpg", Title: "Grand Theft Auto V", Developer: "Rockstar Games", Description: "Grand Theft Auto V es un videojuego de acción-aventura desarrollado por el estudio Rockstar North y distribuido por Rockstar Games. Fue lanzado el 17 de septiembre de 2013 para las consolas PlayStation 3 y Xbox 360.​", sub_elements: [new sub_element("ReleaseDate", "2013"), new sub_element("Genre", "Action-Adventure")]});

addGame({
    Url: "https://i.pinimg.com/originals/1b/9f/77/1b9f772d10ae2cfce18fab1b05705810.png", Title: "Minecraft", Developer: "Mojang Studios", Description: "Minecraft es un videojuego de construcción de tipo «mundo abierto» o sandbox creado originalmente por el sueco Markus Persson, y posteriormente desarrollado por Mojang Studios.", sub_elements: [new sub_element("ReleaseDate", "2011"), new sub_element("Genre", "Sandbox-Survival")]});

addGame({
    Url: "https://media.vandal.net/m/78531/valorant-202052910331074_1.jpg", Title: "Valorant", Developer: "Riot Games", Description: "Valorant es un hero shooter en primera persona multijugador gratuito desarrollado y publicado por Riot Games. El juego se anunció por primera vez con el Developer en clave Project A en octubre de 2019.", sub_elements: [new sub_element("ReleaseDate", "2020"), new sub_element("Genre", "Tactical Shooter")]});

addGame({
    Url: "https://specials-images.forbesimg.com/imageserve/5cfbf6b24c687b000859138a/960x0.jpg?fit=scale", Title: "Elden Ring", Developer: "FromSoftware", Description: "Elden Ring es un videojuego de rol de acción en tercera persona, con una jugabilidad centrada en el combate y la exploración. Presenta características similares de otros juegos desarrollados por FromSoftware, tales como la saga Dark Souls, Bloodborne y Sekiro: Shadows Die Twice. Localizado en un mundo abierto, el jugador puede explorar libremente las Tierras Intermedias y sus seis áreas principales.", sub_elements: [new sub_element("ReleaseDate", "2022"), new sub_element("Genre", "Action role-playing")]});

addGame({
    Url: "https://meups.com.br/wp-content/uploads/2020/04/GOd-of-War-p%C3%B4ster.jpg", Title: "God of War: Ragnarök", Developer: "SIE Santa Monica Studio", Description: "Basado libremente en la mitología nórdica, el juego se desarrolla en la antigua Escandinavia y presenta al protagonista de la serie Kratos y su hijo adolescente Atreus. Concluyendo la era nórdica de la serie, el juego cubre el Ragnarök, el evento escatológico que es central en la mitología nórdica y se predijo que sucedería en el juego anterior después de que Kratos matara al dios Æsir Baldur.​", sub_elements: [new sub_element("ReleaseDate", "2022"), new sub_element("Genre", "Action-Adventure")]});

addGame({
    Url: "https://www.newgamesbox.net/wp-content/uploads/2017/04/Hearts-Of-Iron-IV-Download-600x856.jpg", Title: "Hearts of Iron IV", Developer: "Paradox Development Studio", Description: "Hearts of Iron IV, tal como los demás juegos de la serie Hearts of Iron, es un juego de estrategia en tiempo real que se desarrolla en torno a la Segunda Guerra Mundial. El jugador puede controlar cualquier nación del mundo en este periodo de la historia, iniciando el escenario en 1936 o 1939 en un solo jugador (contra jugadores controlados por una IA) o multijugador (contra jugadores reales en línea).​", sub_elements: [new sub_element("ReleaseDate", "2016"), new sub_element("Genre", "Grand-Strategy")]});

addGame({
    Url: "https://upload.wikimedia.org/wikipedia/en/f/fb/Victoria_3_cover_art.jpg", Title: "Victoria 3", Developer: "Paradox Development Studio", Description: "Victoria 3 es un videojuego de estrategia de la saga Victoria publicado el 25 de octubre de 2022 por Paradox Interactive, siendo una secuela del juego de 2010 Victoria II. Se anunció el 21 de mayo de 2021 en la convención de Paradox Interactive 2021, PDXCON: Remixed", sub_elements: [new sub_element("ReleaseDate", "2022"), new sub_element("Genre", "Grand-Strategy")]});

addGame({
    Url: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_EuropaUniversalisIV_ParadoxDevelopmentStudioParadoxTinto_S2_1200x1600-c6740a476aa44943d38991468a85950d", Title: "Europa Universalis 4", Developer: "Paradox Development Studio", Description: "Europa Universalis IV es un videojuego de estrategia 4X desarrollado por Paradox Development Studio y publicado por Paradox Interactive. Fue anunciado en agosto de 2012 y se puso a la venta el 13 de agosto de 2013.​", sub_elements: [new sub_element("ReleaseDate", "2013"), new sub_element("Genre", "Grand-Strategy")]});

export function addGame({ Url, Title, Developer, Description, sub_elements }) {
    let id = nextId++;
    let game = new element(Url, Title, Developer, Description, sub_elements);
    game.id = id.toString();
    games.set(game.id, game);
}

export function deleteGame(id){
    games.delete(id);
}

export function getGames(ini, fin){
    let values = [...games.values()];
    if (ini !== undefined){
        return values.slice(ini, fin);
    } else{
        return values;
    }
}

export function getGame(id){
    return games.get(id);
}

export function modifyGame(id, name, Title, Developer, Description, sub_elements){
    games.get(id).name = name;
    games.get(id).Title = Title;
    games.get(id).Developer = Developer;
    games.get(id).Description = Description;
    games.get(id).sub_elements = sub_elements;
}