export default function About() {
  return (
    <div className="page container flex column" style={{ gap: '30px' }}>
      <h1 className="title">
        Hi, I'm Farukh, <br />I build things for the web.
      </h1>
      <h3 className="text">I'm software developer and this is my portfolio.</h3>
      <button
        className="check-cv"
        onClick={() => {
          window.location.assign('https://kz.linkedin.com/in/farukh-kanzhayev');
        }}
      >
        Check out my CV
      </button>
    </div>
  );
}
