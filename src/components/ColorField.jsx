import React, { Fragment, useCallback, useEffect, useState } from 'react';

// this is how we'll interface with Payload itself
import { useFieldType } from 'payload/components/forms';
// re-use Payload's built-in button component
import { Button } from 'payload/components';

// we'll re-use the built in Label component directly from Payload
import { Label } from 'payload/components/forms';

// retrieve and store the last used colors of your users
import { usePreferences } from 'payload/components/preferences';
// we'll import and reuse our existing validator function on the frontend, too
import { validateHexColor } from '../../types/color.js';
// Import the SCSS stylesheet
import './ColorField.scss';

// keep a list of default colors to choose from
const defaultColors = [
  '#0F0F0F',
  '#9A9A9A',
  '#F3F3F3',
  '#FF6F76',
  '#FDFFA4',
  '#B2FFD6',
  '#F3DDF3',
];

const baseClass = 'custom-color-picker';

const preferenceKey = 'color-picker-colors';

const ColorField = (props) => {
  const {
    path,
    label,
    required
  } = props;

  const {
    value = '',
    setValue,
  } = useFieldType({
    path,
    validate: validateHexColor,
  });

  const { getPreference, setPreference } = usePreferences();
  const [colorOptions, setColorOptions] = useState(defaultColors);
  const [isAdding, setIsAdding] = useState(false);
  const [colorToAdd, setColorToAdd] = useState('');
  useEffect(() => {
    console.log(value)
  }, [value])

  useEffect(() => {
    const mergeColorsFromPreferences = async () => {
      const colorPreferences = await getPreference(preferenceKey);
      if (colorPreferences) {
        setColorOptions(colorPreferences);
      }
    };
    mergeColorsFromPreferences();
  }, [getPreference, setColorOptions]);

  const handleAddColor = useCallback(() => {
    setIsAdding(false);
    setValue(colorToAdd);

    // prevent adding duplicates
    if (colorOptions.indexOf(colorToAdd) > -1) return;

    let newOptions = [colorToAdd, ...colorOptions];
    // newOptions.unshift(colorToAdd);

    // update state with new colors
    setColorOptions(newOptions);
    // store the user color preferences for future use
    setPreference(preferenceKey, newOptions);
  }, [colorOptions, setPreference, colorToAdd, setIsAdding, setValue]);

  return (
    <div className={baseClass}>
      <Label
        htmlFor={path}
        label={label}
        required={required}
      />
      {isAdding ? (
        <div>
          <input
            className={`${baseClass}__input`}
            type="text"
            placeholder="#000000"
            onChange={(e) => setColorToAdd(e.target.value)}
            value={colorToAdd}
          />
          <Button
            className={`${baseClass}__btn`}
            buttonStyle="primary"
            iconPosition="left"
            iconStyle="with-border"
            size="small"
            onClick={handleAddColor}
            disabled={validateHexColor(colorToAdd) !== true}
          >
            Add
          </Button>
          <Button
            className={`${baseClass}__btn`}
            buttonStyle="secondary"
            iconPosition="left"
            iconStyle="with-border"
            size="small"
            onClick={() => setIsAdding(false)}
          >
            Cancel
          </Button>
        </div>
      ):
      (
        <Fragment>
          <ul className={`${baseClass}__colors`}>
            {colorOptions.map((color, i) => (
              <li key={i}>
                <button
                  type="button"
                  key={color}
                  className={`chip ${color === value ? 'chip--selected' : ''} chip--clickable`}
                  style={{ backgroundColor: color }}
                  aria-label={color}
                  onClick={() => setValue(color)}
                />
              </li>
            )
            )}
          </ul>
          <Button
            className="add-color"
            icon="plus"
            buttonStyle="icon-label"
            iconPosition="left"
            iconStyle="with-border"
            onClick={() => {
              setIsAdding(true);
              setValue('');
            }}
          />
        </Fragment>
      )}
    </div>
  )
};

export default ColorField;