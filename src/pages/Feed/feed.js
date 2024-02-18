import HeaderMain from "../../components/HeaderMain/HeaderMain";
import CheckoutComponent from '../../components/Api/Checkout'

function Feed() {
  return (
    <div>
      <HeaderMain />
      <main>
        <div>
          <CheckoutComponent />
        </div>
      </main>
    </div>
  );
}

export default Feed;
