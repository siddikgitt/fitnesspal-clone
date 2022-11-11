import { useState } from "react"
import StyleHome from "./home.module.css"


export default function HomePage(){
  const [hover,setHover]=useState(0)
    const [card,setCard]=useState(0)

    const [auth,setAuth]=useState(false)
        

    return(
        <> 
        {/* Navbar  */}
            <div className={StyleHome.navdiv}>

                <h4 className={StyleHome.navlogo}>myfitnesspal</h4>
                <h4 style={{cursor: "pointer"}} onClick={()=>setAuth(!auth)}>LOG IN</h4>
            </div>

           {/*         NAVBAR AFTER  LOGIN  */}
    {auth ? <div className={StyleHome.nav2div}>
                    <div  className={StyleHome.nav2logodiv}><h4 className={StyleHome.nav2logo}>myfitnesspal</h4></div>
               <div className={StyleHome.nav2info}>
                <p>Hi,</p> <p className={StyleHome.nav2name}>Deepak</p>

                <p>|</p>

                <div className={StyleHome.nav2imgdiv}>

                    <img  className={StyleHome.nav2img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL6LOv4ybfr9ZTSE3k45QjPIzXA4mSB77OJQ&usqp=CAU" alt="" />
                    <img className={StyleHome.nav2img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10gy2dUHVofVtPGS_sGbpNk1aRoqh8Bg_5KMrHZ2atqxQfW3K2XMx1sw-Qc5pe6ME-XA&usqp=CAU" alt="" />
                    <img  className={StyleHome.nav2img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX6XmVaKMw3i65yRAN6Ak4MXE6eQTqxNSb4onBhTL6erurw0s5tHetTt_L6eJzK9wgans&usqp=CAU" alt="" />
                    <img className={StyleHome.nav2img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp_JgYic_DL7fr0LOU9B9uCaDIGFeaAYXVkQ&usqp=CAU" alt="" />
                </div>


                <p>|</p>

                <p className={StyleHome.nav2color}>Help</p>

                <p>|</p>

                <p className={StyleHome.nav2color}>Settings</p>

                <p>|</p>

                <p className={StyleHome.nav2color}>Logout</p>

                <p>|</p>

                <p className={StyleHome.nav2follow}>Follow us:</p>
                <div className={StyleHome.nav2imgdiv}>
                   <img className={StyleHome.nav2img} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png" alt="" />
                   <img className={StyleHome.nav2img} src="data:image/png;base64,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" alt="" />
                </div>
               
              </div>
         </div> : "" }


       {auth ? <div className={StyleHome.myhome}>
                <div className={StyleHome.homediv}>
                      <button onClick={()=> setHover(0)} style={ hover==0 ?{backgroundColor:"rgb(32, 76, 115)"} :{backgroundColor:"rgb(36, 88, 184)"} } className={StyleHome.homebutton}>MY HOME</button>
                      <button onClick={()=> setHover(1)} style={ hover==1 ?{backgroundColor:"rgb(32, 76, 115)"} :{backgroundColor:"rgb(36, 88, 184)"} } className={StyleHome.homebutton}>FOOD</button>
                      <button onClick={()=> setHover(2)} style={ hover==2 ?{backgroundColor:"rgb(32, 76, 115)"} :{backgroundColor:"rgb(36, 88, 184)"} } className={StyleHome.homebutton}>EXERCISE</button>
                      <button onClick={()=> setHover(3)} style={ hover==3 ?{backgroundColor:"rgb(32, 76, 115)"} :{backgroundColor:"rgb(36, 88, 184)"} }  className={StyleHome.homebutton}>REPORTS</button>
                      <button className={StyleHome.homebutton}>APPS</button>
                      <button className={StyleHome.homebutton}>COMMUNITY</button>  
                      <button className={StyleHome.homebutton}>BLOG</button>
                      <button className={StyleHome.homebutton}>PREMIUM</button>
                </div>
        </div> : "" }
        
        {/* HOME HOVER DIV */}
       {auth && hover==0 ? <div className={StyleHome.hoverdiv}>
                <div className={StyleHome.hover2div}>
                      <button className={StyleHome.hoverdivbutton}>HOME</button>
                      <button className={StyleHome.hoverdivbutton}>Goals</button>
                      <button className={StyleHome.hoverdivbutton}>Check-in</button>
                      <button className={StyleHome.hoverdivbutton}>Mail</button>
                      <button className={StyleHome.hoverdivbutton}>Profile</button>
                      <button className={StyleHome.hoverdivbutton}>My Blog</button>  
                      <button className={StyleHome.hoverdivbutton}>Friend</button>
                      <button className={StyleHome.hoverdivbutton}>Settings</button>
                </div>
        </div>: "" }

        {/* FOOD HOVER DIV */}
        { auth && hover=== 1 ? <div className={StyleHome.hoverdiv}>
                <div className={StyleHome.hover2div}>
                      <button className={StyleHome.hoverdivbutton}>Food Diary</button>
                      <button className={StyleHome.hoverdivbutton}>Database</button>
                      <button className={StyleHome.hoverdivbutton}>My Foods</button>
                      <button className={StyleHome.hoverdivbutton}>MY Meals</button>
                      <button className={StyleHome.hoverdivbutton}>Recipes</button>
                      <button className={StyleHome.hoverdivbutton}>Settings</button>  
                     
                </div>
        </div> : ""}

        {/* EXERCISE HOVER DIV */}
       { auth && hover===2 ? <div className={StyleHome.hoverdiv}>
                <div className={StyleHome.hover2div}>
                      <button className={StyleHome.hoverdivbutton}>Exercise Diary</button>
                      <button className={StyleHome.hoverdivbutton}>Database</button>
                      <button className={StyleHome.hoverdivbutton}>My Exercise</button>
                      <button className={StyleHome.hoverdivbutton}>Settings</button>
                      
                </div>
        </div> : ""}
            
            {/* REPORTS HOVER DUIV */}
           { auth && hover===3 ? <div className={StyleHome.hoverdiv}>
                <div className={StyleHome.hover2div}>
                      <button className={StyleHome.hoverdivbutton}>Charts</button>
                      <button className={StyleHome.hoverdivbutton}>Export Data</button>
                      <button className={StyleHome.hoverdivbutton}>Weekly Digest</button>
                </div>
        </div> : ""}

   {/* HOVER DIV END HERE************************************************************************************************** */}

       






            {/* GOOD HEALTH DIV START HERE */}

            <div className={StyleHome.goodhealthdiv}>
                <div className={StyleHome.gooddiv2}>
                    <h1 className={StyleHome.goodh1}>Good health starts with what you eat.</h1>
                    <p> Want to eat more mindfully? Track meals, learn about your habits, and reach your goals with MyFitnessPal.</p>
                    
                    <button className={StyleHome.goodbutton}>START FOR FREE</button>
                </div>
                <div className={StyleHome.goodimgdiv}>
                    <img className={StyleHome.goodimg} src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero-slice%402x.e3eec8a8.png&w=1920&q=75" alt="Food img" />
                </div>
            </div>



        {/* LOG FROM OVER START HERE */}

        <div className={StyleHome.logdiv}>
            <div className={StyleHome.logimgdiv}>
                <img  className={StyleHome.logimg} src="https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Fsecondary-hero-slice%402x.png&w=512&q=75" alt="BLUEBERRIES IMG" />
            </div>
            <div className={StyleHome.logdiv2}>
                    <h1 className={StyleHome.logh1}>Log from over 14 million foods.</h1>
                    <p className={StyleHome.p1}>See a breakdown of calories and nutrients, compare serving sizes, and discover how the food you eat supports your goals.</p>
            </div>
        </div>




{/* the tools start here */}

            <div className={StyleHome.toolsdiv}>
                    <h1  className={StyleHome.toolsh1}>The Tools for Your Goals</h1>
                    <p  className={StyleHome.toolsp1}>Trying to lose weight, tone up, lower your BMI, or invest in your overall health? We give you the right features to get there.</p>
            </div>


            <div  className={StyleHome.toolsgriddiv}>
                <div className={StyleHome.toolsgrid1}>
                    <div className={StyleHome.toolsimgdiv}>
                        <img className={StyleHome.toolsimg} src="https://www.myfitnesspal.com/_next/static/media/diary.e6e4c438.svg" alt="learn track" />
                    </div>
                        <h4 className={StyleHome.toolsh4}>Learn. Track. Improve.</h4>
                        <p className={StyleHome.toolsgridp1}>Keeping a food diary helps you understand your habits and increases your likelihood of hitting your goals.</p>
                </div>
                <div className={StyleHome.toolsgrid1}>
                    <div className={StyleHome.toolsimgdiv}>
                            <img className={StyleHome.toolsimg} src="https://www.myfitnesspal.com/_next/static/media/barcode.18277ae4.svg" alt="learn track" />
                  </div>
                        <h4 className={StyleHome.toolsh4}>Logging Simplified.</h4>
                        <p className={StyleHome.toolsgridp1}>Scan barcodes, save meals and recipes, and use Quick Tools for fast and easy food tracking.</p>
                </div>
                <div className={StyleHome.toolsgrid1}>
                    <div className={StyleHome.toolsimgdiv}>
                            <img className={StyleHome.toolsimg} src="https://www.myfitnesspal.com/_next/static/media/shoeblue.28e2684f.svg" alt="learn track" />
                      </div>
                        <h4 className={StyleHome.toolsh4}>Stay Motivated.</h4>
                        <p className={StyleHome.toolsgridp1}>Join the World’s Largest Fitness Community for advice, tips, and support 24/7.</p>
                </div>

            </div>



                {/* Victory stories************************************ */}

                <div className={StyleHome.vicdiv}>
                        <h1 className={StyleHome.vich1}>VICTORY STORIES</h1>
                        <p className={StyleHome.vicp1}>Every day, more than 3,000 members reach their goals with MyFitnessPal. Get inspired for the journey ahead.</p>
                </div>

                <div className={StyleHome.photo}>
                    <div onClick={()=> {card<1 ? setCard(2) :  setCard(prev => prev-1)}} className={StyleHome.sidebar}>
                    <img className={StyleHome.vicimgside}  src="https://www.myfitnesspal.com/_next/static/media/arrow-left.fdf599cb.svg" alt=">" />
                    </div>
                    {/* div victory image and card 0000000000000000000000000*/}
                   {card==0 ? <div className={StyleHome.viccarddiv}>
                        <div className={StyleHome.vicimgdiv}>
                            <img   className={StyleHome.vicimg} src="https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Fvictory-story-3.jpg&w=1920&q=75" alt="aaaa" />
                        </div>
                        <div>
                            <h1  className={StyleHome.viccardh1}>She was eager to make a chance</h1>
                            <p  className={StyleHome.viccardp1}>Now,when i have friends starting to run and getting frusted,i tell them to just stick with it</p>
                        </div>
                    </div> : ""}

                   {card==1 ? <div className={StyleHome.viccarddiv}>
                        <div className={StyleHome.vicimgdiv}>
                            <img   className={StyleHome.vicimg} src="https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Fvictory-story-1.jpg&w=1920&q=75" alt="aaaa" />
                        </div>
                        <div>
                            <h1  className={StyleHome.viccardh1}>Eduction helped her lose 30 ponds</h1>
                            <p  className={StyleHome.viccardp1}>Now,when i have friends starting to run and getting frusted,i tell them to just stick with it</p>
                        </div>
                    </div> : ""}

                   {card==2 ? <div className={StyleHome.viccarddiv}>
                        <div className={StyleHome.vicimgdiv}>
                            <img   className={StyleHome.vicimg} src="https://www.myfitnesspal.com/_next/image?url=%2Fpages%2Fhome%2Fvictory-story-2.jpg&w=1920&q=75" alt="aaaa" />
                        </div>
                        <div>
                            <h1  className={StyleHome.viccardh1}>From fast food addict to mindful eater</h1>
                            <p  className={StyleHome.viccardp1}>Now,when i have friends starting to run and getting frusted,i tell them to just stick with it</p>
                        </div>
                    </div> : ""}
                   
                     {/*0000000000000000000000000000000000*/}
                    <div onClick={()=> {card>1 ? setCard(0):  setCard(prev => prev+1)}}  className={StyleHome.sidebar}>
                        <img className={StyleHome.vicimgside} src="https://www.myfitnesspal.com/_next/static/media/arrow-right.7d54eed8.svg"  alt="<" />
                    </div>
                </div>

                
                 <button className={StyleHome.vicbutton}>START YOUR JOURNEY TODAY</button>



            {/* RECIPE & INSPIRATION ****************************** */}

            <div  className={StyleHome.recipediv}>
            <h1 className={StyleHome.recipeh1}>Recipes & Inspiration</h1>
                        <p className={StyleHome.recipep1}>Get nutritionist-approved recipes and motivational workout tips from   MyFitnessPal experts.</p>
            </div>

            <div className={StyleHome.blogdiv}>
                <div className={StyleHome.blogdiv2}>
                    <div className={StyleHome.blogimgdiv}>
                        <img  className={StyleHome.blogimg} src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbreakfast-300-calories.d991cc82.png&w=1920&q=75" alt="" />
                    </div>
                    <h4 className={StyleHome.blogimgh4}>15 Make-Ahead Breakfasts Under 300</h4>
                     <h5 className={StyleHome.blogimgh42}>MyfitnessPal Blog</h5>
                </div>


                <div className={StyleHome.blogdiv2}>
                <div className={StyleHome.blogimgdiv}>
                        <img  className={StyleHome.blogimg} src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcheat-days.a49e92b5.jpg&w=1920&q=75" alt="" />
                    </div>
                    <h4 className={StyleHome.blogimgh4}>The Problem With Cheat Days</h4>
                     <h5 className={StyleHome.blogimgh42}>MyfitnessPal Blog</h5>
                </div>


                <div className={StyleHome.blogdiv2}>
                <div className={StyleHome.blogimgdiv}>
                        <img  className={StyleHome.blogimg} src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgetting-moving.e3e4042a.png&w=1920&q=75" alt="" />
                    </div>
                    <h4 className={StyleHome.blogimgh4}>Essential Guide to Getting Moving</h4>
                     <h5 className={StyleHome.blogimgh42}>MyfitnessPal Blog</h5>
                </div>
            </div>


        {/* Connect with apps div */}
        <div className={StyleHome.connectdiv}>
                <h1 className={StyleHome.connecth1}>Connect with over 50 apps.</h1>
                <p className={StyleHome.connectp1}>Easily link your MyFitnessPal account with apps that support your healthier lifestyle. It’s not just about calories. It’s about feeling better, looking better, and living better.</p>
        </div>

        <img  className={StyleHome.connectimg} src="https://www.myfitnesspal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-apps%402x.85e549ef.png&w=1920&q=75" alt="" />


            <p className={StyleHome.connectimgp1}>
            MyFitnessPal is one of the best weight loss apps and fitness apps, helping nearly 1 million members reach their nutrition and fitness goals every year. Members use it as a calories tracker and calorie counter to log their foods, and take advantage of the app’s food database that contains over 14 million foods. It’s not just a free calorie counter app — it’s also the best calorie counter app for people who are looking to take back control of their health and fitness.
            </p>



            {/* Footer */}

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
                    <p>Feedback</p>
                    <p>Community</p>
                    <p>Guidelines</p>
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
