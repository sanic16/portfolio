import useThemeContext from "../context/theme-context"

type Props = {
    className: string
}

const BackgroundColor = (props: Props) => {
  const { themeHandler } = useThemeContext()  
  return (
    <button 
        className={props.className}
        onClick={() => themeHandler(props.className)}
    >

    </button>
  )
}

export default BackgroundColor