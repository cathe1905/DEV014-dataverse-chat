const ApiKey = () => {
    const key= document.createElement('div');
    key.innerHTML= `
        <div>
            <img src="" alt="" />
            <button type="button">Chat Grupal</button>
        </div>
    
        <div>
            <h1>Api Key</h1>
            <input type="text" placeholder="Escribe aqui tu Api Key" />
            <button type="submit">Guardar</button>
        </div>
        `
    return key;
};

export default ApiKey;