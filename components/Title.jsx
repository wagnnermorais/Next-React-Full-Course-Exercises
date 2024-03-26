export default function Title({ title, subtitle, test }) {
  return test ? (
    <>
      <p>{title}</p>
      <p>{subtitle}</p>
    </>
  ) : (
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </>
  );
}
