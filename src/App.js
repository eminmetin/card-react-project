import Card from "./Card";
import "./App.css";
function App() {
  return (
    <>
      <Card
        img="https://scontent.fasr1-2.fna.fbcdn.net/v/t1.6435-9/180978949_314228950059549_1005358403722529104_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=wOS_-c3FN-0AX9T0_sp&_nc_ht=scontent.fasr1-2.fna&oh=00_AfBT6ArpAkUO7n9Y1SmvvqFl85qSzcRSGdY_lm6tugPrng&oe=648BEECE"
        title="X"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at leo quam. Aliquam erat volutpat"
      />
      <Card
        img="
https://cdn.ebaumsworld.com/mediaFiles/picture/1035099/85932860.jpg"
        title="Y"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at leo quam. Aliquam erat volutpat"
      />
      <Card
        img="
https://www.codespeedy.com/wp-content/uploads/2020/01/low.jpg"
        title="Z"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at leo quam. Aliquam erat volutpat"
      />
    </>
  );
}

export default App;
