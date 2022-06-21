import writeFileSync from 'fs';

const guardarEnDb = (data) => {

    const archivo = './db/data.txt';
    writeFileSync( archivo, JSON.stringify(data) );

}

export default guardarEnDb;
