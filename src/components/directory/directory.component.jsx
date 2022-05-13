import CategoryItem from "../category-item/category-item.component";
import "./directory.styles.scss";

const Directory = ({ category }) => {
  return (
    <div>
      <div className="directory-container">
        {category.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Directory;
