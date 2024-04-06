const handler = require('../handler');


test('obtener jedi con nombre Luke Skywalker', async () => {
    const en = await handler.readSwapi({pathParameters:{id:1}})    
    expect(JSON.parse(en.body).data.nombre).toBe("Luke Skywalker");    
});


test('obtener statusCode 201', async () => {
    const en = await handler.readSwapi({pathParameters:{id:1}})        
    expect(en.statusCode).toBe(201);    
});


test('prueba test saludo', async () => {
    const en = await handler.getLocalGreeting("en");
    expect(en).toBe("Hello!");
    expect(await handler.getLocalGreeting("fr")).toBe("🌊");
});



