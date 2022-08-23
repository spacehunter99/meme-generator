import React from 'react';

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "",
    })

    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(result => setAllMemes(result.data.memes))
    }, [])

    function getMemeImage() {
        let rand = Math.floor(Math.random() * allMemes.length)
        let url = allMemes[rand].url
        setMeme(prevState => {
            return {
                ...prevState,
                randomImage: url
            }
        })
    }

    function handleText(event) {
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value
            }
        })
    }
    return (
        <main>
            <div className='mainContainer'>
                <div className='textInputs'>
                    <input 
                        className="firstInput" 
                        type="text"
                        placeholder="Top text"
                        name="topText"
                        value={meme.topText}
                        onChange={handleText}
                    />
                    <input 
                        className="secondInput" 
                        type="text"
                        placeholder="Bottom text"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleText}
                    />
                </div>
                <button 
                    className='button' 
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
                <div className='meme'>
                    <img src={meme.randomImage} alt="meme_image" className='memeImage'/>
                    <h2 className="memeTextTop">{meme.topText}</h2>
                    <h2 className="memeTextBottom">{meme.bottomText}</h2>
                </div>
            </div>
        </main>
    )
}