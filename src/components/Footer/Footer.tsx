import "./Footer.css"
import { IoLocationOutline } from "react-icons/io5"
import legoLogo from "../../assets/LegoLogo.png"
import Collapsible from "../Collapsible"

const Footer = () => {
  let footerData = [
    {
      title: "About Us",
      links: [
        "About the LEGO Group",
        "LEGO® News",
        "Sustainability",
        "Supply Chain Transparency Statement",
        "LEGO Product Certification",
        "LEGO Jobs",
        "LEGO Compliance Line",
      ],
    },
    {
      title: "Support",
      links: [
        "Contact Us",
        "Find Building Instructions",
        "Replacement Parts",
        "Shipping and Returns",
        "Payment Methods",
        "Terms & Conditions",
        "Product Recalls",
      ],
    },
    {
      title: "Attractions",
      links: ["LEGO® House", "LEGOLAND® Parks", "LEGOLAND Discovery Centers"],
    },
    {
      title: "More of us",
      links: [
        "LEGO® LIFE",
        "LEGO Education",
        "LEGO Ideas",
        "LEGO Foundation",
        "Affiliate Program",
        "Student Offers",
        "Parent Offers",
        "LEGO® Braille Bricks",
      ],
    },
  ]

  return (
    <>
      <footer className="footer footer--purple footer--cols-2">
        <div className="footer__content max-content mx-auto">
          <section className="footer__links">
            <img className="footer__logo mb-3" src={legoLogo} alt="" />
            <div className="footer__location-badge mb-3">
              <IoLocationOutline size={"20px"} /> Egypt
            </div>
            <div className="d-flex flex-column gap-3">
              <div>Gift Cards</div>
              <div>LEGO Catalogs</div>
              <div>Find a LEGO Store</div>
            </div>
          </section>

          <div className="footer__content footer__content--cols-4">
            {footerData.map((section, index) => (
              <div key={index} className="footer__column">
                <Collapsible
                  collapsibleTitle={section.title}
                  collapisbleData={section.links}
                />
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
