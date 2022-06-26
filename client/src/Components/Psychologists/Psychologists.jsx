import Cards from "../Cards/Cards";
import Questions from "../Questions/Questions.jsx"
import RatingPsychologists from "../RatingPsycologists/RatingPsycologists.jsx"

export default function Psychologists() {
  return (
    <>
        <h2 className="text-3xl">Mejores Psicologos</h2>
        <RatingPsychologists/>
        {/* <Clientes con Mayor Raiting /> */}
        <hr />
        <Cards />
        <hr />
        <h2>Filter</h2>
        {/* <Filter /> */}
        <hr />

        <>
          {/* <Questions /> */}
          <Questions/>
        </>
    </>
  )
}
