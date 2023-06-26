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
            <div><p className="landing-text">
        کارت ساز آمده تا دیگر نیازی به یادداشت سفارش های خود نداشته باشید
        است،
        به راحتی سفارش های خود رامدیریت کنید <br/> وضعیت انهارا مشخص کنید.
        حتی به راحتی برگه 
        رسال را پرینت کنید و از ان استفاده کنید.
                </p></div>
        </div>
        <section className="frame-2">
            <div><button className="show-btn">حالت نمایش</button></div>
            <div><h1>سیستمی کاملا تحت وب و انلاین</h1></div>
            <div><p className="frame-2_text">سیستم کاارت ساز کاملا تحت وب طراحی شده و هیچ نیازی به هیچ سخت افزار خاصی برای دیتاهای خود ندارید.<br/>به راحتی مشتریان را مدیریت کنید وسفارشات خودرا به موقع ارسال کنید</p></div>
            <div className="frame-2_img"><img src={landing} alt ={landing} /></div>
        </section>
        <section className="frame-3">

         <div className="web-option">
         <div><button className="option-btn">امکانات</button></div>
            <div><h1>جدیدترین مدل مدیریت سبد خریدها</h1></div>
            <div><p className="option-text">بیش از صدها فروشگاه خودرا با امکانات این سامانه مدیریت کنید</p></div>
         </div>

            <div className="options-card">
                <div className="card">
                    <div><img src={card} alt={card} /></div>
                    <div><h4>ثبت پروفایل</h4></div>
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
                    <div><h4>مدیریت زمان</h4></div>
                    <div><p>لورم ایپسوم متن ساختگی با 
                        <br/>تولید سادگی نامفهوم از صنعت چاپ
                    </p></div>
                </div>
                <div className="card">
                    <div><img src={card} alt={card} /></div>
                    <div><h4>ایجاد سبد خرید</h4></div>
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