import PropTypes from 'prop-types';
import style from './Statistics.module.css';

export default function Statistics({ title, stats }) {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={style.stat_list}>
        {stats.map(el => (
          <li key={el.id} className={style.item}>
            <span className={style.label}>{el.label}</span>
            <span className={style.percentage}>{el.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
