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
      <div className="fs-5 fw-bold  article-card-title lh-sm text-center mb-4">
        {article.title}
      </div>
      <div className="article-card-description text-center mb-4" style={{fontSize:'0.9rem'}}>
        {article.description}
      </div>

      <div className="fs-6 fw-bold text-center read-more-btn">
            Read More <BsChevronRight fontWeight={700}/>
      </div>
    </div>
  )
}

export default ArticleCard
