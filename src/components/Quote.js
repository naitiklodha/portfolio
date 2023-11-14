// components/Quote.js
import { useEffect, useState } from "react";

const Quote = () => {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const quotes = [
      "The best error message is the one that never shows up. - Thomas Fuchs",
      "Simplicity is the soul of efficiency. - Austin Freeman",
      "Good software, like wine, takes time. - Joel Spolsky",
      "The most disastrous thing that you can ever learn is your first programming language. - Alan Kay",
      "Programming isn't about what you know; it's about what you can figure out. - Chris Pine",
      "If debugging is the process of removing software bugs, then programming must be the process of putting them in. - Edsger Dijkstra",
      "The only way to go fast is to go well. - Robert C. Martin",
      "The most important property of a program is whether it accomplishes the intention of its user. - C.A.R. Hoare",
      "Code is like humor. When you have to explain it, it’s bad. - Cory House",
      "The function of good software is to make the complex appear to be simple. - Grady Booch",
      "It’s harder to read code than to write it. - Joel Spolsky",
      "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. - Rick Osborne",
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }, []);

  return (
    <div className="text-center text-gray-500 max-w-4/5">
      <p className="text-xl">{quote}</p>
    </div>
  );
};

export default Quote;
