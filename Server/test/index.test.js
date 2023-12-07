const app = require('../src/app');
const session = require('supertest');
const agent = session(app);
const users = require('../src/utils/users');

let character1;
let character2;

describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
        await agent.get('/rickandmorty/character/1').expect(200);
    });
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
        const response = await agent.get('/rickandmorty/character/1');
        expect(response.body).toHaveProperty("id");
        expect(response.body).toHaveProperty("name");
        expect(response.body).toHaveProperty("species");
        expect(response.body).toHaveProperty("gender");
        expect(response.body).toHaveProperty("status");
        expect(response.body).toHaveProperty("origin");
        expect(response.body).toHaveProperty("image");
    });
    it("Si hay un error responde con status: 500", async () => {
        await agent.get('/rickandmorty/character/900').expect(500);
    });
});

describe("GET /rickandmorty/login", () => {
    it("Setea access:true con credenciales correctas", async () => {
        const response = await agent.get(`/rickandmorty/login?email=${users[0].email}&password=${users[0].password}`);
        expect(response.body).toEqual({access:true});
    });
    it("Setea access:false con credenciales incorrectas", async () => {
        const response = await agent.get(`/rickandmorty/login?email=${users[0].email}&password=pass`);
        expect(response.body).toEqual({access:false});
    });
});

describe("POST /rickandmorty/fav", () => {
    it("Guarda favorito", async () => {
        character1 = await agent.get('/rickandmorty/character/1');
        const response = await agent.post('/rickandmorty/fav').send(character1.body);
        expect(response.body).toContainEqual(character1.body);
    });
    it("Conserva favoritos en arreglo", async () => {
        character2 = await agent.get('/rickandmorty/character/2');
        const response = await agent.post('/rickandmorty/fav').send(character2.body);
        expect(response.body).toContainEqual(character1.body);
        expect(response.body).toContainEqual(character2.body);
    });
});

describe("DELETE /rickandmorty/fav/:id", () => {
    it("Devuelve los mismos personajes si id no existe", async () => {
        const response = await agent.delete('/rickandmorty/fav/100');
        expect(response.body).toContainEqual(character1.body);
        expect(response.body).toContainEqual(character2.body); 
    });
    it("Personaje se elimina correctamente", async () => {
        const response = await agent.delete('/rickandmorty/fav/1');
        expect(response.body).not.toContainEqual(character1.body);
        expect(response.body).toContainEqual(character2.body);    
    });
});