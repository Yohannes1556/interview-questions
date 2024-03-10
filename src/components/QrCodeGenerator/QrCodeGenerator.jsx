import React, { useState } from 'react'
import QRCode from 'react-qr-code';
import './styles.css'

const QrCodeGenerator = () => {
    const [qrCode, setQrCode] = useState('')
    const [input, setInput] = useState('')

    function handleGenerateQrCode(){
        setQrCode(input)
        setInput('')
    }
  return (
    <div>
        <h1>QR Code Generator</h1>
        <div className='input-container'>
            <input onChange={(e)=> setInput(e.target.value)} value={input} type="text" name='qr-code' placeholder='Enter your value here' />
            <button disabled={input && input.trim()  !== '' ? false:true} onClick={handleGenerateQrCode}>Generate</button>
        </div>
        <div>
            <QRCode
            id='qr-code-value '
            value={qrCode}
            size={400}
            bgColor='white'
            />
        </div>
    </div>
  )
}

export default QrCodeGenerator;
