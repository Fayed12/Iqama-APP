function Input({ city, setCity, placeholder }) {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
    </>
  );
}

export default Input;