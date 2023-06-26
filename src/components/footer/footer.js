import "./footer.css"
import logo from "../../assets/images/Frame 2.png"
const Footer =() =>{
    return(
        <>
        <section className="footer">
    <div className="footer-img">
        <div><h1>هم اکنون ثبت نام کنید !</h1></div>

        <div><p>ثبت نام در کارت ساز رایگان است.همین 
            الان ثبت نام کنیدوکارت ساز رو امتحان کنید. </p></div>
        <div>
            <button className="login-btn-web">ثبت نام رایگان</button>
        </div>
    </div>


    <div className="footer-detail">
<div><h3>کارت ساز چیست؟</h3></div>
<div className="footer-text"><p>
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
 از صنعت چاپ، و با استفاده از طراحان گرافیک است،
 چاپگرها و متون بلکه روزنامه و مجله در
  ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، 
 و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای 
 زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
  متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان 
 رایانه ای علی 
    </p></div>
    <hr/>

<div>
  <div>
  <span></span>
    <span></span>
  </div>

    <div className="footer-logo">
    <span><img src={logo} alt ={logo} /></span>
    </div>
</div>
   </div>
</section>
        
        </>
    )
}

export default Footer;
