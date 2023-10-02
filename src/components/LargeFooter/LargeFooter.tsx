import "./LargeFooter.css"
import legoLogo from "../../assets/LegoLogo.png"
import { IoLocationOutline } from "react-icons/io5"

const LargeFooter = () => {
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
      <div className="large-footer">
        <div className="row justify-content-around py-5 ps-4">
          <div className="col-md-2 col-sm-12 p-2">
            <img className="footer-logo mb-3" src={legoLogo} alt="" />
            <div className="location-badge mb-3">
              <IoLocationOutline size={"20px"} /> Egypt
            </div>
            <div className="footer-link">Gift Cards</div>
            <div className="footer-link">LEGO Catalogs</div>
            <div className="footer-link">Find a LEGO Store</div>
          </div>

          {footerData.map((section, index) => (
            <div
              key={index}
              className="col-md-2 col-sm-12 mb-sm-5 justify-content-around "
            >
              <div className="fw-bold mb-3 text-uppercase">{section.title}</div>
              {section.links.map((link, index2) => (
                <div key={index2} className="footer-link">
                  {link}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="row justify-content-around py-5 ps-4">
              
        </div>
      </div>
    </>
  )
}

export default LargeFooter
