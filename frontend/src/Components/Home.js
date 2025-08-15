export default function Home(){
    return(
        <div className="body" >
            <div className="Main">
                <h1 className="fade-in delay-1">Take Control of Your Money, One Goal at a Time</h1>
                <h3 className="fade-in delay-2">Your Smart Partner in Financial Success</h3>
                <p className="fade-in delay-3">Track goals, grow savings, and reach your dreams faster. </p>
            </div>
            <style>{`
                .Main{
                    display:flex;
                    justify-content:center;
                    flex-direction:column;
                    align-items:center;
                    height:100vh;
                }
                .fade-in {
                    opacity: 0;
                    transform: translateY(20px);
                    animation: fadeInUp 1s ease-out forwards;
                }

                .delay-1 { animation-delay: 0.3s; }
                .delay-2 { animation-delay: 0.6s; }
                .delay-3 { animation-delay: 0.9s; }
                .delay-4 { animation-delay: 1.2s; }

                @keyframes fadeInUp {
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
                }
                `}
            </style>
        </div>
    )
}