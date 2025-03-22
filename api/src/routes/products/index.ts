import {Router} from 'express';

//products endpoint
const rounter = Router();

rounter.get('/', (req, res) => {
    res.send('the list of products');
});

rounter.get('/:id', (req, res) => {
    console.log(req.params);
    res.send('A products');
});

rounter.post('/',(req, res) => {
    res.send('New product created');
});

export default rounter;