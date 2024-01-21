import React, { useState } from "react";

const App = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const validatePassword = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("The password should contain at least 6 characters");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      setError("The password should contain at least one uppercase letter");
      return;
    }

    if (!/[a-z]/.test(password)) {
      setError("The password should contain at least one lowercase letter");
      return;
    }

    if (!/[0-9]/.test(password)) {
      setError("The password should contain at least one number");
      return;
    }

    if (!/[\!\@\#\$\%\^\&\*\(\)\_\-\+\=\{\[\}\]\|:\";<,>.]/.test(password)) {
      setError("The password should contain at least one special character");
      return;
    }

    setError("Successful");
  };

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button onClick={validatePassword}>Submit</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default App;
