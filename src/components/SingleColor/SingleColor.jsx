import { Toaster, toast } from 'react-hot-toast';
import rgbToHex from '../../utils/rgbToHex'
import './SingleColor.css'

const SingleColor = ({ rgb, type }) => {

  const copyCode = () => {

    const codeCopied = navigator.clipboard.writeText(rgbToHex(...rgb));

    toast.success('Code Copied!',
      {

        position: 'top-right',

        style: {
          background: '#0d1117',
          color: '#a6adba',
        },

      }
    );

  }

  return (

    <>

      <div className={`color ${type}`} style={{ backgroundColor: rgbToHex(...rgb) }} onClick={copyCode}>

        <h2>{rgbToHex(...rgb)}</h2>

      </div >

      <Toaster />

    </>

  )

}

export default SingleColor