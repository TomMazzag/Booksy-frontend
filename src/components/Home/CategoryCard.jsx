// src/Components/Home/CategoryCard.jsx
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import "./CategoryCard.css"

const CategoryCard = ({ category }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/filter', { state: { selected: category } });
    };
    
return (
    <div className="category-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
        <h3>{category.name}</h3>
        <img src={category.image} alt={category} />
    </div>
    );
};

CategoryCard.propTypes = {
    category: PropTypes.string.isRequired,
};
export default CategoryCard;
