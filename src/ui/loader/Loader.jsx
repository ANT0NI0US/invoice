import styles from "./Loader.module.css";

function Loader() {
  return (
    <div
      className={
        "flex min-h-[80vh] items-center justify-center bg-slate-200/20 backdrop-blur-sm"
      }
    >
      <div
        className={`${styles.loader} h-[4px] w-[4px] rounded-[50%] text-primary`}
      ></div>
    </div>
  );
}

export default Loader;
