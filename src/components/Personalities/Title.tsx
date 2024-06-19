interface TitleProps {
  text: React.ReactNode,
  className: string
}

const Title: React.FC<TitleProps> = ({ text, className }: TitleProps) => {
  return (<h1 className={className}> {text}</h1 >)
}

export default Title;