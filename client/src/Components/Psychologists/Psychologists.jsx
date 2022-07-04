import Cards from "../Cards/Cards";
import RatingPsychologists from "../RatingPsycologists/RatingPsycologists.jsx"

export default function Psychologists() {
  return (
    <>
        <h2 className="text-3xl">Mejores Psicologos</h2>
        <RatingPsychologists/>
        {/* <Clientes con Mayor Raiting /> */}
        <hr/>
        <Cards/>
        <hr />
    </>
  )
}
