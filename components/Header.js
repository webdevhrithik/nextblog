import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Fact</span> Crescendo
      </h1>
      <p className={headerStyles.description}>Facts behind every viral news</p>
    </div>
  );
};

export default Header;
