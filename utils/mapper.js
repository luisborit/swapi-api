const mapper = async (swapiData) => {
    const map = 
        {
            'name': 'nombre',
            'height': 'alto',
            'mass': 'peso',
            'hair_color': 'colorDeCabello',
            'skin_color':'colorDePiel',
            'eye_color':'colorDeOjos',
            'birth_year': 'nacimiento',
            'gender':'genero'
        }
        console.log(swapiData)
    const mapped = Object.keys(swapiData).reduce((acc, key) => {
        acc[map[key]] = swapiData[key];
        return acc;
    }, {});
    return mapped
}

module.exports.mapper = mapper;