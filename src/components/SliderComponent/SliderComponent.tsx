import React from 'react';
import { Slider } from '@material-ui/core';
import { Box } from '@material-ui/core';
import useStyles from './sliderComponent.makeStyles';

const marks = [
  {
    value: 10,
    label: '10',
  },
  {
    value: 11,
    label: '11',
  },
  {
    value: 12,
    label: '12',
  },
  {
    value: 13,
    label: '13',
  },
  {
    value: 14,
    label: '14',
  },
  {
    value: 15,
    label: '15',
  },
  {
    value: 16,
    label: '16',
  },
  {
    value: 17,
    label: '17',
  },
  {
    value: 18,
    label: '18',
  },
  {
    value: 19,
    label: '19',
  },
  {
    value: 20,
    label: '20',
  },
];

interface SliderComponentProps {
  // onChange?: (event: Event, newValue: number) => void | undefined;
  onChange?: (event: any, newValue: any) => void | undefined;
}

// const SliderComponent: React.FC<SliderComponentProps> = React.memo(
//   function SliderComponent({ onChange }) {
//     const classes = useStyles();
//     const savedToLocalStorage: string | null =
//       localStorage.getItem('numberOfProducts');
//     const productsNumber: number =
//       savedToLocalStorage !== null ? JSON.parse(savedToLocalStorage) : 10;

//     return (
//       <Box>
//         <Slider
//           aria-label="Always visible"
//           defaultValue={10}
//           value={productsNumber}
//           onChange={onChange}
//           step={1}
//           marks={marks}
//           valueLabelDisplay="on"
//           min={10}
//           max={20}
//           className={classes.slider}
//         />
//       </Box>
//     );
//   }
// );

const SliderComponent: React.FC<SliderComponentProps> = ({ onChange }) => {
  const classes = useStyles();
  const savedToLocalStorage: string | null =
    localStorage.getItem('numberOfProducts');
  const productsNumber: number =
    savedToLocalStorage !== null ? JSON.parse(savedToLocalStorage) : 10;

  return (
    <Box>
      <Slider
        aria-label="Always visible"
        defaultValue={10}
        value={productsNumber}
        onChange={onChange}
        step={1}
        marks={marks}
        valueLabelDisplay="on"
        min={10}
        max={20}
        className={classes.slider}
      />
    </Box>
  );
};

export default SliderComponent;
