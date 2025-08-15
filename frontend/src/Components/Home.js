export default function Home() {
    return (
        <div className="home-body">
            <div className="main">
                <h1 className="fade-in delay-1">Take Control of Your Money, One Goal at a Time</h1>
                <h3 className="fade-in delay-2">Your Smart Partner in Financial Success</h3>
                <p className="fade-in delay-3">Track goals, grow savings, and reach your dreams faster.</p>
            </div>
            <style>{`
                .home-body {
                    width: 100vw;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 100vh;
                }
                .main {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    padding: 20px;
                }
                .main h1 {
                    font-size: 2.5rem;
                }
                .main h3 {
                    font-size: 1.5rem;
                }
                .main p {
                    font-size: 1rem;
                }
                .fade-in {
                    opacity: 0;
                    transform: translateY(20px);
                    animation: fadeInUp 1s ease-out forwards;
                }
                .delay-1 { animation-delay: 0.3s; }
                .delay-2 { animation-delay: 0.6s; }
                .delay-3 { animation-delay: 0.9s; }
                @keyframes fadeInUp {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @media (max-width:768px){
                    .main h1 { font-size: 2rem; }
                    .main h3 { font-size: 1.2rem; }
                    .main p { font-size: 0.95rem; }
                }
                @media (max-width:480px){
                    .main h1 { font-size: 1.6rem; }
                    .main h3 { font-size: 1rem; }
                    .main p { font-size: 0.85rem; }
                }
            `}</style>
        </div>
    );
}
