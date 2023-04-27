import PropTypes from 'prop-types';

import {
  THEME_NEITRAL,
  THEME_DARK,
  THEME_LIGHT,
  useTheme,
} from '@context/ThemeProvider.jsx';

import imgDarkSide from './img/dark.jpg';
import imgLightSide from './img/light.jpg';
import imgFalcon from './img/neitral.jpg';

import styles from './ChooseSide.module.css';

const ChooseSideItem = ({ theme, text, img, classes }) => {
  const isTheme = useTheme();
  return (
    <div
      onClick={() => isTheme.change(theme)}
      className={`${styles.item} ${classes}`}
    >
      <span className={styles.item__header}>{text}</span>
      <img className={styles.item__img} src={img} alt={text} />
    </div>
  );
};

ChooseSideItem.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  img: PropTypes.string,
  classes: PropTypes.string,
};

const ChooseSide = () => {
  const elements = [
    {
      theme: THEME_LIGHT,
      text: 'Light Side',
      img: imgLightSide,
      classes: styles.item__light,
    },
    {
      theme: THEME_DARK,
      text: 'Dark Side',
      img: imgDarkSide,
      classes: styles.item__dark,
    },
    {
      theme: THEME_NEITRAL,
      text: "I'm Han Solo",
      img: imgFalcon,
      classes: styles.item__neitral,
    },
  ];
  return (
    <div className={styles.container}>
      {elements.map(({ theme, text, img, classes }, index) => {
        return (
          <ChooseSideItem
            key={index}
            theme={theme}
            text={text}
            img={img}
            classes={classes}
          />
        );
      })}
    </div>
  );
};

export default ChooseSide;
