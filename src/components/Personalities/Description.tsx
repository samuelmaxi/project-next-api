interface DescriptionProps {
  text: string,
  className: string
}

const Description: React.FC<DescriptionProps> = ({ text, className }: DescriptionProps) => {
  return <p className={className}>{text}</p>
}

export default Description