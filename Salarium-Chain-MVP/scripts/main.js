let walletAddress = "";

async function connectWallet() {
  if (window.ethereum) {
    const accounts = await ethereum.request({ method: "eth_requestAccounts" });
    walletAddress = accounts[0];
    document.getElementById("walletAddress").innerText = "Connected: " + walletAddress;
  } else {
    alert("MetaMask not detected.");
  }
}

function mintGRIT() {
  const amt = document.getElementById("mintAmount").value;
  alert("Minting GRIT: " + amt + " (stub only)");
}

function convertGRIT() {
  const amt = document.getElementById("convertAmount").value;
  alert("Converting GRIT to GRAIN: " + amt + " (stub only)");
}
