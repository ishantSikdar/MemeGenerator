import { useState, useEffect } from "react";

function HeroSection() {
    const [counter, setCounter] = useState(0);
    const [randomeMeme, setRandomMeme] = useState({});

    useEffect(() => {
        fetch("https://meme-api.com/gimme")
            .then(res => res.json())
            .then(data => setRandomMeme(data));
    }, [counter])

    console.log(randomeMeme)

    function handleChange(event) {
        setCounter(count => count + 1)
    }

    return (
        <div className="flex flex-col justify-center items-center  px-5 h-screen">
            <div className="w-full">
                <div className="w-full h-96 shadow-xl relative" style={{
                    backgroundImage: `url(${randomeMeme.url})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}></div>
                <div className="flex justify-center text-white font-bold text-xl ">
                    <button
                        onClick={handleChange}
                        type="submit" name="submit"
                        className="my-4 w-full p-3 shadow-xl rounded-md bg-gradient-to-r from-[#672280] to-[#A626D3] cursor-pointer"
                    >Get a new Meme Image 🖼️</button>
                </div>
            </div>
        </div>
    )

}


export default HeroSection;