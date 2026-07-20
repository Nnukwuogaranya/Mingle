export default function App() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      background: "#6C4CF1",
      color: "white",
      fontFamily: "Arial"
    }}>
      <h1>MINGLE</h1>

      <p>Connect. Share. Grow Together.</p>

      <button
        style={{
          padding: "12px 24px",
          border: "none",
          borderRadius: "8px",
          background: "#F4B400",
          color: "#000",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Continue with Pi
      </button>
    </div>
  );
}
