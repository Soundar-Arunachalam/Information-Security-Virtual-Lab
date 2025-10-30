
// Helper Functions
function toHex(num, length = 8) {
  return num.toString(16).padStart(length, '0');
}

function leftRotate(value, bits) {
  return ((value << bits) | (value >>> (32 - bits))) >>> 0;
}

// Pad message to 512-bit blocks (SHA-1 spec)
function sha1Pad(message) {
  const encoder = new TextEncoder();
  const msgBytes = Array.from(encoder.encode(message));
  const bitLen = msgBytes.length * 8;

  msgBytes.push(0x80);

  while ((msgBytes.length * 8) % 512 !== 448) {
    msgBytes.push(0x00);
  }

  const lenHi = Math.floor(bitLen / 2 ** 32);
  const lenLo = bitLen >>> 0;

  for (let i = 3; i >= 0; i--) {
    msgBytes.push((lenHi >>> (i * 8)) & 0xff);
  }
  for (let i = 3; i >= 0; i--) {
    msgBytes.push((lenLo >>> (i * 8)) & 0xff);
  }

  return msgBytes;
}

// Display function with animations
async function displayStep(text, highlight = false) {
  const resultWindow = document.getElementById('resultWindow');
  const line = document.createElement('div');
  line.textContent = text;
  if (highlight) line.classList.add('step-highlight');
  line.classList.add('fade-in');
  resultWindow.appendChild(line);
  resultWindow.scrollTop = resultWindow.scrollHeight;
  await new Promise(r => setTimeout(r, 1500)); // 1.5 sec delay
}

// Display explanation text box
async function displayExplanation(text) {
  const resultWindow = document.getElementById('resultWindow');
  const box = document.createElement('div');
  box.className = 'explanation-box fade-in';
  box.innerHTML = text;
  resultWindow.appendChild(box);
  resultWindow.scrollTop = resultWindow.scrollHeight;
  await new Promise(r => setTimeout(r, 2500)); // Slightly longer delay for explanation
}

// Function f explanation and calculation
function fExplanation(t, b, c, d) {
  if (t < 20) return `<span class="highlight-var">f(t,b,c,d)</span> = (b AND c) OR (NOT b AND d)<br/>
  = (${toHex(b)}) & (${toHex(c)}) | (~${toHex(b)}) & (${toHex(d)})`;
  if (t < 40) return `<span class="highlight-var">f(t,b,c,d)</span> = b XOR c XOR d<br/>
  = (${toHex(b)}) ^ (${toHex(c)}) ^ (${toHex(d)})`;
  if (t < 60) return `<span class="highlight-var">f(t,b,c,d)</span> = (b AND c) OR (b AND d) OR (c AND d)<br/>
  = (${toHex(b)}) & (${toHex(c)}) | (${toHex(b)}) & (${toHex(d)}) | (${toHex(c)}) & (${toHex(d)})`;
  return `<span class="highlight-var">f(t,b,c,d)</span> = b XOR c XOR d<br/>
  = (${toHex(b)}) ^ (${toHex(c)}) ^ (${toHex(d)})`;
}

