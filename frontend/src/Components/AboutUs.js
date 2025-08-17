import Logo from "../Assets/logo192.png";

export default function AboutUs() {
    return (
        <div className="about-page">
            <div className="aboutus">
                <div className="about-left">
                    <h1>About Us</h1>
                    <p>
                        At Smart Finance Tracker, we make financial planning simple and effective.
                        From setting goals to getting investment tips and expert advice, we help
                        you save smart, invest wisely, and achieve your dreams faster.
                    </p>
                </div>
                <div className="about-right">
                    <img src={Logo} alt="Logo" />
                </div>
            </div>

            <div className="services-section">
                <h1>Our Services</h1>
                <div className="services">
                    <div className="s1">
                        <h4>Single Goal Planning</h4>
                        <p>Plan, track, and achieve one financial goal with clear savings targets.</p>
                    </div>
                    <div className="s1">
                        <h4>Multi-Goal Planning</h4>
                        <p>Manage and prioritize multiple goals either one after another or all at once.</p>
                    </div>
                    <div className="s1">
                        <h4>Funds Recommendation</h4>
                        <p>Get tailored investment suggestions based on your goals and risk profile.</p>
                    </div>
                    <div className="s1">
                        <h4>Expert Consultation</h4>
                        <p>Connect with financial advisors via video calls for personalized guidance.</p>
                    </div>
                </div>
            </div>

            <style>{`
                .about-page {
                    width: 100vw;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .aboutus, .services-section {
                    width: 100%;
                    padding: 80px 20px;
                    display: flex;
                    justify-content: space-between;
                    flex-wrap: wrap;
                    box-sizing: border-box;
                }
                .about-left {
                    width: 50%;
                    min-width: 300px;
                }
                .about-left h1 { margin-bottom: 20px; font-size: 2.5rem; }
                .about-left p { line-height: 1.6; font-size: 1.1rem; }
                .about-right {
                    width: 40%;
                    min-width: 200px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .about-right img { max-width: 100%; height: auto; }
                .services-section { flex-direction: column; align-items: center; text-align: center; }
                .services-section h1 { margin-bottom: 40px; font-size: 2.5rem; }
                .services { display: flex; flex-wrap: wrap; gap: 30px; justify-content: center; }
                .s1 { width: 280px; padding: 20px; border-radius: 8px ; border:1px solid black ;  box-shadow: 5px 5px #80dceaff; transition:transform .2s;}
                .s1 h4 { margin-bottom: 10px; }
                .s1:hover{
                    transform: scale(1.1);
                }
                @media (max-width: 768px) {
                    .aboutus { flex-direction: column; text-align: center; padding: 40px 20px; }
                    .about-left, .about-right { width: 100%; }
                    .services { flex-direction: column; gap: 20px; }
                }
            `}</style>
        </div>
    );
}
