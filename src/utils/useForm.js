import { useEffect, useState } from "react";
import Values from "values.js";

const useForm = () => {

  const COLOR_REGEX = "^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$";
  const possibileQty = ["10", "20", "30", "40", "50"];

  const [colorInput, setColorInput] = useState({ color: "#3399ff", qty: "10" });
  const [dirty, setDirty] = useState(false);
  const [colorsShadow, setColorsShadow] = useState([]);

  const handleChange = (e) => {

    const { name, value } = e.target;

    setColorInput(prevState => ({ ...prevState, [name]: value }));

    setDirty(true);

  }

  const handleSubmit = (e) => {

    e.preventDefault();

    const tintsColors = new Values(colorInput.color).tints(200 / parseInt(colorInput.qty));

    const shadesColors = new Values(colorInput.color).shades(200 / parseInt(colorInput.qty));

    const totalColors = tintsColors.reverse().concat(shadesColors);

    setColorsShadow(totalColors);

  }

  const isColorValid = colorInput.color.match(COLOR_REGEX);
  const isQtyValid = possibileQty.includes(colorInput.qty);
  const isFormValid = isColorValid && isQtyValid;

  useEffect(() => {

    const tintsColors = new Values(colorInput.color).tints(200 / parseInt(colorInput.qty));

    const shadesColors = new Values(colorInput.color).shades(200 / parseInt(colorInput.qty));

    const totalColors = tintsColors.reverse().concat(shadesColors);

    setColorsShadow(totalColors);


  }, [])

  return {

    validators: {

      isColorValid,
      isQtyValid,
      isFormValid

    },

    actions: {

      handleChange,
      handleSubmit

    },

    colorInput,
    dirty,
    colorsShadow

  }

}

export default useForm