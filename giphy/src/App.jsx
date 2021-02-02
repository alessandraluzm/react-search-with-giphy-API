import React, { useEffect, useState } from 'react'
import Giphy from './components/Giphy'
import axios from 'axios'

const App = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            // Utiliza axios para chamar a API e salva o que recebe em results
            const results = await axios("https://api.giphy.com/v1/gifs/trending", {
                params: {
                    // Passa um dos parâmetros existentes na documentação
                    api_key: "BneCXuIwLtCqfd2zUlX6BKOMSq4fRgXb"
                }
            })
            console.log(results)
            setData(results.data.data)
        }

        fetchData()
    }, [])
    return <div><Giphy/></div>
}

export default App 