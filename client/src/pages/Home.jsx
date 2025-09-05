import { useEffect, useState } from "react";

function Home() {
  const [ads, setAds] = useState([]);

  // گرفتن لیست آگهی‌ها از سرور
  useEffect(() => {
    fetch("http://localhost:5000/api/ads") // آدرس بک‌اند
      .then((res) => res.json())
      .then((data) => setAds(data))
      .catch((err) => console.error("Error fetching ads:", err));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1 style={{ color: "green" }}>🌿 لیست آگهی‌ها</h1>

      {ads.length === 0 ? (
        <p>هیچ آگهی موجود نیست</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          {ads.map((ad) => (
            <div
              key={ad._id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "15px",
                background: "#f9f9f9",
              }}
            >
              {ad.images?.[0] && (
                <img
                  src={ad.images[0]}
                  alt={ad.title}
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              )}
              <h2 style={{ fontSize: "18px", margin: "10px 0" }}>{ad.title}</h2>
              <p>{ad.description}</p>
              <p>
                <b>قیمت:</b> {ad.price} افغانی
              </p>
              <p>
                <b>شهر:</b> {ad.city}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
