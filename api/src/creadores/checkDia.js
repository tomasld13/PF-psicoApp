const {Dia, Psicologo} = require("../db")

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
    diaActual =[diaActual[3],getMonth(diaActual[1]) > 10 ? getMonth(diaActual[1]) : "0" + getMonth(diaActual[1]),diaActual[2]]
    /*let dias = await Dia.findAll()
    dias = await dias.map( async (d) => {
        let dia = d.fecha.split("-")
        dia = new Date(dia[0],dia[1]-1,dia[2])
        if(dia < new Date()) await d.destroy()
    })*/
    let diaMesProximo = parseInt(diaActual[1])+1
    diaMesProximo = [diaActual[0], diaMesProximo.toString(), diaActual[2]]
    let dias = await Dia.findAll()
    let diasDB = []
    dias = await dias.map( async (d) => {
        if(!diasDB.includes(d.fecha)) diasDB.push(d.fecha)
    })
    let año = diasDB[diasDB.length-1].split("-")[0]
    let mes = diasDB[diasDB.length-1].split("-")[1]
    let dia = diasDB[diasDB.length-1].split("-")[2]
    let diasACrear = []
    const psicologos = await Psicologo.findAll()
    while(new Date(`${año}-${(parseInt(mes) - 1).toString()}-${dia}`,"YYYY-MM-DD") <= new Date(`${diaMesProximo[0]}-${diaMesProximo[1]-1}-${diaMesProximo[2]}`,"YYYY-MM-DD")){
        if(parseInt(dia) === 31){
            mes = parseInt(mes) + 1
            mes.toString()
        }
        if(parseInt(mes) === 12){
            año = parseInt(año) + 1
            año.toString()
            mes = "0"
        }
        else{
            if(parseInt(dia) === 31) {
                dia = "1"
            }
            else{
                dia = parseInt(dia) + 1
                dia.toString()
            }
        }
        let diaWhile = await Dia.create({fecha: `${año}-${mes}-${dia}`})
        diasACrear.push(diaWhile)
    }
    await psicologos.map( async (p) => {
        await diasACrear.map( async (d) => {
            p.addDia(d)
        })
    })
}

module.exports = checkDia