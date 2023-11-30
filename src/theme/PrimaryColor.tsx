import useThemeContext from "../context/theme-context";

type Props = {
  className: string;
};

const PrimaryColor = (props: Props) => {
  const { themeHandler } = useThemeContext();
  return (
    <button
        className={props.className}
        onClick={() => themeHandler(props.className)}
    />
  );
};

export default PrimaryColor;
