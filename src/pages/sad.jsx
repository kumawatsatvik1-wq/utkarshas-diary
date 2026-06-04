import { useNavigate } from "react-router-dom"
function Sad() {
  const navigate = useNavigate()
  return (
    <div
      style={{
        minHeight: "100vh",

        backgroundImage: "url('/photos/sadspace.jpg')",
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
  <source src="/photos/sad.mp3" type="audio/mp3" />
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
      <h1>For when you're sad 💙</h1>

      <p
        style={{
          marginTop: "30px",
          fontSize: "1.5rem",
          lineHeight: "2",
          maxWidth: "700px",
        }}
      >
        Okay so idk why you are sad but if youre reading this, I just want to let you know that I literally percieve you as a ball of sunshine.
        <br />
        That doesnt mean you are not allowed to be sad tho, I mean even Sun has solar eclipses every now and then, it becomes all dark and gloomy, but it always recovers. Infact I'd say if its you who spreads happiness all around, then I would like to be the one to bring a smile upon your face.
        <br />
        Just remember that when an atom loses an electron, it gains a positive charge, but it becomes unstable. Similarly, youre down right now but you'll be back stronger. If it ever gets too much for you to handle you can always reach out to me yk, we'd solve whatever it is together like we always do, our therapy sessions are NEVER gonna be a burden for me.
      </p>
    </div>
  )
}

export default Sad