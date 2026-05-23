import { useNavigate } from "react-router-dom"
function App() {
  const navigate = useNavigate()
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: "url('/photos/space.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        cursor: "url('/photos/rocket.png') 16 16, auto",
        
        backgroundColor: "rgba(0,0,0,0.45)",
        backgroundBlendMode: "darken",
        
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        color: "white",
      }}
    >
      <h1
        style={{
          fontSize: "clamp(2rem, 8vw, 4rem)",
          margin: 0,
          color: "#9c5a5a",
        }}
      >
        Utkarsha's Diary
      </h1>

      <p
        style={{
          marginTop: "10px",
          color: "#b8b8d1",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        ♡♡♡
      </p>
      <div
  style={{
    marginTop: "60px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "32px",
    width: "90%",
maxWidth: "700px",
  }}
>
  {[
    "Open on your birthday",
    "Open when you're sad",
    "Open when you're nervous",
    "Open when you're bored",
    "Open when you miss me",
    "Open when you're mad at me",
    "Songs that remind me of you",
    "My favorite memory of us",
    "Reasons why I love you",
  ].map((text, index) => (
    <div
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-8px) scale(1.03)"
    e.currentTarget.style.boxShadow =
      "0 0 20px rgba(139, 139, 209, 0.6)"
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0px) scale(1)"
    e.currentTarget.style.boxShadow =
      "0 0 10px rgba(139, 139, 209, 0.2)"
  }}
      key={index}
      onClick={() => {
  if (index === 0) {
    navigate("/birthday")
  }
  if (index === 1) {
  navigate("/sad")
}
if (index === 2) {
  navigate("/nervous")
}
if (index === 3) {
  navigate("/bored")
}
if (index === 4) {
  navigate("/missme")
}
if (index === 5) {
  navigate("/mad")
}
if (index === 6) {
  navigate("/songs")
}
if (index === 7) {
  navigate("/memory")
}
if (index === 8) {
  navigate("/love")
}
}}
      style={{
  width: "100%",
  height: "100px",
  backgroundColor: "rgba(27, 29, 54, 0.75)",
  border: "2px solid #8b8bd1",
  borderRadius: "16px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "10px",
  fontSize: "0.8rem",
  fontFamily: "'Poppins', sans-serif",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: "0 0 10px rgba(139, 139, 209, 0.2)", 
}}
    >
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "10px",
    }}
  >
    <div style={{ fontSize: "1.5rem" }}>
      ⭐
    </div>

    <div>{text}</div>
  </div>
</div>
))}
</div>
    </div>
  )
}

export default App