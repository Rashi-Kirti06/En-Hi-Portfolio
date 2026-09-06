function SectionTitle({ subtitle, title }) {
  return (
    <div className="section-heading">
      <p>{subtitle}</p>
      <h2>{title}</h2>
    </div>
  );
}

export default SectionTitle;