import "./random-hero.styles.scss";

function RandomHero({ heroes }) {
  const randomIndex = Math.floor(Math.random() * heroes.length);
  const randomHero = heroes[randomIndex];

  return (
    <div className="hero-data">
      <h1>{randomHero.name}</h1>
      <img src={heroes[randomIndex].img} />
      <h2>Class: {randomHero.class}</h2>
      <h3>Specialty: {randomHero.specialty}</h3>
      <h3>1st skill: {randomHero.skill1}</h3>
      {randomHero.skill2 ? <h3>2nd skill: {randomHero.skill2}</h3> : ""}
      {randomHero.spell ? <h3>Spell: {randomHero.spell}</h3> : ""}
    </div>
  );
}

export default RandomHero;
