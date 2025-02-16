import styles from "./Items.module.css"

const Items = ({ayush}) => {
   return (
     <li className={`${styles.Ak_item}`}>
      <span className="ak_span">{ayush}</span></li>

   )
}

export default Items;