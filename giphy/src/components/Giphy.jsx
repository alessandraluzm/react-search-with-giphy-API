import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Loader from './Loader'

const Giphy = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            // Utiliza axios para chamar a API e salva o que recebe em results
            const results = await axios("https://api.giphy.com/v1/gifs/trending", {
                params: {
                    // Passa um dos parâmetros existentes na documentação
                    api_key: "BneCXuIwLtCqfd2zUlX6BKOMSq4fRgXb"
                }
            })
            console.log(results)
            setData(results.data.data)

            // Seta isLoading para false após os dados carregarem
            setIsLoading(false)
        }

        fetchData()
    }, [])

    const renderGifs = () => {
        // se isLoading é true, ativamos o loader
        if(isLoading){
            return <Loader />
        }
        return data.map(
            el => {
                return (
                    <div key={el.id} className="gif">
                        <img src={el.images.fixed_height.url} alt=""/>
                    </div>
                )
            }
        )
    }

    return <div className="container gifs">{renderGifs()}</div>
}

export default Giphy