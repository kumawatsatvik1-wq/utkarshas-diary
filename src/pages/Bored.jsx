import { useNavigate } from "react-router-dom"
function Bored() {
  const navigate = useNavigate()
  return (
    <div
      style={{
        minHeight: "100vh",

        backgroundImage: "url('/photos/borespace.jpg')",
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
  <source src="/photos/bored.mp3" type="audio/mp3" />
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
      <h1>For when you're bored 🎮</h1>

      <p
        style={{
          marginTop: "30px",
          fontSize: "1.5rem",
          lineHeight: "2",
          maxWidth: "700px",
        }}
      >
        I dont even know where to begin with this "Bore ho raha hai yaar" issue. I'd say stop flirting with random guys whenever you are bored, what if someday you flirt someone who actually likes you lol. 
        <br />
        Want some alternatives for that? PLAY GAMES WITH ME!! I'd literally play any kind of game with you, and I'm probably better at it than you so yk lemme carry you bbg. 
      </p>
    </div>
  )
}

export default Bored