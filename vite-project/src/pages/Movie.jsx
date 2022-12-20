import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
export const Movie = () => {
    let [movie, setMovie] = useState({})
    const params = useParams()
    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_URL}/movie/${params.id}?api_key=${import.meta.env.VITE_API_KEY}`)
            .then(resp => setMovie(resp.data))
            .catch(err => { })
    }, []
    )
    return Object.keys(movie).length > 0 ?
        <>
            <main className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-4">
                            <img src={`${import.meta.env.VITE_IMAGE_URL + movie.poster_path}`} className="img-fluid rounded-2" />
                        </div>
                        <div className="col-8">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className="text-success display-5">{movie.title}</h1>
                                </div>
                                <div className="col-12">
                                    <small className="fw-bold text-primary">{movie.tagline}</small>
                                </div>
                                <div className="col-12 text-secondary fst-itallic my-3">
                                    {movie.overview}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main></> : <></>
}
