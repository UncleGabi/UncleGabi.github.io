import BasicTable from "../garrison-cost-table/garrison-cost-table.component";
import RandomHero from "../random-hero/random-hero.component";

import "./garrison-list.styles.scss";

export default function GarrisonList({ siege }) {
  return (
    <div className="garrison-container">
      <img className="garrison-img" src={siege.preview} />
      <BasicTable className="data-table" siege={siege} />
      <RandomHero heroes={siege.heroes} />
    </div>
  );
}
