function H1Block({ content }) {
    return (
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">{content.title}</h1>
        {/* Iterate over paragraphs array and render each paragraph text */}
        {content.paragraphs.map((para, index) => (
          <p key={index} className="mt-6">
            {para.text}
          </p>
        ))}
      </div>
    );
  }
  
  export default H1Block;