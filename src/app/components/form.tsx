'use client'

import { useState } from "react"

export default function Form({day , setDay , month , setMonth , year , setYear , setDayAge , setMonthAge , setYearAge} : any){

    const [emptyDayErr , setEmptyDayErr] = useState(false)
    const [emptyMonthErr , setEmptyMonthErr] = useState(false)
    const [emptyYearErr , setEmptyYearErr] = useState(false)
    const [wrongDay , setWrongDay] = useState(false)
    const [wrongMonth , setWrongMonth] = useState(false)
    const [wrongYear , setWrongYear] = useState(false)

    function dayChangeHandler (e : any) {
        setDay(e.target.value)
    }
    function monthChangeHandler (e : any) {
        setMonth(e.target.value)
    }
    function yearChangeHandler (e : any) {
        setYear(e.target.value)
    }

    function calculateAge (){
        let now = miladi_be_shamsi(new Date().getFullYear() , new Date().getMonth() + 1  , new Date().getDate());
        //empty inputs
        let emptyDayFlag = day == undefined || day == '';
        let emptyMonthFlag = month == undefined || month == '';
        let emptyYearFlag = year == undefined || year == '';
        let wrongDayFlag =  day < 0 || day > 31;
        let wrongMonthFlag =  month <= 0 || month > 12;
        let wrongYearFlag =  year <= 0 || year > (now[0]);

        (emptyDayFlag) ? setEmptyDayErr(true) : setEmptyDayErr(false);
        (emptyMonthFlag) ? setEmptyMonthErr(true) : setEmptyMonthErr(false);
        (emptyYearFlag) ? setEmptyYearErr(true) : setEmptyYearErr(false);
        // wrong inputs
        (wrongDayFlag) ? setWrongDay(true) : setWrongDay(false);
        (wrongMonthFlag) ? setWrongMonth(true) : setWrongMonth(false);
        (wrongYearFlag) ? setWrongYear(true) : setWrongYear(false);

        // calculate age
        let currentYear = now[0]
        let currentMonth = now[1]
        let currentDay = now[2]
        let yearAge;
        let monthAge;
        let dayAge;

        yearAge = currentYear - year;

        if(currentMonth >= month){
            monthAge = currentMonth - month
        }
        else{
            yearAge--;
            monthAge = 12 + (currentMonth - month)
        }

        if(currentDay >= day){
            dayAge = currentDay - day
        }
        else{
            monthAge--;
            dayAge = 31 + (currentDay - day);
            if(monthAge < 0){
                monthAge = 1;
                yearAge--;
            }
        }
        if(emptyDayFlag || emptyMonthFlag || emptyYearFlag || wrongDayFlag || wrongMonthFlag || wrongYearFlag){
            setDayAge(0)
            setMonthAge(0);
            setYearAge(0);
        }
        else{
            setDayAge(dayAge)
            setMonthAge(monthAge);
            setYearAge(yearAge);
        }
    }
    function miladi_be_shamsi(gy : any, gm : any, gd : any) {
        let g_d_m, jy, jm, jd, gy2, days;
        g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        gy2 = (gm > 2) ? (gy + 1) : gy;
        days = 355666 + (365 * gy) + ~~((gy2 + 3) / 4) - ~~((gy2 + 99) / 100) + ~~((gy2 + 399) / 400) + gd + g_d_m[gm - 1];
        jy = -1595 + (33 * ~~(days / 12053));
        days %= 12053;
        jy += 4 * ~~(days / 1461);
        days %= 1461;
        if (days > 365) {
            jy += ~~((days - 1) / 365);
            days = (days - 1) % 365;
        }
        if (days < 186) {
            jm = 1 + ~~(days / 31);
            jd = 1 + (days % 31);
        } else {
            jm = 7 + ~~((days - 186) / 30);
            jd = 1 + ((days - 186) % 30);
        }
        return [ jy , jm , jd ];
    }
    return (
        <>
            <form action="#" className="flex md:w-[80%]">
                <div className="flex flex-col">
                    <label htmlFor="day" className={` tracking-widest ${(emptyDayErr || wrongDay) ? 'text-Light-red' : 'text-Smokey-grey'}`}>DAY</label>
                    <input onChange={dayChangeHandler} className={`mt-1 text-2xl rounded-lg border-2 md:w-[75%] w-[90%] p-4 focus:outline-Purple ${(emptyDayErr || wrongDay) ? 'border-Light-red' : 'border-Off-white'}`} type="number" name="day" placeholder="DD"/>
                    {
                        emptyDayErr && <span className="mt-2 italic text-sm text-Light-red">This field is requierd</span>
                    }
                    {
                        wrongDay && <span className="mt-2 italic text-sm text-Light-red">Must be a valid day</span>
                    }
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className={` tracking-widest ${(emptyMonthErr || wrongMonth) ? 'text-Light-red' : 'text-Smokey-grey'}`}>MONTH</label>
                    <input onChange={monthChangeHandler} className={`mt-1 text-2xl rounded-lg border-2 md:w-[75%] w-[90%] p-4 focus:outline-Purple ${(emptyMonthErr || wrongMonth) ? 'border-Light-red' : 'border-Off-white'}`} type="number" placeholder="MM"/>
                    {
                        emptyMonthErr && <span className="mt-2 italic text-sm text-Light-red">This field is requierd</span>
                    }
                    {
                        wrongMonth && <span className="mt-2 italic text-sm text-Light-red">Must be a valid month</span>
                    }
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className={` tracking-widest ${(emptyYearErr || wrongYear) ? 'text-Light-red' : 'text-Smokey-grey'}`}>YEAR</label>
                    <input onChange={yearChangeHandler} className={`mt-1 text-2xl rounded-lg border-2 md:w-[75%] w-[90%] p-4 focus:outline-Purple ${(emptyYearErr || wrongYear) ? 'border-Light-red' : 'border-Off-white'}`} type="number" placeholder="YYYY"/>
                    {
                        emptyYearErr && <span className="mt-2 italic text-sm text-Light-red">This field is requierd</span>
                    }
                    {
                        wrongYear && <span className="mt-2 italic text-sm text-Light-red">Must be a valid year</span>
                    }
                </div>
            </form>
            <div className="my-10 md:my-0 md:mt-1 flex items-center relative md:static">
                <p className="h-[2px] w-full bg-Off-white"></p>
                <button onClick={calculateAge} className="bg-Purple rounded-full p-5 scale-75 md:scale-100  hover:bg-Off-black md:static  absolute left-[40%]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" strokeWidth="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>
                </button>
            </div>
        </>
    )
}