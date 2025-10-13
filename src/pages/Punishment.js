import React from 'react'
import Banner from '../components/Banner'
import './Punishment.css'

const Punishment = () => {
  return (
    <>
     <Banner
        title="punishment policy"
        image={require("../assets/parents-guide-img.jpg")}
        breadcrumbs={[
          { label: "HOME", link: "/home" },
          { label: "Punishment policy", link: "/Punishment" },
        ]}
      />
    <div className="punishment-policy">
      <h2 className="punishment-heading">Punishment Policy</h2>

      <div className="punishment-card">
        <h3>Red Card</h3>
        <p>
          Careless and untidy work in academics leads to the award of a Red Card,
          which has to be signed by the subject teacher on each day of the week during
          which the student is on the Red Card. If the progress during the week is satisfactory,
          the Red Card is discontinued.
        </p>
      </div>

      <div className="punishment-card">
        <h3>Yellow Card</h3>
        <p>
          Serious offences which reflect adversely on a student’s conduct (e.g., breaking bounds,
          disobedience, telling lies) indicate the award of a Yellow Card, which deprives the offender
          of availing of any privileges in the school for a week.
        </p>
        <p>
          A student awarded with a Yellow Card has to wear a yellow band (provided by the school)
          for the whole duration of his/her punishment. He/She is not allowed to attend any programs,
          picnics, outings, or buy any sweets, drinks, or ice-cream from the canteen while on a Yellow Card.
        </p>
        <p>
          The award of three Yellow Cards in an academic year in quick succession may lead to the expulsion
          of the offender from the school on disciplinary grounds.
        </p>
      </div>

      <div className="punishment-card">
        <h3>Forms of Disciplinary Measures</h3>
        <ul>
          <li>Detention during the break</li>
          <li>Fine</li>
          <li>Expulsion</li>
          <li>Rustication</li>
        </ul>
      </div>
    </div>
       </>
  )
}

export default Punishment
