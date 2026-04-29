import React, { useEffect, useRef, useState } from "react";

const SplashScreen = ({ onFinish }) => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Inline styles
  const styles = {
    container: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "#ffffff",
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
    },
    videoWrapper: {
      position: "relative",
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    video: {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "auto",
      height: "100vh",
      minWidth: "100vw",
      transform: "translate(-50%, -50%)",
      objectFit: "cover",
      opacity: isLoaded ? 1 : 0,
      transition: "opacity 0.3s ease",
    },
    loader: {
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "15px",
      zIndex: 10,
    },
    spinner: {
      width: "50px",
      height: "50px",
      border: "3px solid #ddd",
      borderTopColor: "#333",
      borderRadius: "50%",
      animation: "spin 1s linear infinite",
    },
    loadingText: {
      color: "#333",
      fontSize: "18px",
      fontFamily: "sans-serif",
      margin: 0,
    },
  };

  // Desktop video style (full cover)
  const desktopVideoStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  // Inject keyframes & CSS
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.id = "splash-screen-styles";
    styleSheet.innerText = `
      @keyframes spin { 
        to { transform: rotate(360deg); } 
      }
      
      /* Mobile: Video contain mode */
      @media (max-width: 768px) {
        .splash-video-mobile {
          width: 100% !important;
          height: auto !important;
          max-height: 100vh !important;
          object-fit: contain !important;
          position: relative !important;
          top: auto !important;
          left: auto !important;
          transform: none !important;
          min-width: auto !important;
        }
      }
      
      /* Desktop: Video cover mode */
      @media (min-width: 769px) {
        .splash-video-desktop {
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          transform: none !important;
          min-width: auto !important;
        }
      }
    `;
    document.head.appendChild(styleSheet);

    // Force white background
    document.body.style.backgroundColor = "#ffffff";
    document.documentElement.style.backgroundColor = "#ffffff";
    document.body.style.margin = "0";
    document.body.style.padding = "0";

    // Check mobile on mount
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();

    return () => {
      const existingSheet = document.getElementById("splash-screen-styles");
      if (existingSheet) {
        document.head.removeChild(existingSheet);
      }
      document.body.style.backgroundColor = "";
      document.documentElement.style.backgroundColor = "";
    };
  }, []);

  // Video load and play
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const applyVideoStyles = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      
      if (mobile) {
        // Mobile: Reset inline styles to let CSS class take over
        video.style.width = "";
        video.style.height = "";
        video.style.objectFit = "";
        video.style.position = "";
        video.style.top = "";
        video.style.left = "";
        video.style.transform = "";
        video.style.minWidth = "";
      } else {
        // Desktop: Apply desktop styles
        Object.assign(video.style, desktopVideoStyle);
        video.style.transform = "none";
        video.style.minWidth = "auto";
      }
    };

    applyVideoStyles();

    const handleCanPlay = () => {
      setIsLoaded(true);
      video.play().catch(() => {});
    };

    // ✅ Video khatam hone par hi onFinish call hoga
    const handleEnded = () => {
      setTimeout(onFinish, 200);
    };

    const handleError = () => {
      // Error par bhi video khatam hone ka wait nahi karenge
      onFinish();
    };

    video.addEventListener("canplaythrough", handleCanPlay);
    video.addEventListener("ended", handleEnded);
    video.addEventListener("error", handleError);

    video.load();

    // ❌ Fallback timeout - video khatam hone ka 8-second backup
    const fallbackTimeout = setTimeout(() => {
      onFinish();
    }, 8000);

    // Resize handler
    const handleResize = () => {
      applyVideoStyles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      video.removeEventListener("canplaythrough", handleCanPlay);
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("error", handleError);
      window.removeEventListener("resize", handleResize);
      clearTimeout(fallbackTimeout);
    };
  }, [onFinish]);

  return (
    <div id="splash-screen-container" style={styles.container} className="splash-container">
      {!isLoaded && (
        <div id="splash-loader" style={styles.loader} className="splash-loader">
          <div className="splash-spinner" style={styles.spinner} />
          <p className="splash-loading-text" style={styles.loadingText}>Loading...</p>
        </div>
      )}
      
      <div id="splash-video-wrapper" style={styles.videoWrapper} className="video-wrapper">
        <video
          id="splash-video"
          ref={videoRef}
          src="/preloader.mov"
          muted
          autoPlay
          playsInline
          preload="auto"
          className={isMobile ? "splash-video-mobile" : "splash-video-desktop"}
          style={styles.video}
        />
      </div>
    </div>
  );
};

export default SplashScreen;