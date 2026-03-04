"use client";

export default function LiveBackground() {
  return (
    <>
      <style>{`
        @keyframes moveBlob1 {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30vw, 20vh) scale(1.3); }
          66% { transform: translate(-10vw, 40vh) scale(0.8); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes moveBlob2 {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(-25vw, -30vh) scale(1.2); }
          66% { transform: translate(20vw, -20vh) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes moveBlob3 {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(25vw, -20vh) scale(0.9); }
          66% { transform: translate(-30vw, 15vh) scale(1.3); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes moveBlob4 {
          0% { transform: translate(0px, 0px) scale(0.8); }
          33% { transform: translate(-30vw, 30vh) scale(1.2); }
          66% { transform: translate(30vw, -10vh) scale(1); }
          100% { transform: translate(0px, 0px) scale(0.8); }
        }
        @keyframes moveBlob5 {
          0% { transform: translate(0px, 0px) scale(1.1); }
          33% { transform: translate(20vw, 35vh) scale(0.8); }
          66% { transform: translate(-25vw, -25vh) scale(1.3); }
          100% { transform: translate(0px, 0px) scale(1.1); }
        }
           @keyframes moveBlob6 {
          0% { transform: translate(0px, 0px) scale(1.2); }
          33% { transform: translate(20vw, 45vh) scale(0.8); }
          66% { transform: translate(-25vw, -25vh) scale(1.3); }
          100% { transform: translate(0px, 0px) scale(1.1); }
        }

        body { overflow-x: hidden; }

        .live-bg-container {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          width: 100%; height: 100%;
          z-index: -1;
          overflow: hidden;
          background: linear-gradient(
            135deg,
            rgba(15, 15, 20, 1) 0%,
            rgba(25, 25, 35, 1) 25%,
            rgba(35, 20, 30, 1) 50%,
            rgba(20, 25, 40, 1) 75%,
            rgba(10, 15, 30, 1) 100%
          );
        }

        .live-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          -webkit-filter: blur(60px);
          opacity: 0.95;
          will-change: transform;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
        }

        .blob-1 {
          top: -15%; left: -15%;
          width: max(50vw, 300px); height: max(50vw, 300px);
          background: radial-gradient(circle, rgba(190, 81, 3, 0.8), transparent 70%);
          animation: moveBlob1 12s infinite ease-in-out;
        }
        .blob-2 {
          bottom: -15%; right: -15%;
          width: max(45vw, 280px); height: max(45vw, 280px);
          background: radial-gradient(circle, rgba(255, 206, 27, 0.75), transparent 70%);
          animation: moveBlob2 11s infinite ease-in-out;
        }
        .blob-3 {
          top: 30%; left: 20%;
          width: max(55vw, 320px); height: max(55vw, 320px);
          background: radial-gradient(circle, rgba(193, 74, 17, 0.7), transparent 70%);
          animation: moveBlob3 14s infinite ease-in-out;
        }
        .blob-4 {
          top: 40%; right: 10%;
          width: max(40vw, 260px); height: max(40vw, 260px);
          background: radial-gradient(circle, rgba(6, 148, 148, 0.6), transparent 70%);
          animation: moveBlob4 11s infinite ease-in-out;
        }
        .blob-5 {
          top: 60%; left: 40%;
          width: max(48vw, 290px); height: max(48vw, 290px);
          background: radial-gradient(circle, rgba(13, 219, 137, 0.6), transparent 70%);
          animation: moveBlob5 13s infinite ease-in-out;
        }

        .blob-6 {
          top: 60%; left: 40%;
          width: max(48vw, 290px); height: max(48vw, 290px);
          background: radial-gradient(circle, rgba(255, 61, 87, 0.9), transparent 70%);
          animation: moveBlob6 13s infinite ease-in-out;
        }


        @media (max-width: 768px) {
          .live-blob { filter: blur(40px); -webkit-filter: blur(40px); opacity: 1; }
          .blob-1 { width: 85vw; height: 85vw; }
          .blob-2 { width: 80vw; height: 80vw; }
          .blob-3 { width: 90vw; height: 90vw; }
          .blob-4 { width: 75vw; height: 75vw; }
          .blob-5 { width: 82vw; height: 82vw; }
          .blob-6 { width: 82vw; height: 82vw; }
        }
      `}</style>

      <div className="live-bg-container">
        <div className="live-blob blob-1" />
        <div className="live-blob blob-2" />
        <div className="live-blob blob-3" />
        <div className="live-blob blob-4" />
        <div className="live-blob blob-5" />
        <div className="live-blob blob-6" />
      </div>
    </>
  );
}
