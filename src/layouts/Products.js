import React from "react";

function Products() {
  const data = [
    { id: 1, title: "Card 1", description: "This is the first card." },
    { id: 2, title: "Card 2", description: "This is the second card." },
    { id: 3, title: "Card 3", description: "This is the third card." },
  ];

  // Card component defined inside the App component
  const Card = ({ title, description }) => {
    return (
      <div className="border rounded-lg p-4 shadow-md">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p>{description}</p>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
