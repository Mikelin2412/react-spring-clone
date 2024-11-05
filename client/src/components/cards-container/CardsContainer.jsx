import React, { useEffect } from 'react';
import styles from './cardsContainer.module.css';
import Card from '../card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getProjects } from '../../store/projects/projectActions';

const CardsContainer = ({ searchInputValue }) => {
  const dispatch = useDispatch();
  const suitableProjects = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(getProjects(searchInputValue));
  }, [searchInputValue]);

  return (
    <div className={styles.cardsContainer}>
      {!suitableProjects.length ? (
        <h2 className={styles.noResultText}>No results</h2>
      ) : (
        suitableProjects.map((cardInfo) => (
          <Card
            key={cardInfo.title}
            title={cardInfo.title}
            imageSrc={cardInfo.image}
            description={cardInfo.description}
            cardUrl={cardInfo.card}
          />
        ))
      )}
    </div>
  );
};

export default CardsContainer;
