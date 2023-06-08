import { uuid4 as createId } from "uuid4";
import useForm from '../../utils/useForm'
import './Main.css'
import SingleColor from "../SingleColor/SingleColor";

const Main = () => {

  const { validators, actions, colorInput, dirty, colorsShadow } = useForm();

  return (

    <main className="main">

      <form className="form" onSubmit={actions.handleSubmit}>

        <input
          type="text"
          name="color"
          id="color-input"
          value={colorInput.color}
          placeholder="insert the color code..."
          maxLength={7}
          onChange={actions.handleChange}
          className={!validators.isColorValid && dirty ? 'error' : 'input'}
        />

        <input
          type="number"
          name="qty"
          id="qty-input"
          value={colorInput.qty}
          placeholder="qty..."
          min={10}
          max={50}
          step={10}
          onChange={actions.handleChange}
          className={!validators.isQtyValid && dirty ? 'error' : 'input'}
        />

        <button
          type="submit"
          className="submit-btn"
          disabled={!validators.isFormValid}
        >
          create
        </button>

      </form>

      <div className="shadows-container">

        {colorsShadow && colorsShadow.map(colorShadow => {

          const { rgb, type } = colorShadow;

          return <SingleColor key={createId()} rgb={rgb} type={type} />

        })}

      </div>

    </main>

  )

}

export default Main