import Form from "./form";


export default function App(){
    return (
        <main className="bg-Off-white h-screen flex justify-center items-center font-Poppins">
            <div className="bg-white max-w-4xl p-10 rounded-t-xl rounded-bl-xl rounded-br-[200px]">
                <div>
                    <Form />
                </div>
                <div className="mb-3">
                    <p className="text-8xl text-Off-black font-bold italic"><span className="text-Purple">- -</span> years</p>
                    <p className="text-8xl text-Off-black font-bold italic mt-2"><span className="text-Purple">- -</span> months</p>
                    <p className="text-8xl text-Off-black font-bold italic mt-2"><span className="text-Purple">- -</span> days</p>
                </div>
            </div>
        </main>
    )
}