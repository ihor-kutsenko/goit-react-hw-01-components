import PropTypes from 'prop-types';
import { getRandomHexColor } from './randomColor';


const Statistics = ({ title, stats }) => {
  return (
    <section class="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul class="stat-list">
        {stats.map(stat => {
          let randomBGColor = getRandomHexColor();
          return (
            <li class="item" key={stat.id} style={{backgroundColor:`${randomBGColor}`}}>
          <span class="label">{stat.label}</span>
          <span class="percentage">{stat.percentage}%</span>
        </li>
        
          )
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;