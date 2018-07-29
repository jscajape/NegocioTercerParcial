const mongoose = require('mongoose');
const { Schema } = mongoose;

const Cliente = new Schema({

    identificacion: {
        type: String,
        required:'Es necesario el numero del documento',
        maxlength:[13,"Numero de documento extenso"]
    },
    nombres: {
        type: String,
        required:'Es necesario el nombre'
    },
    fecha_nacimiento: { 
        type: Date,
        required:'Es necesario la fecha'
    },
    estatura: {
        type: Number,
    required:'Es necesario el nombre'
        }
 
    
});

module.exports = mongoose.model('Cliente', Cliente,'Cliente');