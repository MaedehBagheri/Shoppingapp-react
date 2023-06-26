import Layout from "../Layout/Layout";
import "./HomePage.css"
import landing from "../assets/images/Frame.png"
import card from "../assets/images/Frame 16.png"
const Home =()=>{
    return(
        <>
       <Layout>
        <div className="landing">
            <div><h1>سامانه مدیریت <span  className="header">هوشمند</span><br/> سفارش های اینترنتی</h1></div>
            <div><button className="video-btn">مشاهده ویدیو معرفی</button></div>
            <div><p className="landing-text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ<br/>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                </p></div>
        </div>
        <section className="frame-2">
            <div><button className="show-btn">حالت نمایش</button></div>
            <div><h1>سیستمی کاملا تحت وب و انلاین</h1></div>
            <div><p className="frame-2_text">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
                 از طراحان گرافیک است، چاپگرها و <br/>متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، 
                  و آینده، شناخت فراواو جوابگوی سوالات پیوسته.</p></div>
            <div><img src={landing} alt ={landing} /></div>
        </section>
        <section className="frame-3">

         <div className="web-option">
         <div><button className="option-btn">امکانات</button></div>
            <div><p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p></div>
            <div><h1>جدیدترین مدل مدیریت سبد خریدها</h1></div>
         </div>

            <div className="options-card">
                <div className="card">
                    <div><img src={card} alt={card} /></div>
                    <div><h4>ثبت محصول</h4></div>
                    <div><p>لورم ایپسوم متن ساختگی با 
                        <br/>تولید سادگی نامفهوم از صنعت چاپ
                    </p></div>
                </div>
                <div className="card">
                    <div><img src={card} alt={card} /></div>
                    <div><h4>ثبت محصول</h4></div>
                    <div><p>لورم ایپسوم متن ساختگی با 
                        <br/>تولید سادگی نامفهوم از صنعت چاپ
                    </p></div>
                </div>
                <div className="card">
                    <div><img src={card} alt={card} /></div>
                    <div><h4>ثبت محصول</h4></div>
                    <div><p>لورم ایپسوم متن ساختگی با 
                        <br/>تولید سادگی نامفهوم از صنعت چاپ
                    </p></div>
                </div>
                <div className="card">
                    <div><img src={card} alt={card} /></div>
                    <div><h4>ثبت محصول</h4></div>
                    <div><p>لورم ایپسوم متن ساختگی با 
                        <br/>تولید سادگی نامفهوم از صنعت چاپ
                    </p></div>
                </div>
            </div>
        </section>
       </Layout>
        </>
    )
}

export default Home;