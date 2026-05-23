import { useNavigate } from "react-router-dom"
function Songs() {
  const navigate = useNavigate()
  return (
    <div
      style={{
        minHeight: "100vh",

        backgroundImage: "url('/photos/songspace.jpg')",
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
  <source src="/photos/songs.mp3" type="audio/mp3" />
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
      <h1>Songs that remind me of you 🎵</h1>

      <p
        style={{
          marginTop: "30px",
          fontSize: "1.5rem",
          lineHeight: "2",
          maxWidth: "700px",
        }}
      >
        These are some songs that remind me of you ♡
        <br />
        Some because of the lyrics,
        <br />
        Some because of the memories,
        <br />
        And some because they just feel like you.
      </p>
      <iframe
  data-testid="embed-iframe"
  style={{
    borderRadius: "12px",
    marginTop: "40px",
  }}
  src="https://open.spotify.com/embed/playlist/2opV0dt3nQF6VkVyhabq6d?utm_source=generator"
  width="100%"
  height="352"
  frameBorder="0"
  allowFullScreen=""
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
></iframe>
    </div>
  )
}

export default Songs