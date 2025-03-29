import { useState, useEffect } from "react";

function App() {
const randomnumber = () => Math.floor(Math.random() * 10) + 1;

 const [n1, num1] = useState(randomnumber());
 const [n2, num2] = useState(randomnumber());
 const [ans, answer] = useState("");
   const [points, point] = useState(0);
 const [score, highscore] = useState(0);
 const [lifeLeft, lifes] = useState(3);
   const [time, timer] = useState(6);
 const [dead, gameover] = useState(false);

 useEffect(() => {
 if (time > 0 && !dead) {
 const countdown = setTimeout(() => timer(time - 1), 1000);
 return () => clearTimeout(countdown);
 } else if (time === 0) {
 fault();
 }
 }, [time, dead]);

const nextq = () => {
 num1(randomnumber());
 num2(randomnumber());
 timer(6);
 answer(""); };

const enterans = () => {
 const userans = parseInt(ans);
 if (userans === n1 * n2) {
 point(points + 1);
 if (points + 1 > score) highscore(points + 1);
 nextq();
 } else {
 fault();
 }
};

const fault = () => {
 if (lifeLeft > 1) {
 lifes(lifeLeft - 1);
 nextq();
 } else {
 gameover(true);
 }
};

const resetgame = () => {
 point(0);
 lifes(3);
 gameover(false);
 nextq();
};

return (
<>
<div style={{ width: "100vw", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "lightgrey", color: "black", flexDirection: "column" }}>
 <div style={{ backgroundColor: "#555", padding: "30px", borderRadius: "15px", textAlign: "center", width: "90%", maxWidth: "500px", boxShadow: "0 6px 12px rgba(0,0,0,0.5)" }}>
<h1 style={{ color: "orange", marginBottom: "20px" }}>Multiplication Game</h1>
{dead ? (
<h2 style={{ color: "crimson", fontWeight: "bold" }}>Game Over! Total Points: {points}</h2>
) : (
<>
<h2>⏳ Time: <span style={{ color: "gold" }}>{time}s</span></h2>
<h2>❤️ Lives: <span style={{ color: "tomato" }}>{lifeLeft}</span></h2>
<h2 style={{ fontSize: "22px", fontWeight: "bold", marginTop: "12px" }}>{n1} x {n2} = ?</h2>

<div style={{ marginTop: "12px", display: "flex", justifyContent: "center", gap: "12px" }}>
<input type="number" value={ans} onChange={(e) => answer(e.target.value)} onKeyDown={(e) => e.key === "Enter" && enterans()} style={{ padding: "8px", width: "70px", borderRadius: "6px", border: "2px solid #444", textAlign: "center" }} placeholder="Type it" />
<button onClick={enterans} style={{ padding: "8px 12px", backgroundColor: "#2a9d8f", color: "white", border: "none", borderRadius: "6px", cursor: "pointer" }}>Go!</button>
</div>
<div style={{ marginTop: "12px" }}>
<h2>Score: <span>{points}</span></h2>
<h2>High Score: <span>{score}</span></h2>
</div>
</>
)}
<button onClick={resetgame} style={{ marginTop: "15px", padding: "8px", color: "white", border: "none", borderRadius: "6px", cursor: "pointer", backgroundColor: "red" }}>Restart</button>
 </div>
</div>
</>
);
}

export default App;
