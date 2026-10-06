import { useState } from 'react'
import fallbackImage from '../../assets/images/institute/image-fallback.svg'

export default function SafeImage({ src, alt, className = '', ...props }) {
  const [imageSrc, setImageSrc] = useState(src || fallbackImage)

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      onError={() => setImageSrc(fallbackImage)}
      {...props}
    />
  )
}
