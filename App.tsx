export default function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F7F5FF",
        fontFamily: "Arial, sans-serif",
        color: "#222",
      }}
    >
      {/* Navigation */}
      <nav
        style={{
          background: "#6C4CF1",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 24px",
          position: "sticky",
          top: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              background: "#F4B400",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#6C4CF1",
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            M
          </div>

          <h2 style={{ margin: 0 }}>MINGLE</h2>
        </div>

        <button
          style={{
            background: "#F4B400",
            border: "none",
            padding: "10px 18px",
            borderRadius: "8px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Continue with Pi
        </button>
      </nav>

      {/* Hero */}
      <div
        style={{
          textAlign: "center",
          padding: "60px 20px",
        }}
      >
        <h1
          style={{
            color: "#6C4CF1",
            fontSize: "38px",
            marginBottom: "20px",
          }}
        >
          Welcome to Mingle
        </h1>

        <h2
          style={{
            color: "#444",
            fontWeight: "normal",
            fontSize: "22px",
            lineHeight: "1.5",
          }}
        >
          Where Connections Become Community
        </h2>

        <p
          style={{
            maxWidth: "650px",
            margin: "30px auto",
            color: "#666",
            lineHeight: "1.8",
            fontSize: "18px",
          }}
        >
          A modern social platform where people connect, build communities,
          share ideas, trade through the marketplace, and grow together in the
          Pi ecosystem.
        </p>

        <button
          style={{
            background: "#6C4CF1",
            color: "white",
            border: "none",
            padding: "16px 40px",
            borderRadius: "12px",
            fontSize: "18px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Join the Community
        </button>
      </div>

      {/* Statistics */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px",
        }}
      >
        {[
          ["10K+", "Future Members"],
          ["500+", "Communities"],
          ["24/7", "Connection"],
        ].map(([number, label]) => (
          <div
            key={label}
            style={{
              width: "220px",
              background: "white",
              borderRadius: "15px",
              padding: "25px",
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <h2 style={{ color: "#6C4CF1", margin: 0 }}>{number}</h
