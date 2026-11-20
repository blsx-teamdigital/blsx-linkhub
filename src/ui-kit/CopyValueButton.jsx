import useCopyToClipboard from '../hooks/useCopyToClipboard'

export default function CopyValueButton({ value, label }) {
  const { copied, copy } = useCopyToClipboard()

  return (
    <button
      type="button"
      className="copy-value-button"
      onClick={() => copy(value)}
      aria-label={copied ? `${label} copied` : `Copy ${label}`}
    >
      <i className={`bi ${copied ? 'bi-check2' : 'bi-copy'}`} aria-hidden="true" />
    </button>
  )
}