import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import { selectCategoriesMap } from '../../store/categories/categories.selector';

// Replaced with CategoryPreview that uses the ProductCard component.
// import ProductCard from '../../components/product-card/product-card.component';
import CategoryPreview from '../../components/category-preview/category-preview.components';

// import { CategoriesContext } from '../../context/categories.context';

const CategoriesPreview = () => {
  // const { categoriesMap } = useContext(CategoriesContext);
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <Fragment>
        {Object.keys(categoriesMap).map((title) => {
            const products = categoriesMap[title];

            return (
                <CategoryPreview  key={title} title={title} products={products} />
            );
        })}
    </Fragment>
  );
};

export default CategoriesPreview;