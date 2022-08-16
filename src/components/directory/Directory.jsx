import { CategoryItem } from "../category-item/CategoryItem";
import './Directory.style.scss';

export const Directory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem category={category}></CategoryItem>
      ))}
    </div>
  );
};
