import { useState } from "react"

const CarCard = ({year, make, model, submodel}) => {
    // const [carDetails, setCarCart] = useState("")
    return (
        <div className="car-card">
                    <h3>{`${make} ${model}`}</h3>
                    <p>Submodel: {submodel}</p>
                    <p className="year">Год: {year}</p>
                </div>
    )
}

export default CarCard