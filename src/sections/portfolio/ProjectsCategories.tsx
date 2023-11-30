import { useState } from "react";
import CategoryButton from "./CategoryButton";

type Props = {
  categories: string[];
  onFilterProjects: (category: string) => void;
};

const ProjectsCategories = (props: Props) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const changeCategoryHandler = (activeCat: string) => {
    setActiveCategory(activeCat);
    props.onFilterProjects(activeCat)
  };

  return (
    <div className="portfolio__categories">
      {props.categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          onChangeCategory={() => changeCategoryHandler(category)}
          className={`btn cat__btn ${activeCategory === category ? 'primary' : 'white'}`}
        />
      ))}
    </div>
  );
};

export default ProjectsCategories;
