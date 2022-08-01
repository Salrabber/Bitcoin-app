import classes from '../styles/loader.module.scss'

export default function Loader() {
  return (
    <div className={classes.loader}>
      <div className="spinner-border text-danger" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
    </div>
    
  );
}
