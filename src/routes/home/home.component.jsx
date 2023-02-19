import GuestForm from "../../components/guest-form/guest-form.component";
import "./home.styles.css";

const Home = ({ staffDetail }) => {
  return (
    <div className="home-container">
      <GuestForm staffDetail={staffDetail} />
    </div>
  );
};

export default Home;
