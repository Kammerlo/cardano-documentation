import React, { useRef } from 'react'
import CopyIcon from '@site/src/components/icons/Copy.svg'

const FaucetAddresses = ({ preProduction, preview }) => {
  const preProdRef = useRef(null)
  const previewRef = useRef(null)
  const handleCopyToClipboard = (value, ref) => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        if (ref.current) {
          ref.current.select()
        }
      })
      .catch((err) => {
        console.error('Failed to copy: ', err)
      })
  }
  return (
    <>
      {window.location.href ===
        'https://docs.cardano.org/cardano-testnets/tools/faucet/' && (
        <div className="addresses-wrapper">
          <strong>Pre-production faucet address:</strong>
          <div className="copy-address-container">
            <input
              className="copy-address-input"
              ref={preProdRef}
              value={preProduction}
              readOnly
            />
            <button
              className="copy-address"
              onClick={() => handleCopyToClipboard(preProduction, preProdRef)}
            >
              <CopyIcon />
            </button>
          </div>
          <strong>Preview faucet address:</strong>
          <div className="copy-address-container">
            <input
              className="copy-address-input"
              ref={previewRef}
              value={preview}
              readOnly
            />
            <button
              className="copy-address"
              onClick={() => handleCopyToClipboard(preview, previewRef)}
            >
              <CopyIcon />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default FaucetAddresses
