import { useState } from "react";

export default function App() {
  const [page, setPage] = useState("landing");

  if (page === "login") {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#F7F5FF",
          fontFamily: "Arial, sans-serif",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "420px",
            background: "white",
            borderRadius: "20px",
            padding: "35px",
            boxShadow: "0 8px 25px rgba(0,0,0,.1)",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "70px",
              height: "70px",
              borderRadius: "50%",
              background: "#F4B400",
              margin: "0 auto 20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#6C4CF1",
              fontSize: "34px",
              fontWeight: "bold",
            }}
          >
            M
          </div>

          <h1
            style={{
              color: "#6C4CF1",
              marginBottom: "10px",
            }}
          >
            Welcome Back
          </h1>

          <p
            style={{
              color: "#666",
              lineHeight: "1.7",
              marginBottom: "30px",
            }}
          >
            Sign in with your Pi account to continue to Mingle.
          </p>

          <button
            style={{
              width: "100%",
              padding: "16px",
              background: "#6C4CF1",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontSize: "18px",
              cursor: "pointer",
              marginBottom: "15px",
            }}
          >
            Continue with Pi
          </button>

          <button
            onClick={() => setPage("landing")}
            style={{
              width: "100%",
              padding: "14px",
              background: "#ECE8FF",
              color: "#6C4CF1",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            ← Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F7F5FF",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <nav
        style={{
          background: "#6C4CF1",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "18px 24px",
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

          <h2>MINGLE</h2>
        </div>
        <button
          onClick={() => setPage("login")}
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
          }}
        >
          A modern social platform where people connect, build communities,
          share ideas, trade through the marketplace, and grow together in the
          Pi ecosystem.
        </p>

        <button
          onClick={() => setPage("login")}
          style={{
            background: "#6C4CF1",
            color: "white",
            border: "none",
            padding: "16px 40px",
            borderRadius: "12px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Join the Community
        </button>
      </div>

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
              boxShadow: "0 4px 12px rgba(0,0,0,.1)",
            }}
          >
            <h2 style={{ color: "#6C4CF1", margin: 0 }}>{number}</h2>
            <p>{label}</p>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "25px",
          padding: "60px 20px",
        }}
      >
        <div
          style={{
            width: "280px",
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 4px 12px rgba(0,0,0,.1)",
          }}
        >
          <h2>🤝 Connect</h2>
          <p>Meet new friends and build meaningful relationships.</p>
        </div>

        <div
          style={{
            width: "280px",
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 4px 12px rgba(0,0,0,.1)",
          }}
        >
          <h2>💬 Communities</h2>
          <p>Join groups and discussions that matter to you.</p>
        </div>

        <div
          style={{
            width: "280px",
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 4px 12px rgba(0,0,0,.1)",
          }}
        >
          <h2>🛒 Marketplace</h2>
          <p>Buy, sell, and trade using the Pi ecosystem.</p>
        </div>
      </div>

      <footer
        style={{
          background: "#6C4CF1",
          color: "white",
          textAlign: "center",
          padding: "30px 20px",
        }}
      >
        <h3>MINGLE</h3>

        <p>Connect • Share • Grow Together</p>

        <small>© 2026 Mingle. All rights reserved.</small>
      </footer>
    </div>
  );
}
