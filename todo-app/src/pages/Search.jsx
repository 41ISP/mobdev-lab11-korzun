import { useState } from "react"
import "./Search.css"
import CarCard from "../components/CarCard"

const Search = () => {
    const [car, setCar] = useState("")
    const [cars, setCars] = useState(undefined)
    const handleSubmit = async (e) => {
        e.preventDefault()
        // setError("")
        setCars(undefined)
        try {
            const trimmedSetCar = car.trim()
            if (trimmedSetCar.length <= 0) return

            const parameters = new URLSearchParams({
                make: car
            })
            const res = await fetch(`https://carapi.app/api/submodels/v2?${parameters.toString()}`)
            const json = await res.json()
            // if (json.Response === "False") {
            //     throw new Error("Не получилось получить фильмы")
            // }
            console.log(json)
            setCars(json)
        } catch (err) {
            // setError(err.message)
            console.error(err)
        }
    }
    return (
        <>

            <h1>Поиск автомобилей</h1>

            <form onSubmit={handleSubmit} className="search-box">
                <input value={car} onChange={(e) => setCar(e.target.value)} type="text" placeholder="Введите марку, модель или год..." />
            </form>

            <div className="car-list">
                {cars && cars.data.map((car) => <CarCard key={car.id} {...car} />)}

                {/* <div className="car-card">
                    <h3>Toyota Camry</h3>
                    <p>Submodel: LE</p>
                    <p className="year">Год: 2018</p>
                </div>

                <div className="car-card">
                    <h3>Toyota Corolla</h3>
                    <p>Submodel: SE</p>
                    <p className="year">Год: 2020</p>
                </div>

                <div className="car-card">
                    <h3>Honda Civic</h3>
                    <p>Submodel: Sport</p>
                    <p className="year">Год: 2019</p>
                </div>

                <div className="car-card">
                    <h3>Honda Accord</h3>
                    <p>Submodel: EX-L</p>
                    <p className="year">Год: 2021</p>
                </div>

                <div className="car-card">
                    <h3>BMW 3 Series</h3>
                    <p>Submodel: 330i</p>
                    <p className="year">Год: 2017</p>
                </div>

                <div className="car-card">
                    <h3>BMW X5</h3>
                    <p>Submodel: xDrive40i</p>
                    <p className="year">Год: 2022</p>
                </div>

                <div className="car-card">
                    <h3>Mercedes-Benz C-className</h3>
                    <p>Submodel: C200</p>
                    <p className="year">Год: 2016</p>
                </div>

                <div className="car-card">
                    <h3>Volkswagen Golf</h3>
                    <p>Submodel: GTI</p>
                    <p className="year">Год: 2015</p>
                </div>

                <div className="car-card">
                    <h3>Ford Mustang</h3>
                    <p>Submodel: GT</p>
                    <p className="year">Год: 2020</p>
                </div>

                <div className="car-card">
                    <h3>Audi A4</h3>
                    <p>Submodel: Premium</p>
                    <p className="year">Год: 2019</p>
                </div> */}

            </div>
        </>
    )
}
export default Search