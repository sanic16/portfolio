type Props = {
    category: string,
    onChangeCategory: (category: string) => void,
    className: string
}

const CategoryButton = (props: Props) => {
  return (
    <button
        className={props.className}
        onClick={() => props.onChangeCategory(props.category)}
    >
        {props.category}
    </button>
  )
}

export default CategoryButton