export const Bubbles = () => {
    const bubbles = Array.from({ length: 10 });
  
    return (
      <div className="relative w-full h-full">
        {bubbles.map((_, i) => {
          const size = Math.floor(Math.random() * 60) + 40;
          const delay = Math.random() * 2;
          const left = Math.random() * 100;
          return (
            <span
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-blue-400 to-cyan-300 opacity-70 hover:scale-125 hover:blur-sm transition duration-300"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                animation: `float ${6 + delay}s ease-in-out infinite`,
                top: `${Math.random() * 80}%`,
              }}
            />
          );
        })}
      </div>
    );
  };
  