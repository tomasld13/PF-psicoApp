import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector, useDispatch } from 'react-redux';
import { getPsychologyID, postDateTime } from '../../slice/psico/thunks.js';
import Loading from '../Loading/Loading.jsx';
import './calendar.css'

export const Calendar = ({idPsycho}) => {
    
    const psychologist = useSelector(state => state.psicology.pychoId);
    const { rolId } = useSelector(state => state.auth.authBack);

    const [startDate, setStartDate] = useState(psychologist.id ? psychologist.formatoDias[0] : new Date());
    const [startTime, setStartTime] = useState(new Date().setHours(8,0));
    const [excludes, setExcludes] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        if (psychologist.id) {
            setExcludes(getTimeExcludes(startDate));
        }
        // dispatch(getPsychologyID(idPsycho));
        dispatch(postDateTime(postDates()))
    },[startDate, startTime]);
    
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
    
        const getTimeExcludes = (startDate) => {
            const dayPsico = psychologist.dia.filter(d => {
                let dia = d.fecha.split("-");
                return new Date(dia[0],dia[1]-1,dia[2]).toString().slice(0,10) === new Date(startDate).toString().slice(0,10)
            });


            const horarios = dayPsico[0]?.horarios.map(h => {
                let d = new Date();
                let [hora, minutes] = h.hora.split(":");
                d.setHours(parseInt(hora),parseInt(minutes));
                return d;
            });

            return horarios;
        }
    
        // const enviarDatosAlBack = () => {
        //     let dateTime = postDates();
        //     dispatch(postDateTime());
        // }
        
    
        
        const postDates = () => {
            let date = startDate.toString().split(" ");
            let mes = getMonth(date[1]) <= 10 ? ("0" + getMonth(date[1])) : getMonth([date[1]]);
            date = date[3] + "-" + mes + "-" + date[2];

            let time = startTime.toString().split(" ");
            time = time[4];

            return {date, time};
        }

        //console.log(psychologist);
        return (
            <>
                <h1>CALENDARIO</h1>
                {
                    psychologist.formatoHorarios?.min 
                    ? <div className='flex'>
                    <DatePicker
                    selected={startDate}
                    onChange={(date) => {
                        setStartDate(date);
                        dispatch(postDateTime(postDates()));
                    }}
                    includeDates={psychologist.formatoDias}
                    showWeekNumbers
                    minDate={new Date()}
                    monthsShown={1}
                    dateFormat="yyyy/MM/dd"
                    withPortal
                    // inline
                    />
                    <DatePicker
                    selected={startTime}
                    excludeTimes={excludes}
                    onChange={(date) => setStartTime(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={psychologist.intervaloSesion}
                    timeCaption="Time"
                    dateFormat="hh:mm aa"
                    minTime={psychologist.formatoHorarios.min}
                    maxTime={psychologist.formatoHorarios.max}
                    withPortal
                    // inline
                    />
                </div> : <div>
                    <Loading/>
                </div>
                }
            </>
        );
}
