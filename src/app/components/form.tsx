

export default function Form(){
    return (
        <>
            <form action="#" className="flex w-[80%]">
                <div className="flex flex-col">
                    <label htmlFor="day" className="text-Smokey-grey tracking-widest">DAY</label>
                    <input className="mt-1 text-2xl rounded-lg border-2 border-Off-white w-[75%] p-4 focus:outline-Purple" type="number" name="day" placeholder="DD"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className="text-Smokey-grey tracking-widest">MONTH</label>
                    <input className="mt-1 text-2xl rounded-lg border-2 border-Off-white w-[75%] p-4 focus:outline-Purple" type="number" placeholder="MM"/>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className="text-Smokey-grey tracking-widest">YEAR</label>
                    <input className="mt-1 text-2xl rounded-lg border-2 border-Off-white w-[75%] p-4 focus:outline-Purple" type="number" placeholder="YYYY"/>
                </div>
            </form>
            <div className="mt-1 flex items-center">
                <p className="h-[2px] w-full bg-Off-white"></p>
                <button className="bg-Purple rounded-full p-5 hover:bg-Off-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" stroke-width="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg>
                </button>
            </div>
        </>
    )
}