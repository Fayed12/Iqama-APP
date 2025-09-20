function Input({ country, setCountry, placeholder }) {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
    </>
  );
}

export default Input;