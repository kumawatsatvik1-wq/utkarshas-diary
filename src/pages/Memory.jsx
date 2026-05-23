import { useNavigate } from "react-router-dom"
function Memory() {
  const navigate = useNavigate()
  return (
    <div
      style={{
        minHeight: "100vh",

        backgroundImage: "url('/photos/memoryspace.jpg')",
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
  <source src="/photos/memory.mp3" type="audio/mp3" />
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
      <h1>My favorite memory of us 📸</h1>

      <p
        style={{
          marginTop: "30px",
          fontSize: "1.5rem",
          lineHeight: "2",
          maxWidth: "700px",
        }}
      >
        Memories huhh. We dont have much yet but whatever we have are all special for me. If i had to choose my fav, it'd probably be the time when you just asked me and Riddhi to play a game in which we had to say a degen word with each alphabet. That was so weird and funny at the same time lol.
        <br />
        Cant forget the time when we teamed up against Samadhan Sir during the UNO incident, arguing with him was hella fun lol
        <br />
        OH AND WE CANT FORGET ABOUT THE 2ND PRICE WE WON IN THE SEMINAR!! I dont think I would have even participated in that if you hadnt called me.
        <br />
        LETS KEEP MAKING NEW MEMORIES TOGETHER OKAYY
      </p>
    </div>
  )
}

export default Memory