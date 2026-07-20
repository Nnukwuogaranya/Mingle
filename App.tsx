export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8f9ff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Navigation */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 40px",
          background: "#6C4CF1",
          color: "white",
        }}
      >
        <h2>MINGLE</h2>

        <button
          style={{
            padding: "10px 20px",
            border: "none",
            borderRadius: "8px",
            background: "#F4B400",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Continue with Pi
        </button>
      </nav>

      {/* Hero Section */}
      <div
        style={{
          textAlign: "center",
          marginTop: "100px",
          padding: "20px",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            color: "#6C4CF1",
          }}
        >
          Welcome to Mingle — Where Connections Become Community
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#555",
            marginTop: "20px",
          }}
        >
          A modern social platform built for meaningful conversations,
          trusted communities, and the Pi ecosystem.
        </p>

        <button
          style={{
            marginTop: "40px",
            padding: "15px 35px",
            border: "none",
            borderRadius: "10px",
            background: "#6C4CF1",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Join the Community
        </button>
      </div>

      {/* Features Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          padding: "60px 20px",
        }}
      >
        <div
          style={{
            width: "280px",
            padding: "25px",
            borderRadius: "15px",
            background: "white",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h2>🤝 Connect</h2>
          <p>Find friends, build relationships, and grow your network.</p>
        </div>

        <div
          style={{
            width: "280px",
            padding: "25px",
            borderRadius: "15px",
            background: "white",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h2>💬 Communities</h2>
          <p>Join discussions, groups, and meaningful conversations.</p>
        </div>

        <div
          style={{
            width: "280px",
            padding: "25px",
            borderRadius: "15px",
            background: "white",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            textAlign: "center",
          }}
        >
          <h2>🛒 Marketplace</h2>
          <p>Buy, sell, and trade using the power of the Pi ecosystem.</p>
        </div>
      </div>
    </div>
  );
}
