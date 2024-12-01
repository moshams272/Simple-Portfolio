import footerStyle from './Footer.module.css'
export default function Footer(){
    return(
        <>
        <div className={footerStyle.footer}>
            <h1 style={{color:"#c0ffaa"}}>Contact & My Accounts</h1>
            <br />
            <h6>Phone Number: 01554556123</h6>
            <h6>Linkedin: <a style={{color:"rgb(65 151 34)"}} href="https://www.linkedin.com/in/shams272/">Mohamed Shams El-Deen</a></h6>
            <h6>Github: <a style={{color:"rgb(65 151 34)"}} href="https://github.com/moshams272">moshams272</a></h6>
            <h6>Codeforces: <a style={{color:"rgb(65 151 34)"}} href="https://codeforces.com/profile/Mo_Shams">Mo_Shams</a></h6>
            <h6>Leetcode: <a style={{color:"rgb(65 151 34)"}} href="https://leetcode.com/u/Mo_Shams/">Mo_Shams</a></h6>
        </div>
        </>
    )
}
