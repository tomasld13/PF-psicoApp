import { useEffect, useState } from 'react';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"


let psicologo = {
    "id": 16,
    "yearsExperience": 10,
    "honorario": 20,
    "fk_usuarioID": 37,
    "inicioHorario": "08:00:00",
    "finHorario": "16:00:00",
    "intervaloSesion": 30,
    "dia": [
        {
            "id": 1,
            "fecha": "2022-06-29",
            "Dia_Psicologo": {
            "createdAt": "2022-06-28T23:03:51.142Z",
            "updatedAt": "2022-06-28T23:03:51.142Z",
            "diumId": 1,
            "psicologoId": 16
            },
            "horarios": [
            {
                "id": 1,
                "hora": "10:00:00",
                "psicologoId": 16,
                "pacienteId": 21,
                "diumId": 1
            }
            ]
        },
        {
            "id": 2,
            "fecha": "2022-06-30",
            "Dia_Psicologo": {
            "createdAt": "2022-06-28T23:03:51.252Z",
            "updatedAt": "2022-06-28T23:03:51.252Z",
            "diumId": 2,
            "psicologoId": 16
            },
            "horarios": [
            {
                "id": 2,
                "hora": "13:00:00",
                "psicologoId": 16,
                "pacienteId": 21,
                "diumId": 2
            },
            {
                "id": 3,
                "hora": "12:00:00",
                "psicologoId": 16,
                "pacienteId": 21,
                "diumId": 2
            }
            ]
        },
        {
            "id": 3,
            "fecha": "2022-07-01",
            "Dia_Psicologo": {
            "createdAt": "2022-06-28T23:03:51.252Z",
            "updatedAt": "2022-06-28T23:03:51.252Z",
            "diumId": 2,
            "psicologoId": 16
            },
            "horarios": [
            {
                "id": 4,
                "hora": "11:00:00",
                "psicologoId": 16,
                "pacienteId": 21,
                "diumId": 2
            },
            {
                "id": 3,
                "hora": "13:00:00",
                "psicologoId": 16,
                "pacienteId": 21,
                "diumId": 2
            }
            ]
        },
        {
            "id": 5,
            "fecha": "2022-07-04",
            "Dia_Psicologo": {
            "createdAt": "2022-06-28T23:03:51.252Z",
            "updatedAt": "2022-06-28T23:03:51.252Z",
            "diumId": 2,
            "psicologoId": 16
            },
            "horarios": [
            {
                "id": 2,
                "hora": "08:00:00",
                "psicologoId": 16,
                "pacienteId": 21,
                "diumId": 2
            },
            {
                "id": 3,
                "hora": "09:00:00",
                "psicologoId": 16,
                "pacienteId": 21,
                "diumId": 2
            }
            ]
        },
        {
            "id": 6,
            "fecha": "2022-07-06",
            "Dia_Psicologo": {
            "createdAt": "2022-06-28T23:03:51.252Z",
            "updatedAt": "2022-06-28T23:03:51.252Z",
            "diumId": 2,
            "psicologoId": 16
            },
            "horarios": [
            {
                "id": 2,
                "hora": "14:00:00",
                "psicologoId": 16,
                "pacienteId": 21,
                "diumId": 2
            },
            {
                "id": 3,
                "hora": "15:00:00",
                "psicologoId": 16,
                "pacienteId": 21,
                "diumId": 2
            }
            ]
        }
    ]
}

let psicologoDias = psicologo.dia.map(m => {
    let dia = m.fecha.split("-")
    return new Date(dia[0],dia[1]-1,dia[2])
})
export const Calendar = () => {
    const [startDate, setStartDate] = useState(psicologoDias[0]);
    const [startTime, setStartTime] = useState(new Date().setHours(8,0));
    const [excludes, setExcludes] = useState([])

    useEffect(() => {
        setExcludes(getTimeExcludes(startDate))
    },[startDate, startTime])

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

    let [maxH, maxM] = psicologo.finHorario.split(":")
    maxH = parseInt(maxH)
    maxM = parseInt(maxM)
    let max = new Date()
    max = max.setHours(maxH,maxM)
    let min = new Date()
    let [minH, minM] = psicologo.inicioHorario.split(":")
    maxH = parseInt(minH)
    maxM = parseInt(minM)
    min = min.setHours(minH,minM)

    const getTimeExcludes = (startDate) => {
        const dayPsico = psicologo.dia.filter(d => {
        let dia = d.fecha.split("-")
        return new Date(dia[0],dia[1]-1,dia[2]).toString().slice(0,10) === startDate.toString().slice(0,10)})
        const horarios = dayPsico[0].horarios.map(h => {
        let d = new Date()
        let [hora, minutes] = h.hora.split(":")
        d.setHours(parseInt(hora),parseInt(minutes))
        return d
        })
        return horarios
    }

    /*enviarDatosAlBack(){
        let d = postDates()
        dispatch(postHorario({date:d[0], time:d[1]}))
    }*/

    const postDates = () => {
        let date = startDate.toString().split(" ")
        let mes = getMonth(date[1]) <= 10 ? ("0" + getMonth(date[1])) : getMonth([date[1]])
        date = date[3] + "-" + mes + "-" + date[2]
        let time = startTime.toString().split(" ")
        time = time[4]
        return [date, time]
    }

    return (
        <div className='flex'>
        <DatePicker
        selected={startDate}
        onChange={(date) => {setStartDate(date)}}
        includeDates={psicologoDias}
        showWeekNumbers
        minDate={new Date()}
        monthsShown={2}
        dateFormat="yyyy/MM/dd"
        withPortal
        //inline
        />
        <DatePicker
        selected={startTime}
        excludeTimes={excludes}
        onChange={(date) => setStartTime(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={psicologo.intervaloSesion}
        timeCaption="Time"
        dateFormat="hh:mm aa"
        minTime={min}
        maxTime={max}
        withPortal
        //inline
        />
        </div>
    );
}
