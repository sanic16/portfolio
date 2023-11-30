type Props = {
    className: string,
    item: {
        link: string,
        icon: string,
    }
}

const Nav = (props: Props) => {
    return(
        <li className={props.className}>
            <a href={props.item.link}>{<props.item.icon />}</a>
        </li>
    )
}

export default Nav;