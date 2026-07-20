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
         A modern social platform built for meaningful conversations, trusted communities, and the Pi ecosystem.
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
    </div>
  );
}
