import "./CategoryItem.style.scss";

export const CategoryItem = (props) => {
  const category = props.category;
  return (
      <div className="category-container">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${category.imageUrl})` }}
        ></div>
        <div className="category-body-container">
          <h2>{category.title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
  );
};
