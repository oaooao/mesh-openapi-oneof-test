import express from "express";
import { pets } from './data';

const app = express();

app.use(express.json());

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello World!");
});

// app.get('/pets', (req, res) => {
//   res.json(pets);
// });

app.get('/pets/:id', (req, res) => {
  const pet = pets[req.params.id];
  if (pet) {
    res.json(pet);
  } else {
    res.status(404).send('Pet not found');
  }
});

app.get('/dogs/:id', (req, res) => {
  const pet = pets[req.params.id];
  if (pet && pet.petType === 'Dog') {
    res.json(pet);
  } else {
    res.status(404).send('Dog not found');
  }
});

app.get('/cats/:id', (req, res) => {
  const pet = pets[req.params.id];
  if (pet && pet.petType === 'Cat') {
    res.json(pet);
  } else {
    res.status(404).send('Cat not found');
  }
});

const start = async () => {
  try {
    app.listen(3000, () => console.log("Server running on port 3000"));
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

void start();