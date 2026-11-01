function StoryCharacter({ character }) {
  if (!character) return null;

  const characters = Array.isArray(character)
    ? character
    : [character];

  return (
    <>
      {characters.map((item, index) => (
        <img
          key={item.name || index}
          src={item.image}
          alt={item.name || "Karakter cerita"}
          className={`
            ${item.width || "w-auto"}
            ${item.position || " absolute bottom-0"}
              h-auto
              object-contain
              z-10
          `}
        />
      ))}
    </>
  );
}

export default StoryCharacter;