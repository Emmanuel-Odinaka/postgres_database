import { Weapon, MythicalWeaponStore } from "../mythical_weapon";



const store = new MythicalWeaponStore()

describe("Book Model", () => {
  it('should have an index method', () => {
    expect(store.index).toBeDefined();
  });

  it('should have a show method', () => {
    expect(store.index).toBeDefined();
  });

  it('should have a create method', () => {
    expect(store.index).toBeDefined();
  });

  it('should have a update method', () => {
    expect(store.index).toBeDefined();
  });

  it('should have a delete method', () => {
    expect(store.index).toBeDefined();
  });

  it('create method should add a book', async () => {
    const result = await store.create({
        id : "1",
        name: "AK 47",
        type: "machine gun",
        weight: 100
    });
    expect(result).toEqual({
        id : "1",
        name: "AK 47",
        type: "machine gun",
        weight: 100
    });
  });

  it('index method should return a list of books', async () => {
    const result = await store.index();
    expect(result).toEqual([{
        id : "1",
        name: "AK 47",
        type: "machine gun",
        weight: 100
    }]);
  });

  it('show method should return the correct book', async () => {
    const result = await store.show("1");
    expect(result).toEqual({
        id : "1",
        name: "AK 47",
        type: "machine gun",
        weight: 100
    });
  });

  it('delete method should remove the book', async () => {
    store.delete("1");
    const result = await store.index()

    expect(result).toEqual([]);
  });
});