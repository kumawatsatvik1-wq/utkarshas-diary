import { useNavigate } from "react-router-dom"
function Birthday() {
  const navigate = useNavigate()
  return (
    <div
      style={{
        minHeight: "100vh",

        backgroundImage: "url('/photos/birthspace.jpg')",
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
        textAlign: "center",
        padding: "20px",
        animation: "fadeIn 1s ease",
      }}
    >
      <audio autoPlay loop>
  <source src="/photos/birthday.mp3" type="audio/mp3" />
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
      <h1>Happy Birthday Utkarsha ❤️</h1>

      <p
        style={{
          marginTop: "30px",
          fontSize: "1.5rem",
          lineHeight: "2",
          maxWidth: "700px",
        }}
      >
        Eh Happy 19 Utkarshaaa, Ik this website isnt perfect but I honestly couldnt think of anything better.. 
        <br />
        I hope this birthday makes you smile alot! THANKYOU FOR EXISTING! You are one of the best people I met last year and I'm really glad it happened.
        <br />
        Let's hope your humour improves this year coz I'm tired being the funniest of the group.
        <br />
        DONT FORGET TO CLICK TONS OF PICS AND HAVE LOTS OF FUNNNN

      </p>
    </div>
  )
}

export default Birthday