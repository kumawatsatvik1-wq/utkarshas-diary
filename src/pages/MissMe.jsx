import { useNavigate } from "react-router-dom"
function MissMe() {
  const navigate = useNavigate()
  return (
    <div
      style={{
        minHeight: "100vh",

        backgroundImage: "url('/photos/missspace.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",

        backgroundColor: "rgba(0,0,0,0.45)",
        backgroundBlendMode: "darken",

        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "'Poppins', sans-serif",
        padding: "40px",
        textAlign: "center",
        animation: "fadeIn 1s ease",
      }}
    >
      <audio autoPlay loop>
  <source src="/photos/miss.mp3" type="audio/mp3" />
</audio>
      <button
  onClick={() => navigate("/")}
  style={{
    position: "absolute",
    top: "30px",
    left: "30px",
    background: "none",
    border: "none",
    color: "#b8b8d1",
    fontFamily: "'Poppins', sans-serif",
    cursor: "pointer",
    fontSize: "1.0rem",
  }}
>
  ← Back to Diary
</button>
      <h1>For when you miss me ♡</h1>

      <p
        style={{
          marginTop: "30px",
          fontSize: "1.5rem",
          lineHeight: "2",
          maxWidth: "700px",
        }}
      >
        I am pretty sure you dont miss "me", you just probably miss "bullying" me like you are doing in this photo.
        <br />
        You know whenever we are together, I always remember the lyrics of a song which go like "Have I known you twenty seconds or twenty years." You are already a part of my daily life.
        <br />
        <img
  src="/photos/us.jpg"
  alt="us"
 style={{
  width: "300px",
  borderRadius: "20px",
  marginTop: "30px",
}}
/>
      </p>
    </div>
  )
}

export default MissMe