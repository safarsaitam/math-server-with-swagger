var express = require('express');
var router = express.Router();


const numbers = [1,2,3];

router.get('/show', function (req, res) {
    res.json(numbers);
});

router.post('/push', function (req, res) {
    const { body } = req;

    numbers.push(body.integer);

    res.status(200).send();
});

router.delete('/pop', function (req, res) {

    if(numbers.length === 0){
        res.status(400).send('No more numbers left');
        return;
    }

    numbers.pop();

    res.status(200).send();
});

module.exports = router;
