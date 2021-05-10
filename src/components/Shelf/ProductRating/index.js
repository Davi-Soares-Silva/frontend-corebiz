import iconStarOutline from '../../../assets/star-outline.svg'
import iconStar from '../../../assets/star.svg'

function ProductRating({ ratingCount }) {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= ratingCount) {
      stars.push(true);
    } else {
      stars.push(false);
    }
  }

  return (
    // <p>Davi</p>
    <div className="rating-container">
      { stars.map(item => item ? <img src={iconStar} alt="Estrela" /> : <img src={iconStarOutline} alt="Estrela" />)}
    </div>
  )
}

export default ProductRating;