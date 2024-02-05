import express from 'express';
import * as gameService from './gameService.js';
const router = express.Router();

class sub_element {
    constructor(name, value){
        this.name = name;
        this.value = value;
    }
}

router.get('/', (req, res) => {
    const games = gameService.getGames(0,5);
    res.render('index', {
        games: games
    });
});

router.get('/new', (req,res) => {
    res.render('new_game')
} )


router.post('/new_game', (req, res) => {
    let Url = req.body.Url;
    let Title = req.body.Title;
    let Developer = req.body.Developer;
    let Description = req.body.Description;
    let sub_elements = [];

    var sub_name = req.body.sub_name;
    var sub_ele = req.body.sub_ele;
    if (sub_ele) {
        if (typeof sub_ele == 'string') {
            sub_elements.push(new sub_element(sub_name, sub_ele));
        } else {
            for (let i = 0; i < sub_ele.length; i++) {
                let value = sub_ele[i];
                sub_elements.push(new sub_element(sub_name[i], value));
            }
        }
    }
    gameService.addGame({ Url, Title, Developer, Description, sub_elements });
    res.render('saved_game');
});

router.get('/game/:id', (req, res) => {
    let game = gameService.getGame(req.params.id);
    res.render('show_game', { game });

});

router.get('/game/:id/modify', (req, res) => {
    let game = gameService.getGame(req.params.id);
    res.render('modify', { game });
})

router.post('/game/:id/modify', (req, res) => {
    let Url = req.body.Url;
    let Title = req.body.Title;
    let Developer = req.body.Developer;
    let Description = req.body.Description;
    let sub_elements = [];

    var sub_name = req.body.sub_name;
    var sub_ele = req.body.sub_ele;
    if (sub_ele) {
        if (typeof sub_ele == 'string') {
            sub_elements.push(new sub_element(sub_name, sub_ele));
        } else {
            for (let i = 0; i < sub_ele.length; i++) {
                let value = sub_ele[i];
                sub_elements.push(new sub_element(sub_name[i], value));
            }
        }
    }
    gameService.modifyGame(req.params.id, Url, Title, Developer, Description, sub_elements);
    res.render('saved_game');
})

router.get('/game/:id/delete', (req, res) => {
    gameService.deleteGame(req.params.id);
    res.render('deleted_game');
});

router.post('/game/:id/sub_elemento', (req, res) => {
    let game = gameService.getGame(req.params.id);
    let Url = game.Url
    let Title = game.Title;
    let Developer = game.Developer;
    let Description = game.Description;
    let sub_elements = game.sub_elements;

    var sub_name = req.body.sub_name;
    var sub_ele = req.body.sub_ele;
    if (sub_ele) {
        if (typeof sub_ele == 'string') {
            sub_elements.push(new sub_element(sub_name, sub_ele));
        } else {
            for (let i = 0; i < sub_ele.length; i++) {
                let value = sub_ele[i];
                sub_elements.push(new sub_element(sub_name[i], value));
            }
        }
    }
    gameService.modifyGame(req.params.id, Url, Title, Developer, Description, sub_elements);
    res.render('saved_game');
});

router.get('/games', (req, res) => {
    const from = parseInt(req.query.from);
    const to = parseInt(req.query.to);

    const games = gameService.getGames(from,to);

    res.render('games', {
        games: games
    });
})

export default router;
