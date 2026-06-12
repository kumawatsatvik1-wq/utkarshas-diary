import { useNavigate } from "react-router-dom"
function Love() {
  const navigate = useNavigate()
  return (
    <div
      style={{
        minHeight: "100vh",

        backgroundImage: "url('/photos/lovespace.jpg')",
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
  <source src="/photos/love.mp3" type="audio/mp3" />
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
      <h1>Reasons why I love you ♡</h1>

      <p
        style={{
          marginTop: "30px",
          fontSize: "1.5rem",
          lineHeight: "2",
          maxWidth: "700px",
        }}
      >
        I don't.

<div style={{ height: "500px" }}></div>

Okay fine, maybe I do.
<br /><br />

I love how you are always so earnest and active
<br /><br />

I love how you can easily communicate with others and instantly make them feel comfy.
<br /><br />

I love your time management skills.
<br /><br />

I love how its physically imposibble for you to lie properly because you start laughing like instantly.
<br /><br />

I love how you find joy in the smallest of things. Your chaotic energy really makes my day.
<br /><br />

Oh and people may call you "Nepali" but I really love your eyes. The world probably looks better from your POV.
<br /><br />

Your hair. I love playing with your hair. They're really soft to touch.
<br /><br />

And the way you cannot pronounce some words, I find that really cute lol.
<br /><br />

If i could give you one thing, I'd give you the ability to see yourself through my eyes so you know HOW special you are.
<br /><br />

Btw you know how much I love space, like I reaaaaalllyyy love space, it's also the reason why I chose to make this website space-themed, because I LOVE YOU, not just a specific part of you, but the entirity of you, from every last strand of hair on your head to the bottom of your toes, every emotional side of you, every single unfunny joke you've ever cracked, every bad decision you have ever made, every clumsy fall you've ever had. I LOVE IT ALL.
      </p>
    </div>
  )
}

export default Love