// SHA-1 first iteration demonstration with detailed steps
async function sha1Demo(message) {
  const resultWindow = document.getElementById('resultWindow');
  resultWindow.innerHTML = ''; // Clear previous

  await displayStep(`Original message: "${message}"`, true);
  
  // Step 1: Padding message
  const padded = sha1Pad(message);
  await displayStep(`Message length (bits): ${message.length * 8}`);
  await displayStep(`Message after padding (hex, first 64 bytes):\n${padded.slice(0,64).map(b => b.toString(16).padStart(2,'0')).join(' ')}`, true);
  
  // Parse 512-bit block (64 bytes)
  const block = padded.slice(0,64);
  
  // Prepare message schedule W
  let W = new Array(80);
  for(let i=0; i<16; i++) {
    W[i] = (block[i*4]<<24) | (block[i*4+1]<<16) | (block[i*4+2]<<8) | (block[i*4+3]);
  }
  await displayStep(`First 16 words (W[0..15]):`);
  for(let i=0; i<16; i++) {
    await displayStep(`W[${i}] = 0x${toHex(W[i])}`, i % 2 === 0);
  }

  // Extend W[16..79]
  for(let i=16; i<80; i++) {
    W[i] = leftRotate(W[i-3] ^ W[i-8] ^ W[i-14] ^ W[i-16], 1);
  }
  await displayStep(`Extended W[16..79] computed.`, true);

  // Step 2: Initialize variables
  let h0 = 0x67452301;
  let h1 = 0xEFCDAB89;
  let h2 = 0x98BADCFE;
  let h3 = 0x10325476;
  let h4 = 0xC3D2E1F0;
  
  await displayStep(`Initial Constants (h0..h4):`);
  await displayStep(`h0 = 0x${toHex(h0)}`, true);
  await displayStep(`h1 = 0x${toHex(h1)}`, true);
  await displayStep(`h2 = 0x${toHex(h2)}`, true);
  await displayStep(`h3 = 0x${toHex(h3)}`, true);
  await displayStep(`h4 = 0x${toHex(h4)}`, true);

  // Define function f and constant k based on iteration t
  function f(t, b, c, d) {
    if (t < 20) return (b & c) | (~b & d);
    if (t < 40) return b ^ c ^ d;
    if (t < 60) return (b & c) | (b & d) | (c & d);
    return b ^ c ^ d;
  }

  function k(t) {
    if (t < 20) return 0x5A827999;
    if (t < 40) return 0x6ED9EBA1;
    if (t < 60) return 0x8F1BBCDC;
    return 0xCA62C1D6;
  }

  // Step 3: Perform first iteration (t=0) with detailed steps
  let a = h0, b = h1, c = h2, d = h3, e = h4;

  await displayStep(`Starting first iteration (t=0):`, true);
  await displayStep(`a = h0 = 0x${toHex(a)}`);
  await displayStep(`b = h1 = 0x${toHex(b)}`);
  await displayStep(`c = h2 = 0x${toHex(c)}`);
  await displayStep(`d = h3 = 0x${toHex(d)}`);
  await displayStep(`e = h4 = 0x${toHex(e)}`);

  // Explanation of f
  await displayExplanation(fExplanation(0, b, c, d));
  const ft = f(0, b, c, d) >>> 0;
  await displayStep(`f(t,b,c,d) evaluated = 0x${toHex(ft)}`, true);

  // Show k constant for t=0
  const kt = k(0) >>> 0;
  await displayStep(`k(t) constant for t=0 = 0x${toHex(kt)}`, true);

  // Show W[0]
  await displayStep(`W[0] = 0x${toHex(W[0])}`, true);

  // Show leftRotate(a, 5)
  const rotA = leftRotate(a, 5);
  await displayStep(`leftRotate(a, 5) = leftRotate(0x${toHex(a)}, 5) = 0x${toHex(rotA)}`, true);

  // Show leftRotate(b, 30)
  const rotB = leftRotate(b, 30);
  await displayStep(`leftRotate(b, 30) = leftRotate(0x${toHex(b)}, 30) = 0x${toHex(rotB)}`, true);

  // Calculate temp
  const temp = (rotA + ft + e + kt + (W[0]>>>0)) >>> 0;
  await displayStep(`Calculate temp:\ntemp = (leftRotate(a,5) + f + e + k + W[0]) mod 2^32\n= (0x${toHex(rotA)} + 0x${toHex(ft)} + 0x${toHex(e)} + 0x${toHex(kt)} + 0x${toHex(W[0])}) mod 2^32 = 0x${toHex(temp)}`, true);

  // Update variables
  e = d;
  d = c;
  c = rotB;
  b = a;
  a = temp;

  await displayStep(`Updated variables after iteration 0:`, true);
  await displayStep(`a = 0x${toHex(a)}`);
  await displayStep(`b = 0x${toHex(b)}`);
  await displayStep(`c = 0x${toHex(c)}`);
  await displayStep(`d = 0x${toHex(d)}`);
  await displayStep(`e = 0x${toHex(e)}`);

  // Step 4: Complete remaining 79 iterations (without detailed output)
  await displayStep(`Completing remaining 79 iterations...`);
  for (let t=1; t<80; t++) {
    const ft2 = f(t, b, c, d) >>> 0;
    const kt2 = k(t) >>> 0;
    const temp2 = (leftRotate(a,5) + ft2 + e + kt2 + (W[t]>>>0)) >>> 0;

    e = d;
    d = c;
    c = leftRotate(b, 30) >>> 0;
    b = a;
    a = temp2;
  }

  // Step 5: Add results to initial hash value
  h0 = (h0 + a) >>> 0;
  h1 = (h1 + b) >>> 0;
  h2 = (h2 + c) >>> 0;
  h3 = (h3 + d) >>> 0;
  h4 = (h4 + e) >>> 0;

  const digest = [h0, h1, h2, h3, h4].map(x => toHex(x)).join('');

  await displayStep(`Final hash values added to initial constants:`, true);
  await displayStep(`h0 = 0x${toHex(h0)}`);
  await displayStep(`h1 = 0x${toHex(h1)}`);
  await displayStep(`h2 = 0x${toHex(h2)}`);
  await displayStep(`h3 = 0x${toHex(h3)}`);
  await displayStep(`h4 = 0x${toHex(h4)}`);

  await displayStep(`\n🎉 SHA-1 Digest (hex):\n${digest}`, true);

  return digest;
}

// Event handler
document.getElementById('startBtn').addEventListener('click', async () => {
  const btn = document.getElementById('startBtn');
  btn.disabled = true;
  const input = document.getElementById('inputMessage').value.trim();
  if(!input) {
    alert('Please enter a message.');
    btn.disabled = false;
    return;
  }
  try {
    await sha1Demo(input);
  } catch(e) {
    alert('An error occurred: ' + e.message);
  }
  btn.disabled = false;
  console.log("check successful!!!");
});

