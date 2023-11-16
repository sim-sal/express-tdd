const { test, expect } = require("@jest/globals");
const createSlug = require("./createSlug");
const posts = require("./posts");

test("la funzione createSlug dovrebbe ritornare una stringa", () => {
    const result = createSlug('Titolo del post', []);
    expect(typeof result).toBe('string');
});

test("createSlug dovrebbe ritornare una stringa in lowercase", () => {
    const result = createSlug('Titolo', []);
    expect(result).toEqual('titolo');
});

test("createSlug dovrebbe ritornare una stringa con gli spazi sostituiti da -", () => {
    const result = createSlug('Titolo del Post', []);
    expect(result).toEqual('titolo-del-post');
});

test("createSlug dovrebbe incrementare di 1 lo slug quando esiste già", () => {
    const result = createSlug("Cacio e pepe", posts);
    expect(result).toEqual('cacio-e-pepe1');
});
