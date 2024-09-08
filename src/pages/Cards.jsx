import React, { useState, useEffect } from "react";

const data = [
  {
    title: "Item 1",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    visitWeb: "goggle.com",
    github: "github",
    server: "yeah",
  },
  {
    title: "Item 2",
    img: "image2.jpg",
    visitWeb: "goggle.com",
    github: "github",
    server: "yeah",
  },
  {
    title: "Item 3",
    img: "image3.jpg",
    visitWeb: "goggle.com",
    github: "github",
    server: "yeah",
  },
  {
    title: "Item 4",
    img: "image4.jpg",
    visitWeb: "goggle.com",
    github: "github",
    server: "yeah",
  },
  {
    title: "Item 5",
    img: "image5.jpg",
    visitWeb: "goggle.com",
    github: "github",
    server: "yeah",
  },
  {
    title: "Item 6",
    img: "image6.jpg",
    visitWeb: "goggle.com",
    github: "github",
    server: "yeah",
  },
];

const CardItems = ({ title, img, visitWeb, server }) => {
  return (
    <div className="max-w-xs mx-auto">
      <img
        className="max-w-60"
        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=
              crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt={title}
      />
      <p className="max-w-60">{title}</p>
      <p className="text-gray-500 text-xs">There is a chenle{visitWeb}</p>
      <p className="text-gray-500 text-xs">{server} views</p>
    </div>
  );
};

const CardSkeleton = () => {
  return (
    <div className="max-w-xs mx-auto space-y-2">
      <div className="w-60 h-36 bg-slate-400 animate-pulse rounded-sm"></div>
      <p className="max-w-60 bg-slate-400 animate-pulse rounded-md h-4">
        foor card
      </p>
      <p className="text-gray-500 text-xs max-w-32 bg-slate-400 animate-pulse rounded-md h-4">
        There is a chenle
      </p>
      <p className="text-gray-500 text-xs max-w-20 bg-slate-400 animate-pulse rounded-md h-4">
        50 views
      </p>
    </div>
  );
};

const Cards = () => {
  const [isLoading, setLoading] = useState(true);
  console.log(isLoading);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a loading time of 2 seconds
    console.log(timer);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((item, index) => (
        <div key={index}>
          {isLoading ? (
            <CardSkeleton />
          ) : (
            <CardItems
              title={item.title}
              img={item.img}
              visitWeb={item.visitWeb}
              server={item.server}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Cards;
