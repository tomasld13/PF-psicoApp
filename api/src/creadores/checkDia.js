const {Dia, Psicologo, Factura} = require("../db")

const getMonth = (month) => {
    switch(month){
    case "Jan":
        return 1
    case "Feb":
        return 2
    case "Mar":
        return 3
    case "Apr":
        return 4
    case "May":
        return 5
    case "Jun":
        return 6
    case "Jul":
        return 7
    case "Aug":
        return 8
    case "Sep":
        return 9
    case "Oct":
        return 10
    case "Nov":
        return 11
    default:
        return 12                       
    }
}

const checkDia = async () => {
    
    let diaActual = new Date().toString().split(" ")
    diaActual =[diaActual[3],getMonth(diaActual[1]) >= 10 ? getMonth(diaActual[1]).toString() : "0" + getMonth(diaActual[1]),diaActual[2]]
    let diaMesProximo = parseInt(diaActual[1])+1
    diaMesProximo = [diaActual[0], diaMesProximo.toString(), diaActual[2]]
    let dias = await Dia.findAll()
    let diasDB = []
    dias = await dias.map( async (d) => {
        if(!diasDB.includes(d.fecha)) diasDB.push(d.fecha)
    })
    if(diasDB.length <= 0){
        diasDB.push(`${diaActual[0]}-${diaActual[1]}-${diaActual[2]}`)
    }
    let año = diasDB[diasDB.length-1].split("-")[0]
    let mes = diasDB[diasDB.length-1].split("-")[1]
    let dia = diasDB[diasDB.length-1].split("-")[2]
    let diasACrear = []
    const psicologos = await Psicologo.findAll()
    while(new Date(`${año}-${mes < 10 ? "0" + mes : mes}-${dia}`) <= new Date(`${diaMesProximo[0]}-${diaMesProximo[1] < 10 ? "0" + diaMesProximo[1] : diaMesProximo[1]}-${diaMesProximo[2]}`)){
        if(dia === 30){
            if(mes === "04" || mes === "06" || mes === "09" || mes === "11"){
                mes = parseInt(mes) + 1
                mes.toString()
                dia = "1"
            }
        }
        else if(parseInt(dia) === 31){
            mes = parseInt(mes) + 1
            mes.toString()
        }
        if(parseInt(mes) > 12){
            año = parseInt(año) + 1
            año.toString()
            mes = "1"
        }else{
            if(parseInt(dia) === 31) {
                dia = "1"
            }
            else{
                dia = parseInt(dia) + 1
                dia.toString()
            }
        }
        diaCreate = año + "-" + (mes < 10 && mes > 1 ? "0" + mes : mes) + "-" + (dia < 10 ? "0" + dia : dia)
        diaCreate.toString().trim()
        let diaWhile = await Dia.create({fecha: diaCreate})
        diasACrear.push(diaWhile)
    }
    await psicologos.map( async (p) => {
        diasACrear.map( async (d) => {
           await p.addDia(d)
        })
    })
    let diasBorrar = await Dia.findAll()
    diasBorrar = await diasBorrar.map( async (d) => {
        let dia = d.fecha.split("-")
        dia = new Date(dia[0],dia[1]-1,dia[2])
        if(dia < new Date()){
            d.destroy();
        }
    })
}

module.exports = checkDia