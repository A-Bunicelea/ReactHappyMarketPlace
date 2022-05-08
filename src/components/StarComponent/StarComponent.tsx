import React, { useMemo } from 'react';
import { Star } from '@material-ui/icons';
import useStyles from './starComponent.makeStyles';

interface StarComponentProps {
  rating: number;
}

const StarComponent: React.FC<StarComponentProps> = React.memo(
  function StarComponent({ rating }) {
    const classes = useStyles();

    const starList = useMemo(() => {
      return Array(rating).fill('star');
    }, [rating]);

    return (
      <div className={classes.container}>
        {starList.map((star, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Star key={index} className={classes.star} />
        ))}
      </div>
    );
  }
);

export default StarComponent;
