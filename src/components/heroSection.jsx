import { useState, useEffect } from "react";

function heroSection() {

    const [allMemeImages, setAllMemeImages] = useState([]);
    
    
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data))
    }, [])

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        memeImage: ""
    })

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes;
        const randomMeme = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomMeme].url;

        setMeme((prevMeme) => {
            return {
                ...prevMeme,
                memeImage: url
            }
        })
        console.log(memesArray[randomMeme]);
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <>
            <div className="mx-auto my-5 w-2/4">
                <div className="w-full">
                    <div className="flex gap-5">
                        <input className="border-black border-[1pt] outline-none h-12 p-2 w-1/2" type="text" name="topText" id="" placeholder="Top text" onChange={handleChange} />
                        <input className="border-black border-[1pt] outline-none h-12 p-2 w-1/2" type="text" name="bottomText" id="" placeholder="Bottom text" onChange={handleChange} />
                    </div>

                    <div className="flex justify-center text-white font-bold text-xl ">
                        <button
                            onClick={getMemeImage}
                            type="submit" name="submit"
                            className="my-4 w-full p-3 shadow-xl rounded-md bg-gradient-to-r from-[#672280] to-[#A626D3] cursor-pointer"
                        >Get a new Meme Image 🖼️</button>
                    </div>

                    <div className="w-full h-96 shadow-xl relative" style={{
                        backgroundImage: `url(${meme.memeImage})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <h1 className="absolute w-full text-center top-0 text-white font-bold text-2xl p-4" style={{
                            textShadow: '1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black'
                        }}>
                            {meme.topText}
                        </h1>
                        <h1 className="absolute w-full text-center bottom-0 text-white font-bold text-2xl p-4" style={{
                            textShadow: '1px 1px 0 black, -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black'
                        }}>
                            {meme.bottomText}
                        </h1>
                    </div>
                </div>
            </div>
        </>
    )

}


export default heroSection;