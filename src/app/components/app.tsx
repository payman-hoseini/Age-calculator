'use client'
import { useState } from "react";
import Form from "./form";


export default function App(){

    const [day,setDay] = useState<number>();
    const [month,setMonth] = useState<number>();
    const [year,setYear] = useState<number>();

    const [dayAge,setDayAge] = useState<number>(0);
    const [monthAge,setMonthAge] = useState<number>(0);
    const [yearAge,setYearAge] = useState<number>(0);
    return (
        <main className="bg-Off-white h-screen flex justify-center items-center font-Poppins">
            <div className="bg-white max-w-4xl w-[90vw] p-10 md:rounded-t-xl  rounded-t-3xl md:rounded-bl-xl rounded-bl-3xl md:rounded-br-[200px] rounded-br-[100px]">
                <div>
                    <Form day={day} setDay={setDay} month={month} setMonth={setMonth} year={year} setYear={setYear} setDayAge={setDayAge} setMonthAge={setMonthAge} setYearAge={setYearAge}/>
                </div>
                <div className="mb-3">
                    <p className="md:text-8xl text-5xl text-Off-black font-bold italic"><span className="text-Purple">{(yearAge == 0) ? '- -' : yearAge}</span> years</p>
                    <p className="md:text-8xl text-5xl text-Off-black font-bold italic mt-2"><span className="text-Purple">{(monthAge == 0) ? '- -' : monthAge}</span> months</p>
                    <p className="md:text-8xl text-5xl text-Off-black font-bold italic mt-2"><span className="text-Purple">{(dayAge == 0) ? '- -' : dayAge}</span> days</p>
                </div>
            </div>
        </main>
    )
}