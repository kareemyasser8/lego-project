import ArticleCard, { ArticleCardData } from "../ArticleCard/ArticleCard"
import articleImage1 from "../../assets/article1.webp"
import articleImage2 from "../../assets/article2.webp"
import articleImage3 from "../../assets/article3.webp"
import AnimatedDiv from "../AnimatedDiv"

const Articles = () => {
  let articles: ArticleCardData[] = [
    {
      image: articleImage3,
      title: "Best Halloween Gifts for Kids & Adults",
      description:
        "Explore haunted hideouts and face fearsome creatures with the very best LEGO® Halloween gifts for kids and adults!",
    },
    {
      image: articleImage2,
      title: "Why the new LEGO® Ideas Viking Village was worth the wait",
      description:
        "Step into a world of Nordic legends and myths with our latest LEGO® Ideas set. Our LEGO designers tell you everything you need to know...",
    },
    {
      image: articleImage1,
      title: "How to decorate your house for Halloween",
      description:
        "Love Halloween? Get ready for the scary season with our frightening decorations...",
    },
  ]

  return (
    <>
      {/* <div className="page-layout"> */}
        <div
          className="
        d-flex
        flex-wrap
        justify-content-between
        mb-3"
        >
          <h2>Read All About It</h2>
          <div className="btn btn--rounded btn--outlined btn--outlined-blue">
            View all articles
          </div>
        </div>

        <div className="article-cards-wrapper row mb-5">
          {articles.map((article, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <AnimatedDiv index={index * 3}>
                <ArticleCard article={article} />
              </AnimatedDiv>
            </div>
          ))}
        </div>
      {/* </div> */}
    </>
  )
}

export default Articles
