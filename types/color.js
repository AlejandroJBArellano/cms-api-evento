import Cell from "../src/components/Cell.jsx";
import ColorField from "../src/components/ColorField.jsx";
export const validateHexColor = (value = "") => {
  const match = value.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/)
  return (((match ? match.length : 0) ?? 0) === 1 ) || `${value} is not a valid hex color`;
}

const colorField = {
  name: 'fontColor',
  type: 'text',
  validate: validateHexColor,
  required: true,
  admin: {
    components: {
      Field: ColorField,
      Cell,
    },
  },
};

export default colorField;