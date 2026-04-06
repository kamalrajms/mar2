import React, { useRef, useState, useEffect } from "react";

export default function UseRefHook() {
  // eg1
  const inputRef = useRef();

  const focusinput = () => {
    inputRef.current.focus();
  };
  // eg2

  const [sec, setSec] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSec((s) => s + 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, []);
  // eg3

  const [newProduct, setNewProduct] = useState(true);
  const [imageURL, setImageURL] = useState("");

  const imgRef = useRef(0);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setImageURL(preview);
      setNewProduct(false);
    }
  };

  return (
    <div>
      {/* eg1 */}
      <div>
        <input type="text" placeholder="Enter a name" ref={inputRef} />
        <button onClick={focusinput}>focus an input</button>
      </div>
      {/* eg2 */}
      <div>
        <h2>Timer:{sec}</h2>
        <button onClick={() => clearInterval(intervalRef.current)}>Stop</button>
      </div>

      {/* eg3 */}
      <div>
        <input
          type="file"
          ref={imgRef}
          accept="image/*"
          hidden
          onChange={handleImage}
        />
        {newProduct ? (
          <div className="image-box" onClick={() => imgRef.current.click()}>
            upload image
          </div>
        ) : (
          <img
            className="ref-img"
            src={imageURL}
            onClick={() => imgRef.current.click()}
          />
        )}
      </div>
    </div>
  );
}
