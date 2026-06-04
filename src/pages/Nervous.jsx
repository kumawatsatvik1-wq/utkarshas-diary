import { useNavigate } from "react-router-dom"
function Nervous() {
  const navigate = useNavigate()
  return (
    <div
      style={{
        minHeight: "100vh",

        backgroundImage: "url('/photos/nervousspace.jpg')",
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
  <source src="/photos/nervous.mp3" type="audio/mp3" />
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
      <h1>For when you're nervous 🤍</h1>

      <p
        style={{
          marginTop: "30px",
          fontSize: "1.5rem",
          lineHeight: "2",
          maxWidth: "700px",
        }}
      >
        Woah woah woah, You? NERVOUS? FOR WHAT?! THIS DOESNT SUIT YOU AT ALL! Look at those medals hanging in your room, those are physical evidence of how awesome you are.
        <br />
        I'm sure youre gonna kill whatever has got you tensed, I mean atleast the history says that you always do so.
        <br />
        And lets be real, The WORST that can happen is that you hit rock bottom, but rock bottom aint so bad if you like collecting rocks. Go face whatever challenges you have right now and be bold and free.
        <br />
        YOU GOT THISS!!!!
      </p>
    </div>
  )
}

export default Nervous