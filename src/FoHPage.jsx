import './FoHPage.css'
import decorativeShapes from './assets/decorative-shapes.svg'
import Navbar from "./components/Navbar.jsx";

function FoHPage() {
  return (
      <div>
      <Navbar/>
    <div className="foh-page">
      <div className="foh-background">
        <img src={decorativeShapes} alt="Decorative Shapes" className="foh-graphic" />
      </div>
      <div className="foh-content">
        <h1 className="foh-title">THE FESTIVAL OF HOPE</h1>
        <div className="foh-description">
          <p>
            The Festival of Hope is a global initiative presented by the International Baccalaureate to amplify youth voice too and empower their role to be solutionaries in our shared effort to address global issues. The initiative collaborates with schools around the world to host both offline and virtual events. The Festival of Hope was designed to create spaces that amplify youth voice about important global challenges and issues we are facing today. Through this project, we strive to bring this renowned event to Keystone, thus demonstrating the potential of Chinese students and community in the aspect of making change.
          </p>
        </div>
        <div className="foh-navigation">
          <a href="/" className="back-link">← Back to Home</a>
        </div>
      </div>
    </div>
      </div>
  )
}

export default FoHPage
