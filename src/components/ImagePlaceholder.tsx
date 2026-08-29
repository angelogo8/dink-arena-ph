type ImagePlaceholderProps = { label: string; className?: string }
/** Replace this with an <img> using object-fit: cover when official assets arrive. */
export function ImagePlaceholder({ label, className = '' }: ImagePlaceholderProps) { return <div className={`image-placeholder ${className}`} role="img" aria-label={`${label} placeholder`}><span>{label}</span></div> }
