const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async() => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);




const { City, Airport } = require('./models');
const mumbai = await City.findByPk(4);
const sh = mumbai.createAirport({name: 'CSI airport', code: 'MUM'});


await City.destroy({
    where: {
        id: 4
    }
}); 


 
});

