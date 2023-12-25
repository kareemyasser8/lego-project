import {BsChevronRight} from 'react-icons/bs'
import './ArticleCard.css'

export interface ArticleCardData{
  image: string,
  title: string,
  description: string
}

interface Props{
  article: ArticleCardData
}


const ArticleCard = ({article}: Props) => {
  return (
    <div
      className="
        article-card-container
        d-flex
        flex-column
        align-items-center
        pb-4
        justify-content-center"
    >
      <div className="article-card-image w-100 mb-4">
        <img className="w-100" src={article.image} alt="" />
      </div>
  
      <h3 className="fw-bold mb-4 text-center">
        {article.title}
      </h3>

      <p className="text-center mb-4">
        {article.description}
      </p>

      <div className="fs-6 fw-bold text-center read-more-btn">
            Read More <BsChevronRight fontWeight={700}/>
      </div>
    </div>
  )
}

export default ArticleCard
