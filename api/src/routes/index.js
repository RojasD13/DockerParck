const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const port = 80;
let date = new Date();
const currentDate = date.toLocaleDateString();
const currentTime = date.toLocaleTimeString();

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public'),
    filename: (req, file, cb) => {
        const date = new Date().toISOString().replace(/:/g, '-');
        cb(null, `${date}-${file.originalname}`);
    },
});

const upload = multer({ storage });

let cars = [];

router.get('/', (req, res) => {
    res.send(cars);
    console.log(currentDate, currentTime);
});

router.post('/add', upload.single('imagen'), (req, res) => {
    const { placa, color, hora } = req.body;
    cars.push({ placa, color, hora, imagen: `http://localhost:${port}/api/public/${req.file.filename}` });
    console.log(currentDate, currentTime);
    res.send(200);
});


router.delete('/:placa', (req, res) => {
    const { placa } = req.params;
    cars = cars.filter(x => x.placa !== placa);
    console.log(currentDate, currentTime);
    res.sendStatus(200);
});

module.exports = router;