import Cards from "../Cards/Cards";
import Questions from "../Questions/Questions.jsx"

export default function Psychologists() {
  return (
    <>
        <h1>Psicologos</h1>
        <hr />
        <h2>ClientsFeedback</h2>
        {/* <ClientsFeedback /> */}
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
