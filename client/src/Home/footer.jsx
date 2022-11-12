import StyleHome from "./footer.module.css"


export default function Footer(){


    return(
        <>
         
         <div className={StyleHome.footerdiv}>
                  <div className={StyleHome.aboutdiv}>
                        <h4>ABOUT</h4>  <h4> FOOD</h4>
                        <h4>EXERCISE</h4>
                        <h4> APPS</h4>
                        <h4>COMMUNITY</h4>
                        <h4>BLOG</h4>
                        <h4> PREMIUM</h4>    
                  </div>
                  <div className={StyleHome.about2div}>
                    <p>Calorie Counter</p>
                    <p>Blog</p>
                    <p>Terms</p>
                    <p>Privacy</p>
                    <p>Contact us</p>
                    <p>Api</p>
                    <p>Jobs</p>
                    {/* <p>Feedback</p>
                    <p>Community</p>
                    <p>Guidelines</p> */}
                  </div>
                  <div className={StyleHome.about3div}>
                    <p>Ad Choices</p>
                    <p>Do not Sell My Personal Information</p>
                  </div>
                  <div className={StyleHome.about4div}>
                    <p>© 2022 MyFitnessPal, Inc.</p>
                  </div>
            </div>
        
        </>
    )
}