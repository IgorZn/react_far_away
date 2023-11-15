export function createInitialItems() {
    const initialTodos = [];
    for (let i = 0; i < 10; i++) {
        initialTodos.push({
            id: Date.now() * i,
            text: 'Item__' + (i + 1),
            qty: i + Math.floor(Math.random() * i),
            packed: i % 2 ? true : false
        });
    }
    return initialTodos;
}