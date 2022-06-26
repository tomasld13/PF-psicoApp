import Cards from "../Cards/Cards";
import Questions from "../Questions/Questions.jsx"
import RatingPsychologists from "../RatingPsycologists/RatingPsycologists.jsx"

export default function Psychologists() {
  return (
    <>
        <h1>Psicologos</h1>
        <hr />
        <h2>Psicologos con mayor rating</h2>
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
