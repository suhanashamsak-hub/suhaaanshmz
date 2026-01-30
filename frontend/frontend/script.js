document.getElementById("btn").addEventListener("click", async () => {
  const res = await fetch("http://localhost:5000/api/test");
  const data = await res.json();
  alert(data.message);
});
