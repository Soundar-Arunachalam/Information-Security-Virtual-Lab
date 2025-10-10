import React, { useState } from "react";

function HomePage() {
  return (
    <div className="page">
      <h2>Home Page</h2>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="page">
      <h2>About Page</h2>
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div style={styles.container}>
      <h1>Simple Page Switch Example</h1>

      <div style={styles.buttonContainer}>
        <button
          style={styles.button}
          onClick={() => setCurrentPage("home")}
        >
          Show Home
        </button>
        <button
          style={styles.button}
          onClick={() => setCurrentPage("about")}
        >
          Show About
        </button>
      </div>

      <div style={styles.pageContainer}>
        {currentPage === "home" ? <HomePage /> : <AboutPage />}
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "40px",
  },
  buttonContainer: {
    marginBottom: "20px",
  },
  button: {
    margin: "0 10px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
  },
  pageContainer: {
    marginTop: "30px",
    border: "2px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    maxWidth: "400px",
    margin: "auto",
  },
};

export default App;
