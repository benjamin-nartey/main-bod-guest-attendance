import GuestForm from "../../components/guest-form/guest-form.component";
import "./home.styles.css";

const Home = ({ staffDetail }) => {
  return (
    <div className="home-container">
      {staffDetail.length !== 0 ? (
        <GuestForm staffDetail={staffDetail} />
      ) : null}
    </div>
  );
};

export default Home;
