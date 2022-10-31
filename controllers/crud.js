const conexao = require('../database/db');
exports.save = (req, res)=>{
    const paciente = req.body.paciente;
    const consulta = req.body.consulta;
    const data = req.body.data;
    conexao.query(
        'INSERT INTO hospital(id, paciente,consulta, data) VALUES($1, $2, $3, $4)',
        [GeradorID(paciente,consulta, data), paciente, consulta, data],
        (error) => {
        if(error){
            console.log(error);
        }else{
            res.redirect('/');         
        }
});
};

exports.update = (req, res)=>{
    const id = req.body.id;
    const paciente = req.body.paciente;
    const consulta = req.body.consulta;
    const data = req.body.data;
    conexao.query(
        'UPDATE hospital SET paciente=$1, consulta=$2, data=$3, id=$4  WHERE id=$4',
        [paciente, consulta, data, id],
        (error) => {
        if(error){
            console.log(error);
        }else{           
            res.redirect('/');         
        }
});
};

function GeradorID(paciente, consulta, data) {
    return Number(paciente.toString().length) + Number(consulta.toString().length) + Number(data.toString().length)
}