import Items from "./Items";

const FoodItems = ({kchbhi}) =>{
  let foodItems = ["Dal","Green Vegitable","Roti","Salad","Milk","Ghee"];

  return (
    <>
      <ul className="list-group"> 
        {kchbhi.map((item) => (
          <Items key={item} ayush={item}></Items>))}
      </ul>
    </>
  );
}

export default FoodItems;