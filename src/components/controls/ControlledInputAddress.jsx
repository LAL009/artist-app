import React, { useState, useEffect, useRef } from 'react';
import { Box, Input, Typography } from '@mui/material';
import InputLabel from './InputLabel';
import { fieldToTextField } from 'formik-mui';

const InputAddress = (props) => {
  const {
    style = {},
    placeholder = 'Address',
    styleWrap,
    textLabel,
    form: { setFieldValue, values, errors, touched },
    field: { name },
  } = props;

  const [autocomplete, setAutocomplete] = useState(null);
  const [input, setInput] = useState(values[name]);
  const [predictions, setPredictions] = useState([]);
  const predictionList = useRef();

  const onChange = React.useCallback(
    (event) => {
      setInput(event.target.value);
    },
    [setInput]
  );

  useEffect(() => {
    setAutocomplete(new window.google.maps.places.AutocompleteService());
  }, []);

  const getPredictions = (input) => {
    autocomplete?.getPlacePredictions(
      { input, componentRestrictions: { country: 'us' } }, // set only united states
      (predictions) => {
        if (predictions) {
          const filteredPredictions = predictions.filter((prediction) => {
            return prediction.terms.length === 5;
          });
          setPredictions(
            filteredPredictions.map((prediction) => prediction.description)
          );
        }
      }
    );
  };

  // as the user types, get predictions only if there is a query
  useEffect(() => {
    if (input?.length > 0) {
      getPredictions(input);
    }
  }, [input]);

  const selectAddress = (address) => setInput(address);

  const showPredictions = () => {
    if (predictions.length === 0 || input.length === 0) {
      return false;
    } else {
      if (predictions.includes(input)) {
        return false;
      } else {
        return true;
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = ({ code }) => {
    switch (code) {
      case 'ArrowUp':
        handleArrowUp();
        break;
      case 'ArrowDown':
        handleArrowDown();
        break;
      case 'Enter':
        handleEnter();
        break;
    }
  };

  // if possible, focus the previous prediction, otherwise focus the text input
  const handleArrowUp = () => {
    if (predictionList.current) {
      if (document.activeElement.previousSibling) {
        document.activeElement.previousSibling.focus();
      } else {
        document.getElementById('autocomplete-address-input').focus();
      }
    }
  };

  // if possible, focus the next prediction
  const handleArrowDown = () => {
    if (predictionList.current) {
      if (document.activeElement.className !== 'prediction') {
        predictionList.current.childNodes[0].focus();
      } else {
        if (document.activeElement.nextSibling) {
          document.activeElement.nextSibling.focus();
        }
      }
    }
  };

  // set the current focused prediction as the selected address
  const handleEnter = () => {
    if (predictionList.current) {
      setInput(document.activeElement.childNodes[0].innerHTML);
    }
  };

  useEffect(() => {
    // getReturnValue(input);
    setFieldValue(name, input);
  }, [input]);

  return (
    <Box
      sx={{
        ...styleWrap,
        position: 'relative',
      }}
    >
      {textLabel && (
        <InputLabel
          text={textLabel}
          styleWrap={{
            marginBottom: '7.5px',
          }}
        />
      )}

      <Input
        {...fieldToTextField(props)}
        type="text"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.13)',
          padding: '18px 18px',
          fontSize: '16px',
          borderRadius: '8px',
          color: '#FFFFFF',
          fontWeight: '600',
          height: '52px',
          width: '100%',
          fontFamily: 'var(--font-family-montserrat)',
        }}
        style={style}
        id="autocomplete-address-input"
        placeholder={placeholder}
        onChange={onChange}
        disableUnderline={true}
      />
      {showPredictions() && (
        <Box
          sx={{
            position: 'relative',
          }}
        >
          <Box
            sx={{
              backgroundColor: '#FFFFFF',
              color: '#000',
              padding: '12px 12px',
              borderRadius: '8px',
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              zIndex: 2,
            }}
          >
            <Box className="predictions-list" ref={predictionList}>
              {predictions.map((prediction, key) => {
                return (
                  <Box
                    key={key}
                    className="prediction"
                    tabIndex="0"
                    onClick={() => selectAddress(prediction)}
                  >
                    <Typography
                      component="h6"
                      sx={{
                        fontFamily: 'var(--font-family-montserrat)',
                        fontSize: '13px',
                        fontWeight: 600,
                        lineHeight: 1.5,
                        color: 'rgb(70, 78, 98)',
                        padding: '4px 0',
                      }}
                    >
                      {prediction}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      )}
      {errors[name] && touched[name] && (
        <Typography sx={{ color: 'red', fontSize: '13px' }}>
          {errors[name]}
        </Typography>
      )}
    </Box>
  );
};

export default InputAddress;
