import "./guest-form.styles.css";

const GuestForm = () => {
  return (
    <div className="form-container">
      <form>
        <div className="form-input-control">
          <div className="form-input-group">
            <span>Name</span>
            <input
              disabled
              className="disabled"
              type="text"
              value="Benjamin Nartey"
            />
          </div>
          <div className="form-input-group">
            <span>Department</span>
            <input
              type="text"
              value="Information System"
              disabled
              className="disabled"
            />
          </div>
          <div className="form-input-group">
            <span>Room No</span>
            <input type="text" value="210" disabled className="disabled" />
          </div>
          <div className="form-input-group">
            <span>Personal Line</span>
            <input
              type="text"
              value="0247450384"
              disabled
              className="disabled"
            />
          </div>
          <div className="form-input-group">
            <span>Direct Line</span>
            <input type="text" value="01123" disabled className="disabled" />
          </div>
          <div className="form-input-group">
            <span>Extention</span>
            <input type="text" value="2299" disabled className="disabled" />
          </div>
        </div>
        <div className="form-input-control">
          <div className="form-input-group">
            <span>Guest Name</span> <input type="text" value="" />
          </div>
          <div className="form-input-group">
            <span>Tag No</span> <input type="text" value="" />
          </div>
          <div className="form-input-group">
            <span>Contact</span> <input type="text" value="" />
          </div>
          <div className="form-input-group">
            <span>Relationship</span> <input type="text" value="" />
          </div>
          <div className="form-input-group">
            <span>Reasons for visit</span> <input type="text" value="" />
          </div>
        </div>
        <button className="btn-submit">Submit</button>
      </form>
    </div>
  );
};

export default GuestForm;
