export const AnimatedBalls = () => {
    const balls = Array.from({ length: 5 });
  
    return (
      <div className="relative w-full h-[300px]">
        {balls.map((_, index) => (
          <div
            key={index}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 absolute hover:animate-bounce-spin shadow-xl transition-transform"
            style={{
              top: `${Math.random() * 80}%`,
              left: `${Math.random() * 80}%`,
              animationDuration: `${3 + Math.random() * 2}s`,
              animationDelay: `${Math.random()}s`,
            }}
          />
        ))}
      </div>
    );
  };
  